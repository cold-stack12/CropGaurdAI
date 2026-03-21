/**
 * CropGuard AI — Internationalization (i18n) Module
 * Supports: English, Yoruba, Igbo, Hausa, Nigerian Pidgin
 */

const translations = {
  en: {
    // Navigation
    home: "Home",
    scan: "Scan",
    library: "Library",
    community_short: "Forum",

    // Hero
    hero_title: "Protect Your Crops with AI",
    hero_subtitle: "Snap a photo. Get instant diagnosis. Save your harvest.",
    scan_now: "Scan Your Crop",

    // Stats
    crops_supported: "Crops Supported",
    diseases_detectable: "Diseases Detectable",
    languages_supported: "Languages",

    // Weather
    weather_alerts: "Weather & Alerts",
    humidity: "Humidity",
    wind: "Wind",

    // Dashboard
    disease_library: "Disease Library",
    view_all: "View All →",
    community: "Community",

    // Scan
    scan_crop: "Scan Your Crop",
    select_crop: "1. Select Your Crop",
    capture_image: "2. Take or Upload Photo",
    upload_or_capture: "Tap to take a photo or upload from gallery",
    camera: "Camera",
    gallery: "Gallery",
    retake: "🔄 Retake",
    analyze: "Analyze Crop",
    analyzing: "Analyzing your crop...",
    analyzing_desc: "Our AI is examining the image for diseases, pests, and nutrient issues.",

    // Results
    diagnosis_results: "Diagnosis Results",
    confidence: "Confidence",
    severity: "Severity",
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
    symptoms: "Symptoms",
    causes: "Causes",
    recommended_cures: "💊 Recommended Cures",
    chemical_treatment: "Chemical Treatment",
    organic_remedy: "Organic / Local Remedy",
    dosage: "Dosage",
    application: "Application",
    treatment_timeline: "📅 Treatment Timeline",
    day: "Day",
    prevention_tips: "🛡️ Prevention Tips",
    scan_another: "Scan Another Crop",
    no_disease: "No Disease Detected",
    no_disease_desc: "Your crop looks healthy! Keep monitoring regularly.",
    affected_parts: "Affected Parts",
    speak_results: "Read Aloud",

    // Library
    all_crops: "All",

    // Community
    ask_question: "Ask a Question",
    ask_community: "Ask the Community",
    replies: "replies",
    upvote: "upvote",
    expert: "EXPERT",
    reply_placeholder: "Write your reply...",
    submit_reply: "Reply",

    // Offline
    offline_message: "You are offline. Some features may be limited.",

    // Crops
    crop_rice: "Rice",
    crop_maize: "Maize",
    crop_cassava: "Cassava",
    crop_tomato: "Tomato",
    crop_yam: "Yam",
    crop_pepper: "Pepper",
    crop_cowpea: "Cowpea",
    crop_cocoa: "Cocoa"
  },

  yo: {
    home: "Ilé",
    scan: "Ṣàyẹ̀wò",
    library: "Ilé-ìwé",
    community_short: "Àjọ",
    hero_title: "Dáàbò bo Irúgbìn Rẹ pẹ̀lú AI",
    hero_subtitle: "Ya àwòrán. Gba ìdámọ̀ lẹ́sẹ̀kẹsẹ̀. Gbà ikórè rẹ là.",
    scan_now: "Ṣàyẹ̀wò Irúgbìn Rẹ",
    crops_supported: "Irúgbìn tí a ṣe àtìlẹ́yìn fún",
    diseases_detectable: "Àrùn tí a lè rí",
    languages_supported: "Èdè",
    weather_alerts: "Ojú Ọjọ́ & Ìkìlọ̀",
    humidity: "Ọ̀rinrin",
    wind: "Afẹ́fẹ́",
    disease_library: "Ilé-ìkàwé Àrùn",
    view_all: "Wo gbogbo →",
    community: "Àjọ Àgbẹ̀",
    scan_crop: "Ṣàyẹ̀wò Irúgbìn Rẹ",
    select_crop: "1. Yan Irúgbìn Rẹ",
    capture_image: "2. Ya Àwòrán tàbí Fi Sókè",
    upload_or_capture: "Tẹ láti ya àwòrán tàbí mú láti inú àkójọ",
    camera: "Kámẹ́rà",
    gallery: "Àkójọ",
    retake: "🔄 Tún Ya",
    analyze: "Ṣàtúpalẹ̀ Irúgbìn",
    analyzing: "A ń ṣàyẹ̀wò irúgbìn rẹ...",
    analyzing_desc: "AI wa ń ṣàyẹ̀wò àwòrán fún àrùn, kòkòrò, àti àìtó oúnjẹ.",
    diagnosis_results: "Àbájáde Ìwádìí",
    confidence: "Ìgbàgbọ́",
    severity: "Bí ó ti le tó",
    low: "Kékeré",
    medium: "Àárín",
    high: "Gíga",
    critical: "Ewu",
    symptoms: "Àmì Àrùn",
    causes: "Ohun tí ó fà á",
    recommended_cures: "💊 Ìtọ́jú tí a Ṣe Ìṣedúró",
    chemical_treatment: "Ìtọ́jú Kẹ́míkà",
    organic_remedy: "Ìtọ́jú Àdáyébá / Ìbílẹ̀",
    dosage: "Ìwọ̀n",
    application: "Bí a ṣe ń lò ó",
    treatment_timeline: "📅 Àkókò Ìtọ́jú",
    day: "Ọjọ́",
    prevention_tips: "🛡️ Àwọn Ìmọ̀ràn Ìdènà",
    scan_another: "Ṣàyẹ̀wò Irúgbìn Mìíràn",
    no_disease: "Kò Sí Àrùn Tí A Rí",
    no_disease_desc: "Irúgbìn rẹ dàbí ẹni pé ó ní ìlera! Máa ṣàyẹ̀wò rẹ̀ nígbà gbogbo.",
    affected_parts: "Àwọn Apá tí Àrùn Kàn",
    speak_results: "Ka Sókè",
    all_crops: "Gbogbo",
    ask_question: "Béèrè Ìbéèrè",
    ask_community: "Béèrè lọ́wọ́ Àjọ",
    replies: "ìdáhùn",
    upvote: "fẹ́ràn",
    expert: "ÒGBÓǸ",
    offline_message: "O wà lásán. Àwọn iṣẹ́ kan lè dín kù.",
    crop_rice: "Ìrẹsì",
    crop_maize: "Àgbàdo",
    crop_cassava: "Ẹ̀gẹ́",
    crop_tomato: "Tòmátì",
    crop_yam: "Iṣu",
    crop_pepper: "Ata",
    crop_cowpea: "Ẹ̀wà",
    crop_cocoa: "Kóko"
  },

  ig: {
    home: "Ụlọ",
    scan: "Nyochaa",
    library: "Ọbá akwụkwọ",
    community_short: "Ọgbakọ",
    hero_title: "Chekwaa Ihe Ọkụkụ Gị site na AI",
    hero_subtitle: "Sega foto. Nweta nchọpụta ozugbo. Zọpụta owuwe ihe ubi gị.",
    scan_now: "Nyochaa Ihe Ọkụkụ Gị",
    crops_supported: "Ihe ọkụkụ ndị a na-akwado",
    diseases_detectable: "Ọrịa nke a pụrụ ịchọpụta",
    languages_supported: "Asụsụ",
    weather_alerts: "Ihu Igwe & Ịdọ Aka Ná Ntị",
    humidity: "Ikuku mmiri",
    wind: "Ifufe",
    disease_library: "Ọbá Akwụkwọ Ọrịa",
    view_all: "Hụ niile →",
    community: "Ọgbakọ Ndị Ọrụ Ubi",
    scan_crop: "Nyochaa Ihe Ọkụkụ Gị",
    select_crop: "1. Họrọ Ihe Ọkụkụ Gị",
    capture_image: "2. Sega ma ọ bụ Tinye Foto",
    upload_or_capture: "Pịa iji sega foto ma ọ bụ tinye site na ngalaba",
    camera: "Igwefoto",
    gallery: "Ngalaba",
    retake: "🔄 Sega ọzọ",
    analyze: "Nyochaa Ihe Ọkụkụ",
    analyzing: "Anyị na-enyocha ihe ọkụkụ gị...",
    analyzing_desc: "AI anyị na-enyocha foto ahụ maka ọrịa, ahụhụ, na nsogbu nri.",
    diagnosis_results: "Nsonaazụ Nyocha",
    confidence: "Ntụkwasị obi",
    severity: "Oke",
    low: "Obere",
    medium: "Etiti",
    high: "Elu",
    critical: "Ihe egwu",
    symptoms: "Mgbaàmà",
    causes: "Ihe kpatara ya",
    recommended_cures: "💊 Ọgwụ Ndị A Tụrụ Aro",
    chemical_treatment: "Ọgwụgwọ Kemịkal",
    organic_remedy: "Ọgwụgwọ Nkịtị / Ọdịnala",
    dosage: "Oke",
    application: "Otu esi etinye ya",
    treatment_timeline: "📅 Usoro Oge Ọgwụgwọ",
    day: "Ụbọchị",
    prevention_tips: "🛡️ Ndụmọdụ Mgbochi",
    scan_another: "Nyochaa Ihe Ọkụkụ Ọzọ",
    no_disease: "Achọpụtaghị Ọrịa Ọ Bụla",
    no_disease_desc: "Ihe ọkụkụ gị dị mma! Na-enyocha ya mgbe niile.",
    affected_parts: "Akụkụ nke ọrịa metụrụ",
    speak_results: "Gụọ olu elu",
    all_crops: "Niile",
    ask_question: "Jụọ Ajụjụ",
    ask_community: "Jụọ Ọgbakọ",
    replies: "azịza",
    upvote: "kwanyere",
    expert: "ỌKA",
    offline_message: "Ị nọ na ntanetị. Ụfọdụ ọrụ nwere ike ịdị oke.",
    crop_rice: "Ọsịkapa",
    crop_maize: "Ọka",
    crop_cassava: "Akpụ",
    crop_tomato: "Tomato",
    crop_yam: "Ji",
    crop_pepper: "Ose",
    crop_cowpea: "Agwa",
    crop_cocoa: "Koko"
  },

  ha: {
    home: "Gida",
    scan: "Bincika",
    library: "Ɗakin karatu",
    community_short: "Dandalin",
    hero_title: "Kare Amfanin Gonarku da AI",
    hero_subtitle: "Ɗauki hoto. Sami ganewar nan take. Ceci girbin ku.",
    scan_now: "Binciki Amfanin Gonarku",
    crops_supported: "Amfanin gonan da ake tallafawa",
    diseases_detectable: "Cututtukan da za a iya gano",
    languages_supported: "Harsuna",
    weather_alerts: "Yanayi & Faɗakarwa",
    humidity: "Zafi",
    wind: "Iska",
    disease_library: "Ɗakin Karatun Cuta",
    view_all: "Duba duka →",
    community: "Dandalin Manoma",
    scan_crop: "Binciki Amfanin Gonarku",
    select_crop: "1. Zaɓi Amfanin Gonarku",
    capture_image: "2. Ɗauki ko Ɗora Hoto",
    upload_or_capture: "Taɓa don ɗaukar hoto ko ɗora daga rumbun",
    camera: "Kyamara",
    gallery: "Rumbun",
    retake: "🔄 Sake Ɗauka",
    analyze: "Binciki Amfanin Gona",
    analyzing: "Ana binciken amfanin gonarku...",
    analyzing_desc: "AI mu yana binciken hoton neman cututtuka, kwari, da matsalolin abinci.",
    diagnosis_results: "Sakamakon Bincike",
    confidence: "Tabbaci",
    severity: "Tsanani",
    low: "Ƙasa",
    medium: "Matsakaici",
    high: "Sama",
    critical: "Mai haɗari",
    symptoms: "Alamomi",
    causes: "Dalilai",
    recommended_cures: "💊 Magunguna da Aka Bayar da Shawara",
    chemical_treatment: "Maganin Sinadari",
    organic_remedy: "Maganin Halitta / Gargajiya",
    dosage: "Gwargwado",
    application: "Yadda ake amfani",
    treatment_timeline: "📅 Lokacin Magani",
    day: "Rana",
    prevention_tips: "🛡️ Shawarwarin Rigakafi",
    scan_another: "Binciki Wani Amfanin Gona",
    no_disease: "Ba a Gano Cuta ba",
    no_disease_desc: "Amfanin gonarku yana da kyau! Ku ci gaba da bincike akai-akai.",
    affected_parts: "Sassan da cuta ta shafa",
    speak_results: "Karanta Babba",
    all_crops: "Duka",
    ask_question: "Yi Tambaya",
    ask_community: "Tambayi Dandalin",
    replies: "amsa",
    upvote: "yarda",
    expert: "ƘWARARRE",
    offline_message: "Ba ku da haɗin yanar gizo. Wasu ayyuka na iya iyakancewa.",
    crop_rice: "Shinkafa",
    crop_maize: "Masara",
    crop_cassava: "Rogo",
    crop_tomato: "Tumatir",
    crop_yam: "Doya",
    crop_pepper: "Barkono",
    crop_cowpea: "Wake",
    crop_cocoa: "Koko"
  },

  pcm: {
    home: "Home",
    scan: "Scan",
    library: "Library",
    community_short: "Forum",
    hero_title: "Protect Your Crops with AI Power",
    hero_subtitle: "Snap photo. Get answer sharp sharp. Save your harvest.",
    scan_now: "Scan Your Crop",
    crops_supported: "Crops Wey We Support",
    diseases_detectable: "Sickness Wey We Fit Detect",
    languages_supported: "Languages",
    weather_alerts: "Weather & Warning",
    humidity: "Humidity",
    wind: "Wind",
    disease_library: "Sickness Library",
    view_all: "See All →",
    community: "Farmer Community",
    scan_crop: "Scan Your Crop",
    select_crop: "1. Pick Your Crop",
    capture_image: "2. Take Photo or Upload",
    upload_or_capture: "Tap to snap photo or pick from your phone",
    camera: "Camera",
    gallery: "Gallery",
    retake: "🔄 Retake",
    analyze: "Check Crop",
    analyzing: "We dey check your crop...",
    analyzing_desc: "Our AI dey look di picture for sickness, insect damage, and food problem.",
    diagnosis_results: "Result",
    confidence: "How Sure",
    severity: "How Serious",
    low: "Small",
    medium: "Average",
    high: "Serious",
    critical: "Very Dangerous",
    symptoms: "Signs",
    causes: "Wetin Cause Am",
    recommended_cures: "💊 Recommended Medicine",
    chemical_treatment: "Chemical Medicine",
    organic_remedy: "Natural / Local Medicine",
    dosage: "How Much to Use",
    application: "How to Apply Am",
    treatment_timeline: "📅 Treatment Plan",
    day: "Day",
    prevention_tips: "🛡️ How to Prevent Am",
    scan_another: "Scan Another Crop",
    no_disease: "No Sickness Found",
    no_disease_desc: "Your crop look healthy! Keep checking am regularly.",
    affected_parts: "Parts Wey Get Problem",
    speak_results: "Read Am Out",
    all_crops: "All",
    ask_question: "Ask Question",
    ask_community: "Ask Di Community",
    replies: "replies",
    upvote: "like",
    expert: "EXPERT",
    offline_message: "You dey offline. Some things no go work.",
    crop_rice: "Rice",
    crop_maize: "Corn/Maize",
    crop_cassava: "Cassava",
    crop_tomato: "Tomato",
    crop_yam: "Yam",
    crop_pepper: "Pepper",
    crop_cowpea: "Beans",
    crop_cocoa: "Cocoa"
  }
};

let currentLang = localStorage.getItem('cropguard_lang') || 'en';

/**
 * Get a translation for a key
 */
function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

/**
 * Set the current language and refresh UI
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cropguard_lang', lang);
  applyTranslations();
}

/**
 * Apply all translations to the DOM
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang === 'pcm' ? 'en' : currentLang;
}

/**
 * Get current language code
 */
function getCurrentLang() {
  return currentLang;
}
