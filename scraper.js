const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

async function scrapeAndSaveSchemes() {
  let browser;
  try {
    // IMPORTANT: Make sure this has your correct password
    const DB_CONNECTION_STRING = "mongodb+srv://prajapatvishnu7737:VISHNU7737@clxkotcxn8ccluster0.oyho2vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(DB_CONNECTION_STRING);

    const schemeSchema = new mongoose.Schema({
      id: String, title: String, category: String, state: String, minAge: Number,
      caste: String, maxIncome: Number, disability: String, official_link: String, description: String,
    });
    const Scheme = mongoose.models.Scheme || mongoose.model('Scheme', schemeSchema);
    
    console.log('[Auto-Scraper] Database connected. Launching browser...');
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    const TARGET_URL = 'https://pib.gov.in/AllRelease.aspx';
    console.log(`[Auto-Scraper] Navigating to ${TARGET_URL}...`);
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });

    // ==> SIMPLIFIED AND MORE ROBUST SELECTOR
    await page.waitForSelector('a.heading', { timeout: 15000 }); // Wait a bit longer for the links with class 'heading'

    const scrapedReleases = await page.$$eval('a.heading', links => {
      // Get the first 15 links found
      return links.slice(0, 15).map(link => ({
        title: link.innerText.trim(),
        url: link.href,
      }));
    });

    console.log(`[Auto-Scraper] Found ${scrapedReleases.length} potential announcements.`);
    
    if (scrapedReleases.length > 0) {
      for (const item of scrapedReleases) {
        if (item.title && item.url) {
          const existingScheme = await Scheme.findOne({ official_link: item.url });
          if (!existingScheme) {
            const newScheme = {
              id: `scraped-${Date.now()}-${item.title.slice(0, 10).replace(/\s/g, '-')}`,
              title: `Press Release: ${item.title}`,
              official_link: item.url,
              category: 'Announcement',
              description: `Government press release published on PIB. Details available at the official link.`,
              state: 'All India', minAge: 0, caste: 'Any', maxIncome: null, disability: 'Any',
            };
            console.log(`[Auto-Scraper] Saving new item: ${newScheme.title}`);
            const schemeDocument = new Scheme(newScheme);
            await schemeDocument.save();
          }
        }
      }
      console.log('[Auto-Scraper] Database update check complete!');
    } else {
      console.log('[Auto-Scraper] No new items found to add. The website structure may have changed.');
    }

  } catch (error) {
    console.error('[Auto-Scraper] An error occurred:', error.message);
  } finally {
    if (browser) {
      await browser.close();
      console.log('[Auto-Scraper] Browser closed.');
    }
    await mongoose.disconnect();
    console.log('[Auto-Scraper] Database disconnected.');
  }
}

module.exports = { scrapeAndSaveSchemes };