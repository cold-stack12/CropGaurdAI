/**
 * CropGuard AI — Crop Disease Database
 * Comprehensive Nigerian crop disease data with multilingual support
 */

const diseases = [
  // ========== RICE DISEASES ==========
  {
    id: "rice-blast",
    crop: "rice",
    name: { en: "Rice Blast", yo: "Àrùn Ìbúgbàmú Ìrẹsì", ig: "Ọrịa Blast Ọsịkapa", ha: "Cutar Blast ta Shinkafa", pcm: "Rice Blast Sickness" },
    symptoms: {
      en: "Diamond-shaped lesions on leaves with gray centers and brown borders. Nodes turn black. Panicles may break at the neck.",
      yo: "Àwọn àmì onígun mẹ́rin lórí ewé pẹ̀lú àárín awọ̀ eérú àti ẹ̀gbẹ́ aláwọ̀ búràùnù.",
      ig: "Ọnya dị ka diamond n'elu ahịhịa nwere etiti isi awọ na akụkụ aja aja.",
      ha: "Alamun lu'u'u a kan ganye masu tsakiyar toka da gefuna ruwan kasa.",
      pcm: "Diamond shape mark dey for di leaf, di center grey and di border brown."
    },
    causes: { en: "Magnaporthe oryzae fungus. Favored by high humidity, cool nights, and nitrogen-rich soils.", yo: "Fungus Magnaporthe oryzae", ig: "Fungọs Magnaporthe oryzae", ha: "Naman fungi Magnaporthe oryzae", pcm: "Fungus wey dem call Magnaporthe oryzae" },
    severity: "high",
    affectedParts: ["leaves", "nodes", "panicles"],
    cures: [
      {
        type: "chemical",
        name: { en: "Tricyclazole fungicide", yo: "Oògùn Tricyclazole", ig: "Ọgwụ Tricyclazole", ha: "Maganin Tricyclazole", pcm: "Tricyclazole medicine" },
        dosage: "300g per hectare",
        applicationMethod: { en: "Foliar spray at booting stage. Repeat after 10 days if symptoms persist.", yo: "Fi fọ́n sí orí ewé ní àkókò ìdàgbàsókè.", ig: "Fesa n'elu ahịhịa na oge ọ na-eto.", ha: "Fesa a kan ganye lokacin girma.", pcm: "Spray am on top di leaf when di rice dey grow." }
      },
      {
        type: "organic",
        name: { en: "Neem oil extract", yo: "Epo Dọ́gọ́yàrò", ig: "Mmanụ Dogoyaro", ha: "Man shafin Darbejiya", pcm: "Neem oil" },
        dosage: "5ml per liter of water",
        applicationMethod: { en: "Mix with water and spray on affected leaves early morning or evening.", yo: "Da po pẹ̀lú omi, fi fọ́n sí ewé tí àrùn ti kó ní kùtùkùtù òwúrọ̀.", ig: "Gwakọta ya na mmiri wee fesa n'ahịhịa nke ọrịa metụrụ na ụtụtụ.", ha: "Gauraya da ruwa ka fesa a kan ganyen da suka kamu da cutar.", pcm: "Mix am with water, spray di leaves wey get di sickness for morning time." }
      }
    ],
    preventions: {
      en: ["Use resistant varieties (FARO 44, FARO 52)", "Avoid excessive nitrogen fertilizer", "Ensure proper spacing between plants", "Practice crop rotation"],
      yo: ["Lo irúgbìn tí ó lágbára (FARO 44, FARO 52)", "Má ṣe lo ajílẹ̀ nitrogen púpọ̀", "Fi àlàfo tó dára sí àárín irúgbìn", "Ṣe ìyípadà irúgbìn"],
      ig: ["Jiri ụdị nke na-eguzogide ọrịa (FARO 44, FARO 52)", "Ekwela ka ị tinye ọtụtụ nitrogen", "Hụ na ị hapụrụ oghere dị mma n'etiti osisi", "Mee mgbanwe ihe ọkụkụ"],
      ha: ["Yi amfani da irin da ke iya jurewa (FARO 44, FARO 52)", "Kar ka yi amfani da taki nitrogen da yawa", "Tabbatar da nisantar da ya dace tsakanin shuke-shuke", "Yi aikin juyawar amfanin gona"],
      pcm: ["Use rice type wey strong against sickness (FARO 44, FARO 52)", "No use too much nitrogen fertilizer", "Give space between di plants", "Change di type of crop you plant every season"]
    }
  },
  {
    id: "rice-brown-spot",
    crop: "rice",
    name: { en: "Brown Spot", yo: "Àmì Aláwọ̀ Búràùnù", ig: "Ntụpọ Aja Aja", ha: "Tabo Mai Ruwan Kasa", pcm: "Brown Spot Sickness" },
    symptoms: {
      en: "Small, round to oval brown spots on leaves, often with a yellow halo. Seeds may show dark brown or black discoloration.",
      yo: "Àwọn àmì kékeré aláwọ̀ búràùnù tí ó yí ká lórí ewé.",
      ig: "Obere ntụpọ aja aja na-adị gburugburu n'elu ahịhịa.",
      ha: "Ƙananan taboni ruwan kasa masu zagaye a kan ganye.",
      pcm: "Small round brown mark dey for di leaf, sometimes e get yellow circle around am."
    },
    causes: { en: "Bipolaris oryzae fungus. Associated with poor soil fertility and drought stress.", yo: "Fungus Bipolaris oryzae", ig: "Fungọs Bipolaris oryzae", ha: "Naman fungi Bipolaris oryzae", pcm: "Fungus Bipolaris oryzae" },
    severity: "medium",
    affectedParts: ["leaves", "seeds"],
    cures: [
      {
        type: "chemical",
        name: { en: "Mancozeb fungicide", yo: "Oògùn Mancozeb", ig: "Ọgwụ Mancozeb", ha: "Maganin Mancozeb", pcm: "Mancozeb medicine" },
        dosage: "2.5g per liter of water",
        applicationMethod: { en: "Spray on foliage at first sign of spots. Repeat every 7-10 days.", yo: "Fi fọ́n sí ewé ní ìgbà àkọ́kọ́ tí àmì bá hàn.", ig: "Fesa mgbe ị hụrụ ntụpọ mbụ.", ha: "Fesa lokacin da aka gani taboni farko.", pcm: "Spray when you first see di brown mark. Do am again every 7-10 days." }
      },
      {
        type: "organic",
        name: { en: "Potassium-rich compost", yo: "Ajílẹ̀ Potassium", ig: "Ọgwụ ala Potassium", ha: "Takin Potassium", pcm: "Compost wey get Potassium" },
        dosage: "Apply 2 tons per hectare",
        applicationMethod: { en: "Apply compost to improve soil nutrition and plant resistance.", yo: "Lo ajílẹ̀ láti mú ilẹ̀ lágbára.", ig: "Tinye compost iji mee ka ala dị mma.", ha: "Zuba takin don inganta ƙasar.", pcm: "Put di compost for ground to make di soil strong." }
      }
    ],
    preventions: {
      en: ["Use certified seed", "Improve soil fertility with balanced fertilization", "Maintain adequate water supply", "Treat seeds before planting"],
      yo: ["Lo irúgbìn tí a fọwọ́sí", "Mú ilẹ̀ lágbára pẹ̀lú ajílẹ̀ tó dọ́gba", "Pa omi tó pẹ́ mọ́", "Tọ́jú irúgbìn ṣáájú kí o tó gbìn"],
      ig: ["Jiri mkpụrụ nke e nyere ikike", "Mee ka ala dị mma site na ịgbakwunye nri ala", "Hụ na mmiri zuru ezu", "Gwọọ mkpụrụ tupu ị kụọ ya"],
      ha: ["Yi amfani da iri da aka tabbatar", "Inganta haihuwar ƙasa da takin da ya dace", "Tabbatar da isasshen ruwa", "Kula da iri kafin shuka"],
      pcm: ["Use seed wey dem certify", "Make di soil strong with balanced fertilizer", "Make sure water dey enough", "Treat di seed before you plant am"]
    }
  },

  // ========== MAIZE DISEASES ==========
  {
    id: "maize-fall-armyworm",
    crop: "maize",
    name: { en: "Fall Armyworm", yo: "Kòkòrò Armyworm", ig: "Ikpuru Armyworm", ha: "Tsutsar Armyworm", pcm: "Armyworm Caterpillar" },
    symptoms: {
      en: "Ragged holes in leaves, large amounts of frass (caterpillar droppings) in whorl. Young plants may be cut at the base.",
      yo: "Àwọn ihò tí kò ní ìtọ́sọ́nà lórí ewé, àwọn ìgbẹ́ kòkòrò nínú ọkàn ewé.",
      ig: "Oghere adịghị mma n'elu ahịhịa, ọtụtụ nsị ikpuru n'ime obi ahịhịa.",
      ha: "Ramummuka a kan ganye, da yawan kashin tsutsa a cikin tsakiyar ganye.",
      pcm: "Rough holes dey for di leaf, caterpillar poo-poo dey inside di leaf center."
    },
    causes: { en: "Spodoptera frugiperda moth larvae. Can devastate entire fields within days.", yo: "Àwọn ọmọ moth Spodoptera frugiperda", ig: "Ụmụ moth Spodoptera frugiperda", ha: "Larvae na asu Spodoptera frugiperda", pcm: "Caterpillar baby from Spodoptera moth" },
    severity: "critical",
    affectedParts: ["leaves", "stems", "ears"],
    cures: [
      {
        type: "chemical",
        name: { en: "Emamectin benzoate", yo: "Oògùn Emamectin", ig: "Ọgwụ Emamectin", ha: "Maganin Emamectin", pcm: "Emamectin medicine" },
        dosage: "0.4ml per liter of water",
        applicationMethod: { en: "Spray directly into the whorl of affected plants in early morning or late evening.", yo: "Fi fọ́n sí ọkàn ewé ní kùtùkùtù òwúrọ̀.", ig: "Fesa n'ime obi ahịhịa nke ọrịa metụrụ n'ụtụtụ.", ha: "Fesa kai tsaye cikin tsakiyar ganye da safe-safe.", pcm: "Spray am inside di center of di plant early morning or evening time." }
      },
      {
        type: "organic",
        name: { en: "Ash + chili pepper mixture", yo: "Eérú àti Ata ìlù", ig: "Ntụ na ose", ha: "Toka da barkono", pcm: "Ash and pepper mix" },
        dosage: "Mix equal parts of wood ash and ground chili peppers",
        applicationMethod: { en: "Apply mixture into the whorl of maize plants. The irritant deters caterpillars.", yo: "Fi àdàpọ̀ sí ọkàn àgbàdo. Ó máa lé kòkòrò kúrò.", ig: "Tinye ngwakọta n'ime obi ọka. Ọ na-achụpụ ikpuru.", ha: "Zuba cakuda a cikin tsakiyar masara. Yana korar tsutsa.", pcm: "Put di mix inside di center of di maize plant. E go chase away di caterpillar." }
      }
    ],
    preventions: {
      en: ["Plant early in the season", "Use push-pull technology (intercrop with Desmodium)", "Monitor fields regularly", "Encourage natural predators (parasitoid wasps)"],
      yo: ["Gbìn ní ìbẹ̀rẹ̀ àkókò", "Lo ọ̀nà push-pull (gbìn Desmodium papọ̀)", "Ṣàyẹ̀wò oko rẹ nígbà gbogbo", "Gba àwọn apẹranjẹ àdánidá láyè"],
      ig: ["Kụọ ihe ọkụkụ na mbido oge", "Jiri usoro push-pull (kụọ Desmodium n'etiti)", "Nyochaa ubi gị mgbe niile", "Kwado ndị na-eri ikpuru n'ụzọ nkịtị"],
      ha: ["Shuka da wuri a cikin lokaci", "Yi amfani da fasahar push-pull (shuka Desmodium tare)", "Duba gonar ka kullum", "Ƙarfafa masu cin tsutsa na halitta"],
      pcm: ["Plant early for di season", "Use push-pull method (plant Desmodium together)", "Check your farm regularly", "Allow natural enemies of di caterpillar"]
    }
  },
  {
    id: "maize-streak-virus",
    crop: "maize",
    name: { en: "Maize Streak Virus", yo: "Àrùn Ìlà Àgbàdo", ig: "Ọrịa Streak Ọka", ha: "Cutar Streak ta Masara", pcm: "Maize Streak Virus" },
    symptoms: {
      en: "Narrow, pale yellow streaks running parallel to leaf veins. Stunted growth and reduced yield.",
      yo: "Àwọn ìlà kékeré aláwọ̀ pupa rírẹ̀ nínú ewé. Ìdàgbà dínkù.",
      ig: "Ahịrị ọcha na-agba ọsọ n'elu akwụkwọ nkwụ. Ọ na-eme ka osisi ghara ito nke ọma.",
      ha: "Siraran rawaya masu siriri suna gudana daidai da jijiyar ganyen. Tsiro ya ragu.",
      pcm: "Thin yellow line dey for di leaf. Di plant no go grow well."
    },
    causes: { en: "Maize streak virus transmitted by leafhoppers (Cicadulina mbila).", yo: "Àrùn tí àwọn kòkòrò leafhopper ń kó", ig: "Ọrịa nke ahụhụ leafhopper na-ebu", ha: "Cutar da ƙwari leafhopper ke yadawa", pcm: "Virus wey leafhopper insect dey carry" },
    severity: "high",
    affectedParts: ["leaves"],
    cures: [
      {
        type: "chemical",
        name: { en: "Imidacloprid (for leafhopper control)", yo: "Oògùn Imidacloprid", ig: "Ọgwụ Imidacloprid", ha: "Maganin Imidacloprid", pcm: "Imidacloprid medicine" },
        dosage: "1ml per liter of water",
        applicationMethod: { en: "Spray on leaves to control leafhopper vectors. No cure for the virus itself — remove infected plants.", yo: "Fi fọ́n sí ewé láti pa kòkòrò leafhopper. Mú irúgbìn tí àrùn bá ti kó kúrò.", ig: "Fesa n'elu ahịhịa iji chịkwaa leafhopper. Wepụ osisi nke ọrịa metụrụ.", ha: "Fesa a kan ganye don sarrafa leafhopper. Cire tsirran da suka kamu da cutar.", pcm: "Spray di leaf to kill di leafhopper. Remove plant wey don already get di virus." }
      },
      {
        type: "organic",
        name: { en: "Remove and destroy infected plants", yo: "Mú irúgbìn àìsàn kúrò kí o sì sun wọ́n", ig: "Wepụ ma kpọọ osisi ọrịa ọkụ", ha: "Cire ka ƙona tsirran da suka kamu", pcm: "Remove and burn di sick plant" },
        dosage: "Immediately upon detection",
        applicationMethod: { en: "Uproot infected plants and burn them. This prevents spread to healthy plants.", yo: "Fà irúgbìn aláìsàn tu, kí o sì sun wọ́n.", ig: "Tụpụta osisi ọrịa wee kpọọ ha ọkụ.", ha: "Tumɓuke tsirran masu cuta ka ƙone su.", pcm: "Pull out di sick plant and burn am so e no spread." }
      }
    ],
    preventions: {
      en: ["Plant resistant varieties (TZPB-SR, Oba Super)", "Control leafhopper populations with sticky traps", "Remove weed hosts near fields", "Plant early to avoid peak leafhopper season"],
      yo: ["Lo irúgbìn tí ó lágbára (TZPB-SR, Oba Super)", "Pa kòkòrò leafhopper pẹ̀lú ẹ̀wọ̀n alámọ̀", "Mu ìgbó kúrò nítòsí oko", "Gbìn ní kùtùkùtù"],
      ig: ["Jiri ụdị nke na-eguzogide ọrịa", "Jide leafhopper site na iji ọnyà", "Wepụ ahịhịa ọjọọ n'akụkụ ubi", "Kụọ ihe ọkụkụ oge"],
      ha: ["Yi amfani da irin da ke iya jurewa", "Sarrafa leafhopper da tarko", "Cire ciyawar daji kusa da gona", "Shuka da wuri"],
      pcm: ["Use maize type wey strong (TZPB-SR, Oba Super)", "Use sticky trap to catch leafhopper", "Remove bush wey dey near di farm", "Plant early"]
    }
  },

  // ========== CASSAVA DISEASES ==========
  {
    id: "cassava-mosaic",
    crop: "cassava",
    name: { en: "Cassava Mosaic Disease", yo: "Àrùn Mosaic Ẹ̀gẹ́", ig: "Ọrịa Mosaic Akpụ", ha: "Cutar Mosaic ta Rogo", pcm: "Cassava Mosaic Sickness" },
    symptoms: {
      en: "Yellow and green mosaic pattern on leaves. Leaf distortion, reduced leaf size, and stunted plant growth.",
      yo: "Àwòrán aláwọ̀ ewé àti aláwọ̀ rírẹ̀ lórí ewé. Ewé dín kù, irúgbìn kò dàgba dáadáa.",
      ig: "Ụdị akwụkwọ na-acha edo edo na akwụkwọ ndụ ndụ n'elu ahịhịa. Ahịhịa adịghị mma.",
      ha: "Alaman rawaya da kore a kan ganye. Ganyen sun ɓace siffa, tsiro ya yi ƙasa.",
      pcm: "Yellow and green pattern like design dey for di leaf. Di plant no go grow well."
    },
    causes: { en: "Cassava mosaic geminiviruses, transmitted by whiteflies (Bemisia tabaci).", yo: "Virus mosaic tí eṣinṣin funfun ń tàn kálẹ̀", ig: "Vaịrọs mosaic nke iji ọcha na-ebu", ha: "Kwayoyin cutar mosaic da ƙwarin farin ƙuda ke yadawa", pcm: "Mosaic virus wey white fly dey carry spread" },
    severity: "high",
    affectedParts: ["leaves", "stems", "tubers"],
    cures: [
      {
        type: "chemical",
        name: { en: "No chemical cure — manage through prevention", yo: "Kò sí oògùn — ṣàkóso nípasẹ̀ ìdènà", ig: "Enweghị ọgwụ kemịkal — jikwaa site na mgbochi", ha: "Babu maganin sinadari — sarrafa ta hanyar rigakafi", pcm: "No chemical cure — manage am through prevention" },
        dosage: "N/A",
        applicationMethod: { en: "Roguing (remove and destroy infected plants). Use clean planting material.", yo: "Mú àwọn irúgbìn aláìsàn kúrò.", ig: "Wepụ osisi ọrịa. Jiri ihe ọkụkụ dị ọcha.", ha: "Cire tsirran masu cuta. Yi amfani da kayan shuka masu tsabta.", pcm: "Remove and burn di sick plant. Use clean healthy stem to plant." }
      },
      {
        type: "organic",
        name: { en: "Neem extract to control whitefly", yo: "Èso Dọ́gọ́yàrò fún ẹṣinṣin funfun", ig: "Mmịpụta Dogoyaro iji chịkwaa iji ọcha", ha: "Ruwan darbejiya don sarrafa farin ƙuda", pcm: "Neem juice to control white fly" },
        dosage: "50g neem leaves per liter of water",
        applicationMethod: { en: "Soak crushed neem leaves overnight, strain, and spray on plants weekly.", yo: "Fi ewé Dọ́gọ́yàrò rì nínú omi lálẹ́, ṣẹ́ ẹ, kí o sì fọn. Ṣe ní ọ̀sẹ̀ kọ̀ọ̀kan.", ig: "Tinye akwụkwọ Dogoyaro n'ime mmiri n'abalị, sịa ya, wee fesa kwa izu.", ha: "Jiƙa ganyen darbejiya da dare, tace, ka fesa kowace mako.", pcm: "Soak crushed neem leaf for water overnight, squeeze am, spray every week." }
      }
    ],
    preventions: {
      en: ["Use virus-free planting material from certified sources", "Plant resistant varieties (TME 419, TMS 30572)", "Control whitefly populations", "Practice field sanitation"],
      yo: ["Lo ohun ọ̀gbìn tí kò ní virus", "Lo irúgbìn tí ó lágbára (TME 419, TMS 30572)", "Pa ẹṣinṣin funfun", "Pa oko mọ́"],
      ig: ["Jiri ihe ọkụkụ na-enweghị vaịrọs", "Jiri ụdị nke na-eguzogide (TME 419, TMS 30572)", "Chịkwaa iji ọcha", "Debe ubi gị n'ọnọdụ dị ọcha"],
      ha: ["Yi amfani da kayan shuka marasa cuta", "Yi amfani da irin da ke iya jurewa (TME 419, TMS 30572)", "Sarrafa yawan farin ƙuda", "Yi tsaftar gona"],
      pcm: ["Use healthy stem wey no get virus", "Use cassava type wey strong (TME 419, TMS 30572)", "Control white fly", "Keep your farm clean"]
    }
  },

  // ========== TOMATO DISEASES ==========
  {
    id: "tomato-late-blight",
    crop: "tomato",
    name: { en: "Late Blight", yo: "Àrùn Late Blight Tòmátì", ig: "Ọrịa Late Blight Tomato", ha: "Cutar Late Blight ta Tumatir", pcm: "Late Blight Sickness" },
    symptoms: {
      en: "Water-soaked spots on leaves that turn brown. White fuzzy growth on leaf undersides in humid conditions. Fruits develop brown, firm rot.",
      yo: "Àwọn àmì olómi lórí ewé tí ó di aláwọ̀ búràùnù. Ewé dàbí ẹni pé omi wọ̀ ọ́.",
      ig: "Ntụpọ mmiri n'elu ahịhịa na-aghọ aja aja. Ihe ọcha dị n'okpuru ahịhịa.",
      ha: "Taboni ruwa a kan ganye da suke jan kasa. Fararen tsiro a ƙasan ganye.",
      pcm: "Water-like spot dey for di leaf wey turn brown. White cotton-like thing dey under di leaf."
    },
    causes: { en: "Phytophthora infestans oomycete. Thrives in cool, wet conditions.", yo: "Phytophthora infestans", ig: "Phytophthora infestans", ha: "Phytophthora infestans", pcm: "Phytophthora infestans organism" },
    severity: "critical",
    affectedParts: ["leaves", "stems", "fruits"],
    cures: [
      {
        type: "chemical",
        name: { en: "Metalaxyl + Mancozeb (Ridomil Gold)", yo: "Oògùn Ridomil Gold", ig: "Ọgwụ Ridomil Gold", ha: "Maganin Ridomil Gold", pcm: "Ridomil Gold medicine" },
        dosage: "2.5g per liter of water",
        applicationMethod: { en: "Spray preventively before rainy season. Curative spray every 7 days during outbreaks.", yo: "Fi fọ́n ṣáájú àkókò ojò. Tún fọ́n ní ọjọ́ méje ọjọ́ méje nígbà àrùn bá pọ̀.", ig: "Fesa tupu oge mmiri malite. Fesa kwa ụbọchị asaa mgbe ọrịa dị.", ha: "Fesa kafin lokacin damina. Fesa kowace kwana 7 lokacin barkewar cuta.", pcm: "Spray before rainy season start. When sickness dey, spray every 7 days." }
      },
      {
        type: "organic",
        name: { en: "Copper-based Bordeaux mixture", yo: "Àdàpọ̀ Bordeaux", ig: "Ngwakọta Bordeaux", ha: "Cakudar Bordeaux", pcm: "Bordeaux mixture" },
        dosage: "1kg copper sulfate + 1kg lime in 100L water",
        applicationMethod: { en: "Spray on foliage as a protective measure. Apply before symptoms appear.", yo: "Fi fọ́n sí ewé gẹ́gẹ́ bí ìdáàbòbò.", ig: "Fesa n'elu ahịhịa dịka nchekwa.", ha: "Fesa a kan ganye azaman kariya.", pcm: "Spray on di leaf to protect am before sickness come." }
      }
    ],
    preventions: {
      en: ["Avoid overhead irrigation", "Provide good air circulation through proper spacing", "Remove and destroy infected debris", "Rotate crops — don't plant tomato after potato"],
      yo: ["Má ṣe bù omi sókè", "Fi àlàfo tó dára sí àárín irúgbìn", "Mú gbogbo irúgbìn aláìsàn kúrò", "Ṣe ìyípadà irúgbìn"],
      ig: ["Ekwela ka mmiri si n'elu daa", "Nye oghere dị mma n'etiti osisi", "Wepụ osisi ọrịa niile kwụsịa", "Gbanwee ihe ọkụkụ"],
      ha: ["Kar ka yi ban ruwa daga sama", "Bari iska ta shiga sosai ta hanyar nisantar da ya dace", "Cire duk abubuwan da suka kamu da cuta", "Yi juyawar amfanin gona"],
      pcm: ["No pour water from top", "Give good space between di plants so breeze fit enter", "Remove all di sick plant and burn am", "Change crop — no plant tomato where you plant potato before"]
    }
  },

  // ========== YAM DISEASES ==========
  {
    id: "yam-anthracnose",
    crop: "yam",
    name: { en: "Yam Anthracnose", yo: "Àrùn Anthracnose Iṣu", ig: "Ọrịa Anthracnose Ji", ha: "Cutar Anthracnose ta Doya", pcm: "Yam Anthracnose Sickness" },
    symptoms: {
      en: "Dark brown to black necrotic lesions on leaves and stems. Leaves dry up and die. Stem dieback in severe cases.",
      yo: "Àwọn ọgbẹ́ dúdù lórí ewé àti igi. Ewé gbẹ tí ó sì kú.",
      ig: "Ọnya ojii n'elu ahịhịa na nkwụ. Ahịhịa na-akpọ nkụ na-anwụ.",
      ha: "Masu launin ruwan kasa mai duhu zuwa baƙi a kan ganye. Ganyen sun bushe suna mutuwa.",
      pcm: "Dark brown to black mark dey for leaf and stem. Di leaf go dry and die."
    },
    causes: { en: "Colletotrichum gloeosporioides fungus. Spread by rain splash.", yo: "Fungus Colletotrichum gloeosporioides", ig: "Fungọs Colletotrichum gloeosporioides", ha: "Naman fungi Colletotrichum gloeosporioides", pcm: "Fungus Colletotrichum gloeosporioides" },
    severity: "high",
    affectedParts: ["leaves", "stems", "tubers"],
    cures: [
      {
        type: "chemical",
        name: { en: "Benomyl or Carbendazim fungicide", yo: "Oògùn Benomyl", ig: "Ọgwụ Benomyl", ha: "Maganin Benomyl", pcm: "Benomyl or Carbendazim medicine" },
        dosage: "1g per liter of water",
        applicationMethod: { en: "Spray at first sign of disease. Repeat every 14 days during wet season.", yo: "Fi fọ́n ní ìgbà àkọ́kọ́ tí àrùn bá hàn.", ig: "Fesa mgbe ị hụrụ ọrịa mbụ.", ha: "Fesa da fari ganin cutar.", pcm: "Spray when you first see di sickness. Repeat every 14 days during rainy season." }
      },
      {
        type: "organic",
        name: { en: "Hot water treatment of seed yams", yo: "Ìtọ́jú omi gbígbóná fún iṣu ìrúgbìn", ig: "Ịgwọ ọkụ mmiri maka ji mkpụrụ", ha: "Jiyyar doya cikin ruwan zafi", pcm: "Hot water treatment for seed yam" },
        dosage: "Soak in 50°C water for 30 minutes",
        applicationMethod: { en: "Before planting, soak seed yams in hot water to kill fungal spores on the surface.", yo: "Ṣáájú kí o tó gbìn, rì iṣu ìrúgbìn sínú omi gbígbóná.", ig: "Tupu ị kụọ, tinye ji mkpụrụ n'ime mmiri ọkụ.", ha: "Kafin shuka, jiƙa doyar iri a cikin ruwan zafi.", pcm: "Before you plant, put di seed yam inside hot water to kill di fungus." }
      }
    ],
    preventions: {
      en: ["Use disease-free planting material", "Stake yam vines to improve air circulation", "Avoid waterlogged soils", "Apply mulch to prevent rain splash"],
      yo: ["Lo ohun ọ̀gbìn tí kò ní àrùn", "Fi igi múlẹ̀ fún àjàrà iṣu", "Yàgó fún ilẹ̀ tí omi rọ̀ sí", "Lo mulch láti dènà omi ojò"],
      ig: ["Jiri ihe ọkụkụ na-enweghị ọrịa", "Kpọ ụkwụ ji ka ikuku baa", "Zere ala mmiri jupụtara", "Tinye mulch iji gbochie mmiri ozuzo"],
      ha: ["Yi amfani da kayan shuka marasa cuta", "Ɗora doyan akan kututtuka don inganta iskar iska", "Guji ƙasar da ruwa ya yi yawa", "Sanya mulch don hana yayyafar ruwan sama"],
      pcm: ["Use planting material wey no get sickness", "Stake di yam vine so air fit blow well", "No plant for waterlogged ground", "Put mulch so rain no splash disease around"]
    }
  },

  // ========== PEPPER DISEASES ==========
  {
    id: "pepper-anthracnose",
    crop: "pepper",
    name: { en: "Pepper Anthracnose", yo: "Àrùn Anthracnose Ata", ig: "Ọrịa Anthracnose Ose", ha: "Cutar Anthracnose ta Barkono", pcm: "Pepper Anthracnose Sickness" },
    symptoms: {
      en: "Sunken, circular lesions on fruits with concentric rings. Lesions may have salmon-colored spore masses. Fruits rot and drop prematurely.",
      yo: "Àwọn ọgbẹ́ tí ó rì lórí èso pẹ̀lú àwọn orúka. Èso bàjẹ́ tí ó sì ṣubú.",
      ig: "Ọnya dara ada n'elu mkpụrụ osisi nwere mgba mgba. Mkpụrụ na-ere ere na-adaa.",
      ha: "Raunuka masu nutsewa a kan 'ya'yan itace da zoben da yawa. Suna rubewa suna fadowa.",
      pcm: "Round sunken mark dey for di pepper fruit with ring pattern. Di fruit go rot and fall."
    },
    causes: { en: "Colletotrichum capsici fungus. Spread by rain and contaminated seeds.", yo: "Fungus Colletotrichum capsici", ig: "Fungọs Colletotrichum capsici", ha: "Naman fungi Colletotrichum capsici", pcm: "Fungus Colletotrichum capsici" },
    severity: "high",
    affectedParts: ["fruits", "leaves"],
    cures: [
      {
        type: "chemical",
        name: { en: "Copper oxychloride fungicide", yo: "Oògùn Copper oxychloride", ig: "Ọgwụ Copper oxychloride", ha: "Maganin Copper oxychloride", pcm: "Copper oxychloride medicine" },
        dosage: "3g per liter of water",
        applicationMethod: { en: "Spray from flowering stage. Repeat every 10-14 days.", yo: "Fi fọ́n láti àkókò ìtànnà. Tún ṣe ní ọjọ́ mẹ́wàá sí mẹ́rìnlá.", ig: "Fesa site n'oge ịchụ ifuru. Megharịa kwa ụbọchị 10-14.", ha: "Fesa daga lokacin fure. Maimaita kowace kwana 10-14.", pcm: "Spray from when di pepper dey flower. Repeat every 10-14 days." }
      },
      {
        type: "organic",
        name: { en: "Garlic extract spray", yo: "Omi Àyọ", ig: "Mmịpụta Ayo", ha: "Ruwan tafarnuwa", pcm: "Garlic water spray" },
        dosage: "Blend 100g garlic in 1L water, filter",
        applicationMethod: { en: "Spray garlic extract on fruits and foliage. Has natural antifungal properties.", yo: "Fi omi àyọ fọ́n sí lórí èso àti ewé.", ig: "Fesa mmịpụta ayo n'elu mkpụrụ na ahịhịa.", ha: "Fesa ruwan tafarnuwa a kan 'ya'ya da ganye.", pcm: "Spray garlic water on di pepper fruit and leaf. E get natural anti-fungus power." }
      }
    ],
    preventions: {
      en: ["Use certified, disease-free seeds", "Avoid overhead watering", "Remove crop debris after harvest", "Rotate with non-solanaceous crops"],
      yo: ["Lo irúgbìn tí a fọwọ́sí", "Má ṣe bù omi sókè", "Mú ìdọ̀tí irúgbìn kúrò lẹ́yìn ìkórè", "Ṣe ìyípadà irúgbìn"],
      ig: ["Jiri mkpụrụ nke e nyere ikike", "Ekwela ka mmiri si n'elu daa", "Kpochapụ ihe fọdụrụ n'ubi mgbe owuwe ihe ubi gasịrị", "Gbanwee ihe ọkụkụ"],
      ha: ["Yi amfani da iri da aka tabbatar", "Kar ka yi ban ruwa daga sama", "Cire tarkacen amfanin gona bayan girbi", "Yi juyawar amfanin gona"],
      pcm: ["Use seed wey dem certify and no get sickness", "No pour water from top", "Remove farm waste after harvest", "Change crop type every season"]
    }
  },

  // ========== COWPEA DISEASES ==========
  {
    id: "cowpea-aphid",
    crop: "cowpea",
    name: { en: "Cowpea Aphid Damage", yo: "Ìbàjẹ́ Kòkòrò Aphid Ẹ̀wà", ig: "Mbibi Aphid Agwa", ha: "Lalacewar Aphid ta Wake", pcm: "Bean Aphid Attack" },
    symptoms: {
      en: "Clusters of small black or green insects on young shoots and flower buds. Leaves curl, yellow, and may develop sooty mold from honeydew secretions.",
      yo: "Àwọn kòkòrò kékeré dúdú tàbí aláwọ̀ ewé lórí àwọn ẹ̀ka tuntun. Ewé yí àti rí rẹ̀.",
      ig: "Ìgwè obere ahụhụ ojii ma ọ bụ ndụ ndụ n'elu ọhịa ọhụụ. Ahịhịa na-akpụ akpụ na-acha odo odo.",
      ha: "Gungun ƙananan ƙwari baƙi ko kore a kan sabbin rassa. Ganyen suna lankwasawa suna yin rawaya.",
      pcm: "Small black or green insects plenty for di new shoot and flower. Di leaf go curl and turn yellow."
    },
    causes: { en: "Aphis craccivora aphids. Reproduce rapidly in dry conditions.", yo: "Kòkòrò Aphis craccivora", ig: "Ahụhụ Aphis craccivora", ha: "Ƙwarin Aphis craccivora", pcm: "Aphis craccivora insect" },
    severity: "medium",
    affectedParts: ["shoots", "flowers", "leaves"],
    cures: [
      {
        type: "chemical",
        name: { en: "Lambda-cyhalothrin insecticide", yo: "Oògùn Lambda-cyhalothrin", ig: "Ọgwụ Lambda-cyhalothrin", ha: "Maganin Lambda-cyhalothrin", pcm: "Lambda-cyhalothrin insecticide" },
        dosage: "1ml per liter of water",
        applicationMethod: { en: "Spray on infested plants, targeting undersides of leaves where aphids cluster.", yo: "Fi fọ́n sí àwọn irúgbìn tí kòkòrò bá ti kó, ní pàtàkì abẹ́ ewé.", ig: "Fesa n'elu osisi nke ahụhụ nọ, karịsịa n'okpuru ahịhịa ebe aphid nọ.", ha: "Fesa a kan tsire-tsiren da ƙwari suka mamaye, musamman ƙasan ganye.", pcm: "Spray on di plant wey get insect, especially under di leaf where dem dey hide." }
      },
      {
        type: "organic",
        name: { en: "Soapy water spray", yo: "Omi ọṣẹ̀ fún fífọ́n", ig: "Mmiri ncha maka ifesa", ha: "Ruwan sabulu don fesa", pcm: "Soap water spray" },
        dosage: "5ml liquid soap per liter of water",
        applicationMethod: { en: "Spray soapy water directly on aphid colonies. Soap suffocates the insects.", yo: "Fi omi ọṣẹ̀ fọ́n tàárà sí ibi tí kòkòrò bá wà.", ig: "Fesa mmiri ncha n'elu ebe aphid nọ.", ha: "Fesa ruwan sabulu kai tsaye a kan ƙwarin aphid.", pcm: "Spray soap water straight on where di aphid dey. Di soap go suffocate dem." }
      }
    ],
    preventions: {
      en: ["Plant early to avoid peak aphid season", "Intercrop with cereals (maize, sorghum)", "Encourage natural predators (ladybugs, lacewings)", "Use reflective mulch to repel aphids"],
      yo: ["Gbìn ní ìbẹ̀rẹ̀ àkókò", "Gbìn papọ̀ pẹ̀lú ọkà", "Gba àwọn kòkòrò tí ó ń jẹ aphid láyè", "Lo mulch aláwọ̀ dídán"],
      ig: ["Kụọ ihe ọkụkụ na mbido oge", "Kụọ ọka n'etiti", "Kwado ndị iro aphid n'ụzọ nkịtị", "Jiri mulch na-egbuke egbuke"],
      ha: ["Shuka da wuri", "Shuka tare da hatsi (masara, dawa)", "Ƙarfafa masu cin aphid na halitta", "Yi amfani da mulch mai haske"],
      pcm: ["Plant early before aphid season", "Plant together with maize or sorghum", "Allow ladybug wey go eat di aphid", "Use shiny mulch to scare aphid away"]
    }
  }
];

/**
 * Get all diseases
 */
function getAllDiseases() {
  return diseases;
}

/**
 * Get diseases by crop type
 */
function getDiseasesByCrop(cropName) {
  return diseases.filter(d => d.crop.toLowerCase() === cropName.toLowerCase());
}

/**
 * Get a single disease by ID
 */
function getDiseaseById(id) {
  return diseases.find(d => d.id === id);
}

/**
 * Search diseases by keyword
 */
function searchDiseases(query) {
  const q = query.toLowerCase();
  return diseases.filter(d =>
    d.name.en.toLowerCase().includes(q) ||
    d.crop.toLowerCase().includes(q) ||
    d.symptoms.en.toLowerCase().includes(q)
  );
}

/**
 * Get supported crops list
 */
function getSupportedCrops() {
  const crops = [...new Set(diseases.map(d => d.crop))];
  return crops.map(crop => ({
    id: crop,
    name: {
      en: crop.charAt(0).toUpperCase() + crop.slice(1),
      yo: cropTranslations[crop]?.yo || crop,
      ig: cropTranslations[crop]?.ig || crop,
      ha: cropTranslations[crop]?.ha || crop,
      pcm: cropTranslations[crop]?.pcm || crop
    },
    diseaseCount: diseases.filter(d => d.crop === crop).length
  }));
}

const cropTranslations = {
  rice: { yo: "Ìrẹsì", ig: "Ọsịkapa", ha: "Shinkafa", pcm: "Rice" },
  maize: { yo: "Àgbàdo", ig: "Ọka", ha: "Masara", pcm: "Maize/Corn" },
  cassava: { yo: "Ẹ̀gẹ́", ig: "Akpụ", ha: "Rogo", pcm: "Cassava" },
  tomato: { yo: "Tòmátì", ig: "Tomato", ha: "Tumatir", pcm: "Tomato" },
  yam: { yo: "Iṣu", ig: "Ji", ha: "Doya", pcm: "Yam" },
  pepper: { yo: "Ata", ig: "Ose", ha: "Barkono", pcm: "Pepper" },
  cowpea: { yo: "Ẹ̀wà", ig: "Agwa", ha: "Wake", pcm: "Beans" },
  cocoa: { yo: "Kóko", ig: "Koko", ha: "Koko", pcm: "Cocoa" }
};

module.exports = {
  getAllDiseases,
  getDiseasesByCrop,
  getDiseaseById,
  searchDiseases,
  getSupportedCrops,
  diseases
};
