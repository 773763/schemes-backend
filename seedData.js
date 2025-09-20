module.exports = { 
  schemesData: [
    // === Pehli 10 Schemes ===
    { 
      title_en: "PM Kisan Samman Nidhi", title_hi: "पीएम किसान सम्मान निधि",
      description_en: "Direct income support of ₹6,000 per year...", description_hi: "छोटे और सीमांत किसान परिवारों को...",
      category: "Farmer", applicable_states: ["All India"],
      eligibility_en: "For small and marginal farmer families", eligibility_hi: "छोटे और सीमांत किसान परिवारों के लिए",
      minAge: 18, maxIncome: 200000, caste: ["Any"], disability: "No",
      official_link: "https://pmkisan.gov.in/"
    },
    { 
      title_en: "UP Scholarship (Pre-Matric & Post-Matric)", title_hi: "यूपी छात्रवृत्ति (प्री-मैट्रिक और पोस्ट-मैट्रिक)",
      description_en: "Scholarships for various categories of students in UP.", description_hi: "यूपी में छात्रों की विभिन्न श्रेणियों के लिए छात्रवृत्ति।",
      category: "Student", applicable_states: ["Uttar Pradesh"], 
      eligibility_en: "Resident of UP; must belong to specified categories (SC/ST/OBC/etc.); income limits apply.",
      eligibility_hi: "यूपी का निवासी; निर्दिष्ट श्रेणियों (SC/ST/OBC/आदि) से संबंधित होना चाहिए; आय सीमा लागू होती है।",
      minAge: 10, maxIncome: 250000, caste: ["SC", "ST", "OBC", "General", "Minority"], disability: "Any",
      official_link: "https://scholarship.up.gov.in/"
    },
    { 
      title_en: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", title_hi: "प्रधानमंत्री फसल बीमा योजना (PMFBY)",
      description_en: "An insurance service for farmers for their yields...", description_hi: "प्राकृतिक आपदाओं के खिलाफ किसानों को...",
      category: "Farmer", applicable_states: ["All India"], 
      eligibility_en: "All farmers including sharecroppers and tenant farmers...", eligibility_hi: "अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान...",
      minAge: 18, maxIncome: null, caste: ["Any"], disability: "Any",
      official_link: "https://pmfby.gov.in/"
    },
    { 
      title_en: "Ayushman Bharat (PMJAY)", title_hi: "आयुष्मान भारत (PMJAY)",
      description_en: "Health insurance cover of Rs. 5 lakhs per family...", description_hi: "प्रति परिवार प्रति वर्ष 5 लाख रुपये का स्वास्थ्य बीमा...",
      category: "Health", applicable_states: ["All India"], 
      eligibility_en: "Based on Socio-Economic Caste Census (SECC) criteria.",
      eligibility_hi: "सामाजिक-आर्थिक जाति जनगणना (SECC) मानदंडों पर आधारित।",
      minAge: 0, maxIncome: null, caste: ["Any"], disability: "Any",
      official_link: "https://pmjay.gov.in/"
    },
    { 
      title_en: "ICCR Scholarship Schemes", title_hi: "आईसीसीआर छात्रवृत्ति योजनाएं",
      description_en: "For students from foreign countries...", description_hi: "विदेशों से आने वाले छात्रों के लिए।",
      category: "Student", applicable_states: ["All India"], 
      eligibility_en: "Varies by course and country slot.", eligibility_hi: "विषय और course के अनुसार।",
      minAge: 18, maxIncome: null, caste: ["Any"], disability: "Any",
      official_link: "https://www.iccr.gov.in/scholarships"
    },
    { 
      title_en: "Odisha SAMS Scholarships (Pre & Post Matric)", title_hi: "ओडिशा SAMS छात्रवृत्ति",
      description_en: "Financial aid for SC/ST/OBC/EBC students...", description_hi: "SC/ST/OBC/EBC आदि छात्रों के लिए...",
      category: "Student", applicable_states: ["Odisha"], 
      eligibility_en: "Must belong to the respective category; state domicile.",
      eligibility_hi: "संबंधित वर्ग का होना; राज्य निवासी।",
      minAge: 12, maxIncome: 250000, caste: ["SC", "ST", "OBC", "EBC"], disability: "Any",
      official_link: "https://samsodisha.gov.in/"
    },
    { 
      title_en: "Karnataka Farmer Student Scholarship", title_hi: "कर्नाटक किसान छात्र छात्रवृत्ति",
      description_en: "Educational assistance for children of farmer families.", description_hi: "कृषक परिवारों के छात्रों को शिक्षा-सहायता देना।",
      category: "Student", applicable_states: ["Karnataka"], 
      eligibility_en: "Must be from a farmer's family; limited income.",
      eligibility_hi: "कृषक परिवार से होना; आमदनी सीमित।",
      minAge: 16, maxIncome: 250000, caste: ["Any"], disability: "Any",
      official_link: "https://ssf.karnataka.gov.in/"
    },
    { 
      title_en: "Rajasthan Pre-Matric Scholarships (SC/ST/OBC etc.)", title_hi: "राजस्थान प्री-मैट्रिक छात्रवृत्ति",
      description_en: "Scholarship for SC/ST/OBC/SBC etc. students in classes 6-10.",
      description_hi: "कक्षा 6-10 के SC/ST/OBC/SBC आदि छात्रों के लिए छात्रवृत्ति।",
      category: "Student", applicable_states: ["Rajasthan"], 
      eligibility_en: "Resident of Rajasthan; respective caste; student in class 6-10.",
      eligibility_hi: "राजस्थान निवासी; संबंधित जाति; छात्र कक्षा 6-10।",
      minAge: 11, maxIncome: 250000, caste: ["SC", "ST", "OBC", "SBC", "EBC"], disability: "Any",
      official_link: "https://rajshaladarpan.rajasthan.gov.in/"
    },
    { 
      title_en: "Chief Minister Higher Education Scholarship Scheme", title_hi: "मुख्यमंत्री उच्च शिक्षा छात्रवृत्ति योजना",
      description_en: "Scholarship for graduate/post-graduate courses...",
      description_hi: "स्नातक / स्नातकोत्तर पाठ्यक्रमों के लिए छात्रवृत्ति...",
      category: "Student", applicable_states: ["Rajasthan"], 
      eligibility_en: "Rajasthan resident; specific income limit; passed 12th board with high merit.",
      eligibility_hi: "राजस्थान निवासी; निर्धारित आय सीमा; 12वीं बोर्ड उच्च मेरिट से उत्तीर्ण।",
      minAge: 17, maxIncome: 250000, caste: ["Any"], disability: "Any",
      official_link: "https://hte.rajasthan.gov.in/scholarship-portal"
    },
    { // === YEH HAI WOMEN SCHEME #1 ===
      title_en: "Devnarayan Girls Student Scooty Distribution Scheme",
      title_hi: "देवनारायण छात्रा स्कूटी वितरण योजना",
      description_en: "A scheme to provide scooties to eligible girl students...",
      description_hi: "पात्र छात्राओं को स्कूटी प्रदान करने की योजना।",
      category: "Women",
      applicable_states: ["Rajasthan"],
      eligibility_en: "Resident of Rajasthan, specific % in 12th/Graduate.",
      eligibility_hi: "राजस्थान निवासी, 12वीं/स्नातक में निर्धारित %।",
      minAge: 17, maxIncome: 250000, caste: ["Any"], disability: "No",
      official_link: "https://hte.rajasthan.gov.in/scholarship-portal"
    },

    // === Aapki Agli 10 Schemes (Total 20) ===
    { // === YEH HAI WOMEN SCHEME #2 ===
      title_en: "Kalibai Bheel Medhavi Chhatra Scooty Yojana",
      title_hi: "कालीबाई भील मेधावी छात्रा स्कूटी योजना",
      description_en: "Free scooty or ₹40,000 for meritorious girls...",
      description_hi: "राजस्थान की पिछड़ा वर्ग की मेधावी बालिकाओं को...",
      category: "Women",
      applicable_states: ["Rajasthan"],
      eligibility_en: "Girl student; Rajasthan domicile; SC/ST/OBC/EWS; 12th pass; income ≤ ₹2.5L.",
      eligibility_hi: "बालिका छात्रा; राजस्थान निवासी; SC/ST/OBC/EWS वर्ग; आय ≤ ₹2.5 लाख।",
      minAge: 17, maxIncome: 250000,
      caste: ["SC", "ST", "OBC", "EWS", "General"], disability: "Any",
      official_link: "https://sso.rajasthan.gov.in"
    },
    { 
      title_en: "Post-Matric Scholarship (SC/ST/OBC/EBC)",
      title_hi: "उत्तर मैट्रिक छात्रवृत्ति (SC/ST/OBC/EBC)",
      description_en: "Financial aid for students of Class 11 to PG level...",
      description_hi: "SC/ST/OBC/EBC वर्ग के कक्षा 11 से PG तक के छात्रों को...",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "Belong to SC/ST/OBC/EBC; studying in Class 11 or higher.",
      eligibility_hi: "SC/ST/OBC/EBC वर्ग से हों; कक्षा 11 या उससे ऊपर।",
      minAge: 16, maxIncome: 250000,
      caste: ["SC", "ST", "OBC", "EBC"], disability: "Any",
      official_link: "https://sjmsnew.rajasthan.gov.in"
    },
    { 
      title_en: "Anuprati Yojana",
      title_hi: "अनुप्रति योजना",
      description_en: "Financial assistance for coaching of civil services...",
      description_hi: "सिविल सेवा और प्रोफेशनल कोर्सेज की कोचिंग के लिए...",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "SC/ST/OBC/MBC/Minority; income ≤ ₹2.5L; selected in exams...",
      eligibility_hi: "SC/ST/OBC/MBC/अल्पसंख्यक वर्ग; आय ≤ ₹2.5 लाख...",
      minAge: 18, maxIncome: 250000,
      caste: ["SC", "ST", "OBC", "MBC", "Minority"], disability: "Any",
      official_link: "https://sje.rajasthan.gov.in"
    },
    { // === YEH HAI WOMEN SCHEME #3 ===
      title_en: "Widow and Divorcee Sambal Yojana (B.Ed)",
      title_hi: "विधवा एवं परित्यक्ता मुख्यमंत्री सम्बल योजना (बीएड)",
      description_en: "Financial support to widow/divorcee women to pursue B.Ed course.",
      description_hi: "विधवा एवं परित्यक्ता महिलाओं को बीएड कोर्स हेतु आर्थिक सहायता।",
      category: "Women", applicable_states: ["Rajasthan"],
      eligibility_en: "Widow/Divorcee; admitted to B.Ed course; Rajasthan resident.",
      eligibility_hi: "विधवा/परित्यक्ता; B.Ed कोर्स में प्रवेश; राजस्थान निवासी।",
      minAge: 21, maxIncome: 250000, caste: ["Any"], disability: "Any",
      official_link: "https://scholarship.rajasthan.gov.in"
    },
    { 
      title_en: "Hostel Scheme for OBC Students",
      title_hi: "OBC छात्रों के लिए छात्रावास योजना",
      description_en: "Free or subsidized hostel facility for OBC students...",
      description_hi: "OBC छात्रों को उच्च शिक्षा के लिए मुफ्त छात्रावास सुविधा।",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "OBC category; enrolled in college/hostel.",
      eligibility_hi: "OBC वर्ग; कॉलेज/छात्रावास में नामांकित।",
      minAge: 17, maxIncome: 250000, caste: ["OBC"], disability: "No",
      official_link: "https://sje.rajasthan.gov.in"
    },
    { // === YEH HAI WOMEN SCHEME #4 ===
      title_en: "Meritorious Girls Scooty Distribution Scheme",
      title_hi: "मेधावी बालिका स्कूटी वितरण योजना",
      description_en: "Scooters are awarded to top-performing girl students...",
      description_hi: "12वीं बोर्ड परीक्षा में उच्च अंक प्राप्त करने वाली छात्राओं को...",
      category: "Women", applicable_states: ["Rajasthan"],
      eligibility_en: "Girl student; must be in top merit list of Class 12.",
      eligibility_hi: "छात्रा; कक्षा 12 की मेरिट सूची में स्थान होना चाहिए।",
      minAge: 17, maxIncome: 250000, caste: ["Any"], disability: "No",
      official_link: "https://scholarship.rajasthan.gov.in"
    },
    { 
      title_en: "Rajiv Gandhi Scholarship for Academic Excellence",
      title_hi: "राजीव गांधी अकादमिक उत्कृष्टता छात्रवृत्ति योजना",
      description_en: "Financial assistance for studies in top 50 global universities.",
      description_hi: "शीर्ष 50 वैश्विक विश्वविद्यालयों में उच्च अध्ययन हेतु वित्तीय सहायता।",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "Rajasthan domicile; selected in top 50 ranked global university; income ≤ ₹8L.",
      eligibility_hi: "राजस्थान निवासी; QS रैंकिंग की शीर्ष 50 वैश्विक विश्वविद्यालयों में चयन; आय ≤ ₹8 लाख।",
      minAge: 18, maxIncome: 800000, caste: ["Any"], disability: "Any",
      official_link: "https://hte.rajasthan.gov.in"
    },
    { 
      title_en: "Guru Golwalkar Students Talent Incentive Scheme",
      title_hi: "गुरु गोलवलकर छात्र प्रतिभा प्रोत्साहन योजना",
      description_en: "Cash incentive for meritorious students from backward communities...",
      description_hi: "पिछड़े वर्गों के मेधावी छात्रों को नकद प्रोत्साहन राशि।",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "SC/ST/OBC/SBC/Minority students; 10th or 12th pass with merit; income ≤ ₹2.5L.",
      eligibility_hi: "SC/ST/OBC/SBC/अल्पसंख्यक छात्र; 10वीं या 12वीं मेरिट में उत्तीर्ण; आय ≤ ₹2.5 लाख।",
      minAge: 15, maxIncome: 250000,
      caste: ["SC", "ST", "OBC", "SBC", "Minority"], disability: "Any",
      official_link: "https://sje.rajasthan.gov.in"
    },
    { 
      title_en: "Sanskrit Education Department Scholarship Scheme",
      title_hi: "संस्कृत शिक्षा विभाग छात्रवृत्ति योजना",
      description_en: "Scholarship for students studying Sanskrit as a core subject...",
      description_hi: "संस्कृत विषय को पढ़ने वाले छात्रों के लिए छात्रवृत्ति।",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "Must be studying Sanskrit as main subject; Class 9 to PG level.",
      eligibility_hi: "संस्कृत मुख्य विषय होना चाहिए; कक्षा 9 से PG स्तर तक।",
      minAge: 14, maxIncome: 250000, caste: ["Any"], disability: "Any",
      official_link: "https://rajshaladarpan.rajasthan.gov.in"
    },
    { 
      title_en: "Ambedkar Fellowship Yojana (Research Scholars)",
      title_hi: "अम्बेडकर फेलोशिप योजना (शोध छात्रों के लिए)",
      description_en: "Monthly stipend to SC/ST scholars for pursuing PhD/MPhil...",
      description_hi: "SC/ST वर्ग के शोधार्थियों को PhD/MPhil के लिए मासिक फेलोशिप।",
      category: "Student", applicable_states: ["Rajasthan"],
      eligibility_en: "SC/ST category; PhD or MPhil enrolment; Rajasthan resident.",
      eligibility_hi: "SC/ST वर्ग; PhD या MPhil में प्रवेश लिया हो; राजस्थान निवासी।",
      minAge: 23, maxIncome: 250000,
      caste: ["SC", "ST"], disability: "Any",
      official_link: "https://sje.rajasthan.gov.in"
    } 
  ]
};