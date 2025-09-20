// const puppeteer = require('puppeteer'); // <-- YEH LINE HUMNE HATA DI

const Scheme = require('./schemes.js'); // Humara main Mongoose Model bilkul sahi hai

// Function 1 (PIB Scraper)
async function scrapeAndSaveSchemes() {
  let browser;
  console.log('[Auto-Scraper] Task starting... Launching browser...');
  
  try {
    // NAYA FIX: Puppeteer ko function ke andar dynamically import karein
    const { default: puppeteer } = await import('puppeteer'); 

    browser = await puppeteer.launch({ 
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    const TARGET_URL = 'https://pib.gov.in/AllRelease.aspx';
    console.log(`[Auto-Scraper] Navigating to ${TARGET_URL}...`);
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });

    await page.waitForSelector('a.heading', { timeout: 15000 });

    const scrapedReleases = await page.$$eval('a.heading', links => {
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
            const newScheme = new Scheme({
                title_en: `Press Release: ${item.title}`,
                title_hi: `प्रेस विज्ञप्ति: ${item.title}`,
                description_en: "Government press release published on PIB. Details available at the official link.",
                description_hi: "पीआईबी पर प्रकाशित सरकारी प्रेस विज्ञप्ति। विवरण आधिकारिक लिंक पर उपलब्ध है।",
                category: "Announcement",
                applicable_states: ["All India"],
                official_link: item.url,
                eligibility_en: "N/A",
                eligibility_hi: "लागू नहीं"
            });
            console.log(`[Auto-Scraper] Saving new item: ${newScheme.title_en}`);
            await newScheme.save();
          }
        }
      }
      console.log('[Auto-Scraper] Database update check complete!');
    } else {
      console.log('[Auto-Scraper] No new items found to add.');
    }

  } catch (error) {
    console.error('[Auto-Scraper] An error occurred:', error.message);
  } finally {
    if (browser) {
      await browser.close();
      console.log('[Auto-Scraper] Browser closed.');
    }
  }
}


// Function 2 (SJE Scraper)
async function scrapeSJEWebsite() {
  let browser;
  console.log('[Auto-Scraper] STARTING: SJE Rajasthan Portal');
  
  try {
    // NAYA FIX: Puppeteer ko yahaan bhi dynamically import karein
    const { default: puppeteer } = await import('puppeteer');

    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    
    const pageUrl = 'https://sje.rajasthan.gov.in/Default.aspx?Page=Schemes';
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });

    const selectorForAllLinks = '#ContentPlaceHolder1_PageContent > tbody > tr > td > div > div.mrgn_10 > table > tbody > tr > td:nth-child(2) > a';
    await page.waitForSelector(selectorForAllLinks);

    const schemesFromPage = await page.$$eval(selectorForAllLinks, (allLinks) => {
        return allLinks.map(link => ({
            title: link.innerText.trim(), 
            link_url: link.href
        }));
    });

    console.log(`[Auto-Scraper] Found ${schemesFromPage.length} schemes on SJE Portal.`);

    for (const item of schemesFromPage) {
        const existing = await Scheme.findOne({ official_link: item.link_url });

        if (!existing && item.title) {
           console.log(`[Auto-Scraper] NEW SJE SCHEME: ${item.title}`);
           const newScheme = new Scheme({
              title_en: item.title,
              title_hi: item.title,
              description_en: 'Details available on SJE portal.',
              description_hi: 'विवरण SJE पोर्टल पर उपलब्ध है।',
              category: 'Student', 
              applicable_states: ['Rajasthan'],
              official_link: item.link_url,
           });
           await newScheme.save();
        }
    }

  } catch (err) {
    console.error('Error scraping SJE:', err.message);
  } finally {
    if (browser) await browser.close();
    console.log('[Auto-Scraper] FINISHED: SJE Rajasthan Portal');
  }
}

// Dono functions ko export karein (yeh line pehle jaisi hi hai)
module.exports = { scrapeAndSaveSchemes, scrapeSJEWebsite };