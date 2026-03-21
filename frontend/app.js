/**
 * CropGuard AI — Main Application
 */

// ---- Embedded Disease Database (mirrors backend) ----
const diseases = [
  {
    id:"rice-blast", crop:"rice", icon:"🌾",
    name:{en:"Rice Blast",yo:"Àrùn Ìbúgbàmú Ìrẹsì",ig:"Ọrịa Blast Ọsịkapa",ha:"Cutar Blast ta Shinkafa",pcm:"Rice Blast Sickness"},
    symptoms:{en:"Diamond-shaped lesions on leaves with gray centers and brown borders. Nodes turn black.",yo:"Àwọn àmì onígun mẹ́rin lórí ewé pẹ̀lú àárín awọ̀ eérú.",ig:"Ọnya dị ka diamond n'elu ahịhịa nwere etiti isi awọ.",ha:"Alamun lu'u'u a kan ganye masu tsakiyar toka.",pcm:"Diamond shape mark dey for di leaf, di center grey and di border brown."},
    causes:{en:"Magnaporthe oryzae fungus. High humidity and cool nights.",yo:"Fungus Magnaporthe oryzae",ig:"Fungọs Magnaporthe oryzae",ha:"Naman fungi Magnaporthe oryzae",pcm:"Fungus wey dem call Magnaporthe oryzae"},
    severity:"high", affectedParts:["leaves","nodes","panicles"],
    cures:[
      {type:"chemical",name:{en:"Tricyclazole fungicide",yo:"Oògùn Tricyclazole",ig:"Ọgwụ Tricyclazole",ha:"Maganin Tricyclazole",pcm:"Tricyclazole medicine"},dosage:"300g per hectare",method:{en:"Foliar spray at booting stage. Repeat after 10 days.",yo:"Fi fọ́n sí orí ewé ní àkókò ìdàgbàsókè.",ig:"Fesa n'elu ahịhịa na oge ọ na-eto.",ha:"Fesa a kan ganye lokacin girma.",pcm:"Spray am on top di leaf when di rice dey grow."}},
      {type:"organic",name:{en:"Neem oil extract",yo:"Epo Dọ́gọ́yàrò",ig:"Mmanụ Dogoyaro",ha:"Man shafin Darbejiya",pcm:"Neem oil"},dosage:"5ml per liter of water",method:{en:"Mix with water and spray on affected leaves early morning.",yo:"Da po pẹ̀lú omi, fi fọ́n sí ewé tí àrùn ti kó ní kùtùkùtù òwúrọ̀.",ig:"Gwakọta ya na mmiri wee fesa n'ahịhịa.",ha:"Gauraya da ruwa ka fesa a kan ganye.",pcm:"Mix am with water, spray di leaves wey get di sickness for morning time."}}
    ],
    preventions:{en:["Use resistant varieties (FARO 44, FARO 52)","Avoid excessive nitrogen fertilizer","Ensure proper spacing","Practice crop rotation"],yo:["Lo irúgbìn tí ó lágbára","Má ṣe lo ajílẹ̀ nitrogen púpọ̀","Fi àlàfo tó dára sí àárín irúgbìn","Ṣe ìyípadà irúgbìn"],ig:["Jiri ụdị nke na-eguzogide ọrịa","Ekwela ka ị tinye ọtụtụ nitrogen","Hụ na ị hapụrụ oghere dị mma","Mee mgbanwe ihe ọkụkụ"],ha:["Yi amfani da irin da ke iya jurewa","Kar ka yi amfani da taki nitrogen da yawa","Tabbatar da nisantar da ya dace","Yi aikin juyawar amfanin gona"],pcm:["Use rice type wey strong against sickness","No use too much nitrogen fertilizer","Give space between di plants","Change crop every season"]}
  },
  {
    id:"maize-fall-armyworm", crop:"maize", icon:"🌽",
    name:{en:"Fall Armyworm",yo:"Kòkòrò Armyworm",ig:"Ikpuru Armyworm",ha:"Tsutsar Armyworm",pcm:"Armyworm Caterpillar"},
    symptoms:{en:"Ragged holes in leaves, large amounts of frass in whorl. Young plants may be cut at the base.",yo:"Àwọn ihò tí kò ní ìtọ́sọ́nà lórí ewé.",ig:"Oghere adịghị mma n'elu ahịhịa.",ha:"Ramummuka a kan ganye.",pcm:"Rough holes dey for di leaf, caterpillar poo-poo dey inside."},
    causes:{en:"Spodoptera frugiperda moth larvae.",yo:"Àwọn ọmọ moth Spodoptera frugiperda",ig:"Ụmụ moth Spodoptera frugiperda",ha:"Larvae na asu Spodoptera frugiperda",pcm:"Caterpillar baby from Spodoptera moth"},
    severity:"critical", affectedParts:["leaves","stems","ears"],
    cures:[
      {type:"chemical",name:{en:"Emamectin benzoate",yo:"Oògùn Emamectin",ig:"Ọgwụ Emamectin",ha:"Maganin Emamectin",pcm:"Emamectin medicine"},dosage:"0.4ml per liter of water",method:{en:"Spray directly into the whorl of affected plants in early morning.",yo:"Fi fọ́n sí ọkàn ewé ní kùtùkùtù òwúrọ̀.",ig:"Fesa n'ime obi ahịhịa n'ụtụtụ.",ha:"Fesa kai tsaye cikin tsakiyar ganye da safe-safe.",pcm:"Spray am inside di center of di plant early morning."}},
      {type:"organic",name:{en:"Ash + chili pepper mixture",yo:"Eérú àti Ata ìlù",ig:"Ntụ na ose",ha:"Toka da barkono",pcm:"Ash and pepper mix"},dosage:"Equal parts wood ash and ground chili",method:{en:"Apply mixture into the whorl. The irritant deters caterpillars.",yo:"Fi àdàpọ̀ sí ọkàn àgbàdo.",ig:"Tinye ngwakọta n'ime obi ọka.",ha:"Zuba cakuda a cikin tsakiyar masara.",pcm:"Put di mix inside di center of di maize plant."}}
    ],
    preventions:{en:["Plant early in the season","Use push-pull technology","Monitor fields regularly","Encourage natural predators"],yo:["Gbìn ní ìbẹ̀rẹ̀ àkókò","Lo ọ̀nà push-pull","Ṣàyẹ̀wò oko rẹ nígbà gbogbo","Gba àwọn apẹranjẹ àdánidá láyè"],ig:["Kụọ ihe ọkụkụ na mbido oge","Jiri usoro push-pull","Nyochaa ubi gị mgbe niile","Kwado ndị na-eri ikpuru"],ha:["Shuka da wuri","Yi amfani da fasahar push-pull","Duba gonar ka kullum","Ƙarfafa masu cin tsutsa na halitta"],pcm:["Plant early for di season","Use push-pull method","Check your farm regularly","Allow natural enemies"]}
  },
  {
    id:"cassava-mosaic", crop:"cassava", icon:"🫘",
    name:{en:"Cassava Mosaic Disease",yo:"Àrùn Mosaic Ẹ̀gẹ́",ig:"Ọrịa Mosaic Akpụ",ha:"Cutar Mosaic ta Rogo",pcm:"Cassava Mosaic Sickness"},
    symptoms:{en:"Yellow and green mosaic pattern on leaves. Leaf distortion, reduced size, stunted growth.",yo:"Àwòrán aláwọ̀ ewé àti aláwọ̀ rírẹ̀ lórí ewé.",ig:"Ụdị akwụkwọ na-acha edo edo na ndụ ndụ n'elu ahịhịa.",ha:"Alaman rawaya da kore a kan ganye.",pcm:"Yellow and green pattern dey for di leaf. Di plant no go grow well."},
    causes:{en:"Cassava mosaic geminiviruses, transmitted by whiteflies.",yo:"Virus mosaic tí eṣinṣin funfun ń tàn kálẹ̀",ig:"Vaịrọs mosaic nke iji ọcha na-ebu",ha:"Kwayoyin cutar da farin ƙuda ke yadawa",pcm:"Mosaic virus wey white fly dey carry"},
    severity:"high", affectedParts:["leaves","stems","tubers"],
    cures:[
      {type:"chemical",name:{en:"No chemical cure — manage through prevention",yo:"Kò sí oògùn — ṣàkóso nípasẹ̀ ìdènà",ig:"Enweghị ọgwụ kemịkal — jikwaa site na mgbochi",ha:"Babu maganin sinadari — sarrafa ta hanyar rigakafi",pcm:"No chemical cure — manage am through prevention"},dosage:"N/A",method:{en:"Remove and destroy infected plants. Use clean planting material.",yo:"Mú àwọn irúgbìn aláìsàn kúrò.",ig:"Wepụ osisi ọrịa.",ha:"Cire tsirran masu cuta.",pcm:"Remove and burn di sick plant."}},
      {type:"organic",name:{en:"Neem extract to control whitefly",yo:"Èso Dọ́gọ́yàrò fún ẹṣinṣin funfun",ig:"Mmịpụta Dogoyaro",ha:"Ruwan darbejiya don sarrafa farin ƙuda",pcm:"Neem juice to control white fly"},dosage:"50g neem leaves per liter",method:{en:"Soak crushed neem leaves overnight, strain, and spray weekly.",yo:"Fi ewé Dọ́gọ́yàrò rì nínú omi lálẹ́, ṣẹ́ ẹ, kí o sì fọn.",ig:"Tinye akwụkwọ Dogoyaro n'ime mmiri n'abalị, sịa ya, wee fesa.",ha:"Jiƙa ganyen darbejiya da dare, tace, ka fesa.",pcm:"Soak crushed neem leaf for water overnight, spray every week."}}
    ],
    preventions:{en:["Use virus-free planting material","Plant resistant varieties (TME 419)","Control whitefly populations","Practice field sanitation"],yo:["Lo ohun ọ̀gbìn tí kò ní virus","Lo irúgbìn tí ó lágbára","Pa ẹṣinṣin funfun","Pa oko mọ́"],ig:["Jiri ihe ọkụkụ na-enweghị vaịrọs","Jiri ụdị nke na-eguzogide","Chịkwaa iji ọcha","Debe ubi gị"],ha:["Yi amfani da kayan shuka marasa cuta","Yi amfani da irin da ke iya jurewa","Sarrafa yawan farin ƙuda","Yi tsaftar gona"],pcm:["Use healthy stem wey no get virus","Use cassava type wey strong","Control white fly","Keep your farm clean"]}
  },
  {
    id:"tomato-late-blight", crop:"tomato", icon:"🍅",
    name:{en:"Late Blight",yo:"Àrùn Late Blight Tòmátì",ig:"Ọrịa Late Blight Tomato",ha:"Cutar Late Blight ta Tumatir",pcm:"Late Blight Sickness"},
    symptoms:{en:"Water-soaked spots on leaves that turn brown. White fuzzy growth on leaf undersides. Fruits develop brown rot.",yo:"Àwọn àmì olómi lórí ewé tí ó di aláwọ̀ búràùnù.",ig:"Ntụpọ mmiri n'elu ahịhịa na-aghọ aja aja.",ha:"Taboni ruwa a kan ganye da suke jan kasa.",pcm:"Water-like spot dey for di leaf wey turn brown."},
    causes:{en:"Phytophthora infestans. Thrives in cool, wet conditions.",yo:"Phytophthora infestans",ig:"Phytophthora infestans",ha:"Phytophthora infestans",pcm:"Phytophthora infestans organism"},
    severity:"critical", affectedParts:["leaves","stems","fruits"],
    cures:[
      {type:"chemical",name:{en:"Ridomil Gold (Metalaxyl + Mancozeb)",yo:"Oògùn Ridomil Gold",ig:"Ọgwụ Ridomil Gold",ha:"Maganin Ridomil Gold",pcm:"Ridomil Gold medicine"},dosage:"2.5g per liter of water",method:{en:"Spray preventively before rainy season. Curative spray every 7 days.",yo:"Fi fọ́n ṣáájú àkókò ojò.",ig:"Fesa tupu oge mmiri malite.",ha:"Fesa kafin lokacin damina.",pcm:"Spray before rainy season start. Spray every 7 days."}},
      {type:"organic",name:{en:"Bordeaux mixture",yo:"Àdàpọ̀ Bordeaux",ig:"Ngwakọta Bordeaux",ha:"Cakudar Bordeaux",pcm:"Bordeaux mixture"},dosage:"1kg copper sulfate + 1kg lime in 100L water",method:{en:"Spray on foliage as protective measure before symptoms appear.",yo:"Fi fọ́n sí ewé gẹ́gẹ́ bí ìdáàbòbò.",ig:"Fesa n'elu ahịhịa dịka nchekwa.",ha:"Fesa a kan ganye azaman kariya.",pcm:"Spray on di leaf to protect am before sickness come."}}
    ],
    preventions:{en:["Avoid overhead irrigation","Proper spacing for air circulation","Remove infected debris","Rotate crops"],yo:["Má ṣe bù omi sókè","Fi àlàfo tó dára","Mú irúgbìn aláìsàn kúrò","Ṣe ìyípadà irúgbìn"],ig:["Ekwela ka mmiri si n'elu daa","Nye oghere dị mma","Wepụ osisi ọrịa","Gbanwee ihe ọkụkụ"],ha:["Kar ka yi ban ruwa daga sama","Nisantar da ya dace","Cire abubuwan da suka kamu","Yi juyawar amfanin gona"],pcm:["No pour water from top","Give good space between plants","Remove sick plants","Change crop type"]}
  },
  {
    id:"yam-anthracnose", crop:"yam", icon:"🍠",
    name:{en:"Yam Anthracnose",yo:"Àrùn Anthracnose Iṣu",ig:"Ọrịa Anthracnose Ji",ha:"Cutar Anthracnose ta Doya",pcm:"Yam Anthracnose Sickness"},
    symptoms:{en:"Dark brown to black necrotic lesions on leaves and stems. Leaves dry up and die.",yo:"Àwọn ọgbẹ́ dúdù lórí ewé àti igi.",ig:"Ọnya ojii n'elu ahịhịa na nkwụ.",ha:"Masu launin ruwan kasa zuwa baƙi a kan ganye.",pcm:"Dark brown to black mark dey for leaf and stem."},
    causes:{en:"Colletotrichum gloeosporioides fungus.",yo:"Fungus Colletotrichum",ig:"Fungọs Colletotrichum",ha:"Naman fungi Colletotrichum",pcm:"Colletotrichum fungus"},
    severity:"high", affectedParts:["leaves","stems","tubers"],
    cures:[
      {type:"chemical",name:{en:"Benomyl fungicide",yo:"Oògùn Benomyl",ig:"Ọgwụ Benomyl",ha:"Maganin Benomyl",pcm:"Benomyl medicine"},dosage:"1g per liter",method:{en:"Spray at first sign of disease. Repeat every 14 days.",yo:"Fi fọ́n ní ìgbà àkọ́kọ́ tí àrùn bá hàn.",ig:"Fesa mgbe ị hụrụ ọrịa mbụ.",ha:"Fesa da fari ganin cutar.",pcm:"Spray when you first see sickness. Repeat every 14 days."}},
      {type:"organic",name:{en:"Hot water treatment of seed yams",yo:"Ìtọ́jú omi gbígbóná fún iṣu",ig:"Ịgwọ ọkụ mmiri maka ji",ha:"Jiyyar doya cikin ruwan zafi",pcm:"Hot water treatment for seed yam"},dosage:"Soak in 50°C water for 30 minutes",method:{en:"Before planting, soak seed yams in hot water to kill fungal spores.",yo:"Ṣáájú kí o tó gbìn, rì iṣu sínú omi gbígbóná.",ig:"Tupu ị kụọ, tinye ji n'ime mmiri ọkụ.",ha:"Kafin shuka, jiƙa doyar iri a cikin ruwan zafi.",pcm:"Before you plant, put seed yam inside hot water."}}
    ],
    preventions:{en:["Use disease-free planting material","Stake yam vines","Avoid waterlogged soils","Apply mulch"],yo:["Lo ohun ọ̀gbìn tí kò ní àrùn","Fi igi múlẹ̀ fún àjàrà iṣu","Yàgó fún ilẹ̀ tí omi rọ̀ sí","Lo mulch"],ig:["Jiri ihe ọkụkụ dị ọcha","Kpọ ụkwụ ji","Zere ala mmiri jupụtara","Tinye mulch"],ha:["Yi amfani da kayan shuka marasa cuta","Ɗora doyan","Guji ƙasar ruwa","Sanya mulch"],pcm:["Use planting material wey no get sickness","Stake di yam vine","No plant for waterlogged ground","Put mulch"]}
  },
  {
    id:"pepper-anthracnose", crop:"pepper", icon:"🌶️",
    name:{en:"Pepper Anthracnose",yo:"Àrùn Anthracnose Ata",ig:"Ọrịa Anthracnose Ose",ha:"Cutar Anthracnose ta Barkono",pcm:"Pepper Anthracnose Sickness"},
    symptoms:{en:"Sunken circular lesions on fruits with concentric rings. Fruits rot and drop.",yo:"Àwọn ọgbẹ́ tí ó rì lórí èso pẹ̀lú àwọn orúka.",ig:"Ọnya dara ada n'elu mkpụrụ osisi.",ha:"Raunuka masu nutsewa a kan 'ya'yan itace.",pcm:"Round sunken mark dey for di pepper fruit."},
    causes:{en:"Colletotrichum capsici fungus.",yo:"Fungus Colletotrichum capsici",ig:"Fungọs Colletotrichum capsici",ha:"Naman fungi Colletotrichum capsici",pcm:"Colletotrichum capsici fungus"},
    severity:"high", affectedParts:["fruits","leaves"],
    cures:[
      {type:"chemical",name:{en:"Copper oxychloride",yo:"Oògùn Copper oxychloride",ig:"Ọgwụ Copper oxychloride",ha:"Maganin Copper oxychloride",pcm:"Copper oxychloride medicine"},dosage:"3g per liter",method:{en:"Spray from flowering stage. Repeat every 10-14 days.",yo:"Fi fọ́n láti àkókò ìtànnà.",ig:"Fesa site n'oge ịchụ ifuru.",ha:"Fesa daga lokacin fure.",pcm:"Spray from when pepper dey flower."}},
      {type:"organic",name:{en:"Garlic extract spray",yo:"Omi Àyọ",ig:"Mmịpụta Ayo",ha:"Ruwan tafarnuwa",pcm:"Garlic water spray"},dosage:"Blend 100g garlic in 1L water",method:{en:"Spray garlic extract on fruits and foliage. Natural antifungal.",yo:"Fi omi àyọ fọ́n sí lórí èso àti ewé.",ig:"Fesa mmịpụta ayo n'elu mkpụrụ.",ha:"Fesa ruwan tafarnuwa a kan 'ya'ya.",pcm:"Spray garlic water on fruit and leaf."}}
    ],
    preventions:{en:["Use certified seeds","Avoid overhead watering","Remove crop debris","Rotate crops"],yo:["Lo irúgbìn tí a fọwọ́sí","Má ṣe bù omi sókè","Mú ìdọ̀tí kúrò","Ṣe ìyípadà irúgbìn"],ig:["Jiri mkpụrụ nke e nyere ikike","Ekwela mmiri si n'elu daa","Kpochapụ ihe fọdụrụ","Gbanwee ihe ọkụkụ"],ha:["Yi amfani da iri da aka tabbatar","Kar ka yi ban ruwa daga sama","Cire tarkace","Yi juyawar amfanin gona"],pcm:["Use certified seed","No pour water from top","Remove farm waste","Change crop type"]}
  },
  {
    id:"cowpea-aphid", crop:"cowpea", icon:"🫘",
    name:{en:"Cowpea Aphid Damage",yo:"Ìbàjẹ́ Kòkòrò Aphid Ẹ̀wà",ig:"Mbibi Aphid Agwa",ha:"Lalacewar Aphid ta Wake",pcm:"Bean Aphid Attack"},
    symptoms:{en:"Clusters of small black insects on young shoots. Leaves curl and yellow.",yo:"Àwọn kòkòrò kékeré dúdù lórí àwọn ẹ̀ka tuntun.",ig:"Ìgwè obere ahụhụ ojii n'elu ọhịa ọhụụ.",ha:"Gungun ƙananan ƙwari baƙi a kan sabbin rassa.",pcm:"Small black insects plenty for di new shoot."},
    causes:{en:"Aphis craccivora aphids.",yo:"Kòkòrò Aphis craccivora",ig:"Ahụhụ Aphis craccivora",ha:"Ƙwarin Aphis craccivora",pcm:"Aphis craccivora insect"},
    severity:"medium", affectedParts:["shoots","flowers","leaves"],
    cures:[
      {type:"chemical",name:{en:"Lambda-cyhalothrin",yo:"Oògùn Lambda-cyhalothrin",ig:"Ọgwụ Lambda-cyhalothrin",ha:"Maganin Lambda-cyhalothrin",pcm:"Lambda-cyhalothrin insecticide"},dosage:"1ml per liter",method:{en:"Spray targeting undersides of leaves where aphids cluster.",yo:"Fi fọ́n sí abẹ́ ewé.",ig:"Fesa n'okpuru ahịhịa.",ha:"Fesa ƙasan ganye.",pcm:"Spray under di leaf where dem dey hide."}},
      {type:"organic",name:{en:"Soapy water spray",yo:"Omi ọṣẹ̀",ig:"Mmiri ncha",ha:"Ruwan sabulu",pcm:"Soap water spray"},dosage:"5ml liquid soap per liter",method:{en:"Spray soapy water directly on aphids. Soap suffocates them.",yo:"Fi omi ọṣẹ̀ fọ́n tàárà sí ibi tí kòkòrò bá wà.",ig:"Fesa mmiri ncha n'elu ebe aphid nọ.",ha:"Fesa ruwan sabulu kai tsaye a kan ƙwarin.",pcm:"Spray soap water straight on di aphid."}}
    ],
    preventions:{en:["Plant early","Intercrop with cereals","Encourage natural predators","Use reflective mulch"],yo:["Gbìn ní ìbẹ̀rẹ̀ àkókò","Gbìn papọ̀ pẹ̀lú ọkà","Gba àwọn apẹranjẹ láyè","Lo mulch aláwọ̀ dídán"],ig:["Kụọ ihe ọkụkụ na mbido oge","Kụọ ọka n'etiti","Kwado ndị iro aphid","Jiri mulch na-egbuke"],ha:["Shuka da wuri","Shuka tare da hatsi","Ƙarfafa masu cin aphid","Yi amfani da mulch mai haske"],pcm:["Plant early","Plant with maize or sorghum","Allow ladybug","Use shiny mulch"]}
  },
  {
    id:"maize-streak", crop:"maize", icon:"🌽",
    name:{en:"Maize Streak Virus",yo:"Àrùn Ìlà Àgbàdo",ig:"Ọrịa Streak Ọka",ha:"Cutar Streak ta Masara",pcm:"Maize Streak Virus"},
    symptoms:{en:"Narrow yellow streaks parallel to leaf veins. Stunted growth.",yo:"Àwọn ìlà kékeré aláwọ̀ rírẹ̀ nínú ewé.",ig:"Ahịrị ọcha na-agba ọsọ n'elu akwụkwọ.",ha:"Siraran rawaya masu siriri a kan ganye.",pcm:"Thin yellow line dey for di leaf. Plant no grow well."},
    causes:{en:"Maize streak virus transmitted by leafhoppers.",yo:"Àrùn tí àwọn kòkòrò leafhopper ń kó",ig:"Ọrịa nke ahụhụ leafhopper na-ebu",ha:"Cutar da ƙwari leafhopper ke yadawa",pcm:"Virus wey leafhopper insect dey carry"},
    severity:"high", affectedParts:["leaves"],
    cures:[
      {type:"chemical",name:{en:"Imidacloprid (leafhopper control)",yo:"Oògùn Imidacloprid",ig:"Ọgwụ Imidacloprid",ha:"Maganin Imidacloprid",pcm:"Imidacloprid medicine"},dosage:"1ml per liter",method:{en:"Spray to control leafhopper vectors. Remove infected plants.",yo:"Fi fọ́n sí ewé láti pa kòkòrò leafhopper.",ig:"Fesa iji chịkwaa leafhopper.",ha:"Fesa don sarrafa leafhopper.",pcm:"Spray to kill leafhopper. Remove sick plant."}},
      {type:"organic",name:{en:"Remove and destroy infected plants",yo:"Mú irúgbìn àìsàn kúrò kí o sì sun wọ́n",ig:"Wepụ ma kpọọ osisi ọrịa ọkụ",ha:"Cire ka ƙona tsirran da suka kamu",pcm:"Remove and burn di sick plant"},dosage:"Immediately",method:{en:"Uproot and burn infected plants to prevent spread.",yo:"Fà irúgbìn tu kí o sì sun wọ́n.",ig:"Tụpụta osisi ọrịa wee kpọọ ha ọkụ.",ha:"Tumɓuke tsirran masu cuta ka ƙone su.",pcm:"Pull out and burn am so e no spread."}}
    ],
    preventions:{en:["Plant resistant varieties","Use sticky traps for leafhoppers","Remove weed hosts","Plant early"],yo:["Lo irúgbìn tí ó lágbára","Pa kòkòrò leafhopper","Mu ìgbó kúrò","Gbìn ní kùtùkùtù"],ig:["Jiri ụdị nke na-eguzogide","Jide leafhopper","Wepụ ahịhịa ọjọọ","Kụọ ihe ọkụkụ oge"],ha:["Yi amfani da irin da ke iya jurewa","Yi amfani da tarko","Cire ciyawa","Shuka da wuri"],pcm:["Use strong maize type","Use sticky trap","Remove bush wey dey near farm","Plant early"]}
  }
];

const cropIcons = {rice:"🌾",maize:"🌽",cassava:"🫘",tomato:"🍅",yam:"🍠",pepper:"🌶️",cowpea:"🫘",cocoa:"🍫"};
const crops = [...new Set(diseases.map(d=>d.crop))];

// Community posts
const communityPosts = [
  {id:'1',author:'Farmer Adebayo',avatar:'👨‍🌾',crop:'maize',title:'Armyworm invasion in my maize farm - Oyo State',content:'I noticed caterpillars eating through my maize leaves. The damage is spreading fast.',replies:[{author:'Agric Officer Chika',avatar:'👩‍🔬',content:'This looks like Fall Armyworm. Apply Emamectin benzoate (0.4ml/L) directly into the whorl.',isExpert:true},{author:'Farmer Musa',avatar:'👨‍🌾',content:'The ash and pepper mix worked for me. Apply early morning.',isExpert:false}],upvotes:12,state:'Oyo'},
  {id:'2',author:'Mama Ngozi',avatar:'👩‍🌾',crop:'cassava',title:'Yellow pattern on my cassava leaves - is this mosaic?',content:'My cassava leaves are showing yellow and green patterns. The plants look smaller than they should be.',replies:[{author:'Agric Officer Emeka',avatar:'👨‍🔬',content:'Yes, this is Cassava Mosaic Disease. Remove and burn infected plants. Use virus-free cuttings. TME 419 variety is resistant.',isExpert:true}],upvotes:8,state:'Anambra'},
  {id:'3',author:'Alhaji Ibrahim',avatar:'👨‍🌾',crop:'tomato',title:'Tomato fruits turning brown and rotting - Kano',content:'After the recent heavy rains, my tomato fruits are developing brown spots and rotting.',replies:[{author:'Agric Officer Fatima',avatar:'👩‍🔬',content:'This is likely Late Blight. Apply Ridomil Gold at 2.5g per liter immediately. Remove severely infected fruits.',isExpert:true}],upvotes:15,state:'Kano'}
];

// ---- State ----
let selectedCrop = null;
let selectedImage = null;
let currentDiagnosis = null;
let pageHistory = ['dashboard'];

// ---- Init ----
window.addEventListener('DOMContentLoaded', () => {
  const hasVisited = localStorage.getItem('cropguard_welcomed');

  setTimeout(() => {
    document.getElementById('splash-loader').classList.add('hidden');

    if (hasVisited) {
      // Returning user — go straight to app
      document.getElementById('app').style.display = 'flex';
      initApp();
    } else {
      // First visit — show welcome page
      document.getElementById('welcome-page').style.display = 'flex';
    }
  }, 1800);
});

function dismissWelcome() {
  localStorage.setItem('cropguard_welcomed', '1');
  const welcomePage = document.getElementById('welcome-page');
  welcomePage.classList.add('exit');

  setTimeout(() => {
    welcomePage.style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    initApp();
  }, 600);
}

function initApp() {
  applyTranslations();
  initLangSwitcher();
  initCropPills();
  initCropGrid();
  initFileInputs();
  loadWeatherAlerts();
  renderDiseasePreview('all');
  renderCommunityPreview();

  // Offline detection
  window.addEventListener('online', () => { document.getElementById('offlineBanner').style.display = 'none'; });
  window.addEventListener('offline', () => { document.getElementById('offlineBanner').style.display = 'flex'; });
  if (!navigator.onLine) document.getElementById('offlineBanner').style.display = 'flex';
}

// ---- Language Switcher ----
function initLangSwitcher() {
  const btn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => dropdown.classList.remove('open'));

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      const flag = opt.dataset.flag;
      setLanguage(lang);
      document.getElementById('langLabel').textContent = lang.toUpperCase();
      document.querySelector('.lang-flag').textContent = flag;
      document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      dropdown.classList.remove('open');
      // Refresh dynamic content
      renderDiseasePreview(document.querySelector('#cropPills .crop-pill.active')?.dataset.crop || 'all');
      if (currentDiagnosis) renderResults(currentDiagnosis);
      loadWeatherAlerts();
    });
  });

  // Set initial
  const saved = getCurrentLang();
  const savedOpt = document.querySelector(`.lang-option[data-lang="${saved}"]`);
  if (savedOpt) {
    document.getElementById('langLabel').textContent = saved.toUpperCase();
    document.querySelector('.lang-flag').textContent = savedOpt.dataset.flag;
    document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
    savedOpt.classList.add('active');
  }
}

// ---- Navigation ----
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navItem) navItem.classList.add('active');
  if (pageHistory[pageHistory.length - 1] !== page) pageHistory.push(page);
  window.scrollTo(0, 0);

  if (page === 'library') renderLibrary();
  if (page === 'community') renderCommunityFull();
}

function goBack() {
  pageHistory.pop();
  const prev = pageHistory[pageHistory.length - 1] || 'dashboard';
  navigateTo(prev);
}

// ---- Crop Pills (Dashboard) ----
function initCropPills() {
  const container = document.getElementById('cropPills');
  container.innerHTML = `<button class="crop-pill active" data-crop="all" onclick="filterDiseases('all', this)">${t('all_crops')}</button>`;
  crops.forEach(crop => {
    container.innerHTML += `<button class="crop-pill" data-crop="${crop}" onclick="filterDiseases('${crop}', this)">${cropIcons[crop]} ${t('crop_'+crop)}</button>`;
  });
}

function filterDiseases(crop, btn) {
  document.querySelectorAll('#cropPills .crop-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderDiseasePreview(crop);
}

function renderDiseasePreview(crop) {
  const lang = getCurrentLang();
  const filtered = crop === 'all' ? diseases.slice(0, 5) : diseases.filter(d => d.crop === crop);
  const container = document.getElementById('diseasePreview');

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">No diseases found for this crop.</p>';
    return;
  }

  container.innerHTML = filtered.map(d => `
    <div class="disease-card" onclick="showDiseaseDetail('${d.id}')">
      <div class="disease-severity ${d.severity}"></div>
      <div class="disease-info">
        <div class="disease-name">${d.name[lang] || d.name.en}</div>
        <div class="disease-crop">${cropIcons[d.crop]} ${t('crop_'+d.crop)} — ${t(d.severity)}</div>
      </div>
      <span class="disease-arrow">›</span>
    </div>
  `).join('');
}

// ---- Crop Grid (Scan Page) ----
function initCropGrid() {
  const grid = document.getElementById('cropGrid');
  grid.innerHTML = crops.map(crop => `
    <div class="crop-card" data-crop="${crop}" onclick="selectCrop('${crop}', this)">
      <span class="crop-card-icon">${cropIcons[crop]}</span>
      <span class="crop-card-name">${t('crop_'+crop)}</span>
    </div>
  `).join('');
}

function selectCrop(crop, el) {
  selectedCrop = crop;
  document.querySelectorAll('.crop-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('scanStep2').classList.remove('hidden');
  document.getElementById('scanStep2').scrollIntoView({ behavior: 'smooth' });
}

// ---- File Input / Camera ----
function initFileInputs() {
  ['cameraInput', 'fileInput'].forEach(id => {
    document.getElementById(id).addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        selectedImage = file;
        const reader = new FileReader();
        reader.onload = (ev) => {
          document.getElementById('previewImage').src = ev.target.result;
          document.getElementById('uploadPlaceholder').classList.add('hidden');
          document.getElementById('uploadPreview').classList.remove('hidden');
          document.getElementById('analyzeBtn').disabled = false;
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // Drag and drop
  const zone = document.getElementById('uploadZone');
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      selectedImage = file;
      const reader = new FileReader();
      reader.onload = (ev) => {
        document.getElementById('previewImage').src = ev.target.result;
        document.getElementById('uploadPlaceholder').classList.add('hidden');
        document.getElementById('uploadPreview').classList.remove('hidden');
        document.getElementById('analyzeBtn').disabled = false;
      };
      reader.readAsDataURL(file);
    }
  });
}

function clearImage() {
  selectedImage = null;
  document.getElementById('uploadPlaceholder').classList.remove('hidden');
  document.getElementById('uploadPreview').classList.add('hidden');
  document.getElementById('analyzeBtn').disabled = true;
  document.getElementById('cameraInput').value = '';
  document.getElementById('fileInput').value = '';
}

// ---- Analysis ----
async function analyzeCrop() {
  if (!selectedCrop) return;

  document.getElementById('scanStep1').classList.add('hidden');
  document.getElementById('scanStep2').classList.add('hidden');
  document.getElementById('scanAnalyzing').classList.remove('hidden');

  // Simulate AI analysis (2-3 seconds)
  await new Promise(r => setTimeout(r, 2000 + Math.random() * 1000));

  // Get matching diseases for selected crop
  const cropDiseases = diseases.filter(d => d.crop === selectedCrop);
  if (cropDiseases.length === 0) {
    currentDiagnosis = { detected: false };
  } else {
    const disease = cropDiseases[Math.floor(Math.random() * cropDiseases.length)];
    currentDiagnosis = {
      detected: true,
      disease: disease,
      confidence: 0.72 + Math.random() * 0.23,
      imageUrl: document.getElementById('previewImage').src
    };
  }

  renderResults(currentDiagnosis);
  navigateTo('results');

  // Reset scan page
  document.getElementById('scanStep1').classList.remove('hidden');
  document.getElementById('scanStep2').classList.remove('hidden');
  document.getElementById('scanAnalyzing').classList.add('hidden');
}

// ---- Render Results ----
function renderResults(diagnosis) {
  const lang = getCurrentLang();
  const container = document.getElementById('resultsContent');

  if (!diagnosis.detected) {
    container.innerHTML = `
      <div class="result-header">
        <div style="font-size:4rem;margin-bottom:1rem">✅</div>
        <h3 class="result-disease-name">${t('no_disease')}</h3>
        <p class="text-muted">${t('no_disease_desc')}</p>
      </div>
      <button class="btn btn-primary btn-full" onclick="navigateTo('scan')">${t('scan_another')}</button>`;
    return;
  }

  const d = diagnosis.disease;
  const conf = Math.round(diagnosis.confidence * 100);
  const circumference = 2 * Math.PI * 48;
  const offset = circumference * (1 - diagnosis.confidence);
  const severityColor = {'low':'var(--severity-low)','medium':'var(--severity-medium)','high':'var(--severity-high)','critical':'var(--severity-critical)'}[d.severity];

  const timeline = [
    {day:1, icon:"🔍", action:lang==='pcm'?'Find out wetin be di sickness.':lang==='yo'?'Ṣe ìdámọ̀ àrùn náà.':'Identify and confirm the disease.'},
    {day:1, icon:"💊", action:`${t('application')}: ${d.cures[0]?.name[lang]||d.cures[0]?.name.en}`},
    {day:3, icon:"👀", action:lang==='pcm'?'Check if di plant dey improve.':lang==='yo'?'Ṣàgbéyẹ̀wò fún ìlọsíwájú.':'Monitor for improvement.'},
    {day:7, icon:"🔄", action:lang==='pcm'?'Apply treatment again if sickness still dey.':lang==='yo'?'Tún lo ìtọ́jú tí àmì bá ṣì wà.':'Reapply if symptoms persist.'},
    {day:14, icon:"🛡️", action:lang==='pcm'?'Apply prevention.':lang==='yo'?'Lo àwọn ìgbésẹ̀ ìdènà.':'Apply preventive measures.'},
    {day:21, icon:"📝", action:lang==='pcm'?'Final check.':lang==='yo'?'Àyẹ̀wò ìkẹyìn.':'Final assessment.'}
  ];

  container.innerHTML = `
    ${diagnosis.imageUrl ? `<div style="text-align:center;margin-bottom:1rem"><img src="${diagnosis.imageUrl}" style="max-width:100%;max-height:200px;border-radius:var(--radius-md);object-fit:cover"></div>` : ''}
    <div class="result-header">
      <div class="result-confidence">
        <svg class="confidence-ring" viewBox="0 0 108 108">
          <circle class="confidence-ring-bg" cx="54" cy="54" r="48"/>
          <circle class="confidence-ring-fill" cx="54" cy="54" r="48" stroke="${severityColor}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
        </svg>
        <div class="confidence-value">
          <span class="confidence-pct">${conf}%</span>
          <span class="confidence-label">${t('confidence')}</span>
        </div>
      </div>
      <h3 class="result-disease-name">${d.name[lang]||d.name.en}</h3>
      <span class="severity-badge ${d.severity}">${t(d.severity)}</span>
    </div>

    <div class="result-section">
      <h4>🔬 ${t('symptoms')}</h4>
      <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6">${d.symptoms[lang]||d.symptoms.en}</p>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.5rem"><strong>${t('causes')}:</strong> ${d.causes[lang]||d.causes.en}</p>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem"><strong>${t('affected_parts')}:</strong> ${d.affectedParts.join(', ')}</p>
    </div>

    <div class="result-section">
      <h4>${t('recommended_cures')}</h4>
      ${d.cures.map(c => `
        <div class="cure-card ${c.type}">
          <div class="cure-type">${c.type === 'chemical' ? t('chemical_treatment') : t('organic_remedy')}</div>
          <div class="cure-name">${c.name[lang]||c.name.en}</div>
          <div class="cure-dosage"><strong>${t('dosage')}:</strong> ${c.dosage}</div>
          <div class="cure-method">${c.method[lang]||c.method.en}</div>
        </div>
      `).join('')}
    </div>

    <div class="result-section">
      <h4>${t('treatment_timeline')}</h4>
      <div class="timeline">
        ${timeline.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-day">${item.icon} ${t('day')} ${item.day}</div>
            <div class="timeline-action">${item.action}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="result-section">
      <h4>${t('prevention_tips')}</h4>
      <ul class="prevention-list">
        ${(d.preventions[lang]||d.preventions.en).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    <button class="btn btn-primary btn-full" onclick="navigateTo('scan')" style="margin-top:1rem">
      📸 ${t('scan_another')}
    </button>`;
}

// ---- Disease Detail ----
function showDiseaseDetail(diseaseId) {
  const d = diseases.find(x => x.id === diseaseId);
  if (!d) return;

  const lang = getCurrentLang();
  document.getElementById('diseaseDetailTitle').textContent = d.name[lang] || d.name.en;

  const container = document.getElementById('diseaseDetailContent');
  container.innerHTML = `
    <div class="detail-hero">
      <div class="detail-crop-icon">${cropIcons[d.crop]}</div>
      <div class="detail-disease-name">${d.name[lang]||d.name.en}</div>
      <span class="severity-badge ${d.severity}">${t(d.severity)}</span>
    </div>

    <div class="result-section">
      <h4>🔬 ${t('symptoms')}</h4>
      <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.6">${d.symptoms[lang]||d.symptoms.en}</p>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.5rem"><strong>${t('causes')}:</strong> ${d.causes[lang]||d.causes.en}</p>
    </div>

    <div class="result-section">
      <h4>${t('recommended_cures')}</h4>
      ${d.cures.map(c => `
        <div class="cure-card ${c.type}">
          <div class="cure-type">${c.type === 'chemical' ? t('chemical_treatment') : t('organic_remedy')}</div>
          <div class="cure-name">${c.name[lang]||c.name.en}</div>
          <div class="cure-dosage"><strong>${t('dosage')}:</strong> ${c.dosage}</div>
          <div class="cure-method">${c.method[lang]||c.method.en}</div>
        </div>
      `).join('')}
    </div>

    <div class="result-section">
      <h4>${t('prevention_tips')}</h4>
      <ul class="prevention-list">
        ${(d.preventions[lang]||d.preventions.en).map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>`;

  // Store current disease for TTS
  window._currentDetailDisease = d;
  navigateTo('disease-detail');
}

// ---- Library ----
function renderLibrary() {
  const lang = getCurrentLang();
  // Pills
  const pillsContainer = document.getElementById('libraryPills');
  pillsContainer.innerHTML = `<button class="crop-pill active" data-crop="all" onclick="filterLibrary('all',this)">${t('all_crops')}</button>`;
  crops.forEach(crop => {
    pillsContainer.innerHTML += `<button class="crop-pill" data-crop="${crop}" onclick="filterLibrary('${crop}',this)">${cropIcons[crop]} ${t('crop_'+crop)}</button>`;
  });

  filterLibrary('all', pillsContainer.querySelector('.crop-pill'));
}

function filterLibrary(crop, btn) {
  document.querySelectorAll('#libraryPills .crop-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  const lang = getCurrentLang();
  const filtered = crop === 'all' ? diseases : diseases.filter(d => d.crop === crop);
  const container = document.getElementById('libraryContent');

  container.innerHTML = filtered.map(d => `
    <div class="disease-card" onclick="showDiseaseDetail('${d.id}')" style="margin-bottom:0.5rem">
      <div class="disease-severity ${d.severity}"></div>
      <div class="disease-info">
        <div class="disease-name">${d.name[lang]||d.name.en}</div>
        <div class="disease-crop">${cropIcons[d.crop]} ${t('crop_'+d.crop)} — ${t(d.severity)}</div>
      </div>
      <span class="disease-arrow">›</span>
    </div>
  `).join('');
}

// ---- Weather ----
async function loadWeatherAlerts() {
  const lang = getCurrentLang();
  const state = document.getElementById('stateSelect')?.value || 'lagos';
  const container = document.getElementById('weatherContent');

  // Mock weather
  const temp = Math.round(25 + Math.random() * 10);
  const humidity = Math.round(55 + Math.random() * 35);
  const conditions = ['☀️ Clear','⛅ Partly Cloudy','☁️ Cloudy','🌧️ Light Rain','🌧️ Heavy Rain','⛈️ Thunderstorm'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const condIcon = condition.split(' ')[0];
  const condText = condition.split(' ').slice(1).join(' ');

  // Generate alerts
  const alerts = [];
  if (humidity > 75) alerts.push({type:'warning',title:lang==='pcm'?'⚠️ High Humidity — Rice Blast Risk':'⚠️ High Humidity Alert',msg:lang==='pcm'?`Humidity dey ${humidity}%. Check rice farm.`:`Humidity at ${humidity}%. Monitor rice fields for blast symptoms.`});
  if (condText.includes('Heavy') || condText.includes('Thunder')) alerts.push({type:'warning',title:lang==='pcm'?'🌧️ Heavy Rain — Tomato Late Blight Risk':'🌧️ Heavy Rain Alert',msg:lang==='pcm'?'Heavy rain go increase tomato blight risk.':'Heavy rain increases late blight risk in tomatoes.'});
  if (temp > 32) alerts.push({type:'info',title:lang==='pcm'?'🌡️ Hot Weather — Armyworm Active':'🌡️ High Temperature Alert',msg:lang==='pcm'?`${temp}°C — Warm weather favor armyworm.`:`${temp}°C — Warm conditions favor Fall Armyworm activity.`});
  alerts.push({type:'tip',title:lang==='pcm'?'💡 Farming Tip':'💡 Seasonal Tip',msg:lang==='pcm'?'Always check your farm for early sign of sickness.':'Regularly scout your fields for early signs of disease.'});

  container.innerHTML = `
    <div class="weather-main">
      <span class="weather-icon">${condIcon}</span>
      <span class="weather-temp">${temp}°C</span>
      <div class="weather-details">
        <span>${condText}</span>
        <span>${t('humidity')}: ${humidity}%</span>
        <span>${t('wind')}: ${Math.round(5+Math.random()*15)} km/h</span>
      </div>
    </div>
    <div class="weather-alerts">
      ${alerts.map(a => `
        <div class="weather-alert-item ${a.type}">
          <div class="weather-alert-title">${a.title}</div>
          <div>${a.msg}</div>
        </div>
      `).join('')}
    </div>`;
}

// ---- Community ----
function renderCommunityPreview() {
  const container = document.getElementById('communityPreview');
  container.innerHTML = communityPosts.slice(0, 2).map(renderPostCard).join('');
}

function renderCommunityFull() {
  const container = document.getElementById('communityPosts');
  container.innerHTML = communityPosts.map(p => renderPostCard(p, true)).join('');
}

function renderPostCard(post, full = false) {
  return `
    <div class="community-post" ${full ? '' : `onclick="navigateTo('community')"`}>
      <div class="post-header">
        <span class="post-avatar">${post.avatar}</span>
        <div>
          <div class="post-author">${post.author}</div>
          <div class="post-meta">${post.state} · ${cropIcons[post.crop]||''} ${post.crop}</div>
        </div>
      </div>
      <div class="post-title">${post.title}</div>
      <div class="post-content">${post.content}</div>
      <div class="post-footer">
        <span class="post-stat">👍 ${post.upvotes}</span>
        <span class="post-stat">💬 ${post.replies.length} ${t('replies')}</span>
      </div>
      ${full ? `
        <div class="post-replies">
          ${post.replies.map(r => `
            <div class="reply-card ${r.isExpert ? 'expert' : ''}">
              <div class="post-header">
                <span class="post-avatar">${r.avatar}</span>
                <div>
                  <div class="post-author">${r.author} ${r.isExpert ? `<span class="expert-badge">🏅 ${t('expert')}</span>` : ''}</div>
                </div>
              </div>
              <div style="font-size:0.85rem;color:var(--text-secondary);line-height:1.5;margin-top:0.25rem">${r.content}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>`;
}

// ---- Modal ----
function showNewPostModal() {
  document.getElementById('newPostModal').style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function submitPost(e) {
  e.preventDefault();
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  const crop = document.getElementById('postCrop').value;

  communityPosts.unshift({
    id: Date.now().toString(), author: 'You', avatar: '👨‍🌾', crop,
    title, content, replies: [], upvotes: 0, state: 'Your State'
  });

  closeModal('newPostModal');
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
  renderCommunityFull();
}

// ---- Text-to-Speech ----
function speakResults() {
  if (!currentDiagnosis?.detected) return;
  const lang = getCurrentLang();
  const d = currentDiagnosis.disease;
  const text = `${d.name[lang]||d.name.en}. ${d.symptoms[lang]||d.symptoms.en}. ${t('recommended_cures')}: ${d.cures.map(c => c.name[lang]||c.name.en).join(', ')}.`;
  speak(text, lang);
}

function speakDiseaseDetails() {
  const d = window._currentDetailDisease;
  if (!d) return;
  const lang = getCurrentLang();
  const text = `${d.name[lang]||d.name.en}. ${d.symptoms[lang]||d.symptoms.en}. ${d.cures.map(c => c.name[lang]||c.name.en).join(', ')}.`;
  speak(text, lang);
}

function speak(text, lang) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const langMap = {en:'en-NG',yo:'yo',ig:'ig',ha:'ha',pcm:'en-NG'};
  utterance.lang = langMap[lang] || 'en-NG';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}
