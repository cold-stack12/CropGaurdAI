/**
 * CropGuard AI — Recommendation Service
 * Matches AI diagnosis to curated cure database
 */

const { getDiseaseById, getDiseasesByCrop, getSupportedCrops } = require('../data/diseaseDatabase');

/**
 * Get full recommendations for a diagnosed disease
 */
function getRecommendations(diseaseId, lang = 'en') {
  const disease = getDiseaseById(diseaseId);
  if (!disease) {
    return null;
  }

  return {
    disease: {
      id: disease.id,
      crop: disease.crop,
      name: disease.name[lang] || disease.name.en,
      symptoms: disease.symptoms[lang] || disease.symptoms.en,
      causes: disease.causes[lang] || disease.causes.en,
      severity: disease.severity,
      affectedParts: disease.affectedParts
    },
    cures: disease.cures.map(cure => ({
      type: cure.type,
      name: cure.name[lang] || cure.name.en,
      dosage: cure.dosage,
      applicationMethod: cure.applicationMethod[lang] || cure.applicationMethod.en
    })),
    preventions: disease.preventions[lang] || disease.preventions.en,
    timeline: generateTreatmentTimeline(disease, lang)
  };
}

/**
 * Generate a step-by-step treatment timeline
 */
function generateTreatmentTimeline(disease, lang = 'en') {
  const timelines = {
    en: [
      { day: 1, action: "Identify and confirm the disease. Take clear photos for records.", icon: "🔍" },
      { day: 1, action: `Apply recommended treatment: ${disease.cures[0]?.name?.en || 'See cure details'}`, icon: "💊" },
      { day: 3, action: "Monitor affected plants for improvement or worsening.", icon: "👀" },
      { day: 7, action: "Re-assess damage. If no improvement, consider alternative treatment.", icon: "📊" },
      { day: 7, action: `Reapply treatment if symptoms persist. ${disease.cures[0]?.applicationMethod?.en || ''}`, icon: "🔄" },
      { day: 14, action: "Check for spread to nearby plants. Apply preventive measures.", icon: "🛡️" },
      { day: 21, action: "Final assessment. Document results for future reference.", icon: "📝" }
    ],
    yo: [
      { day: 1, action: "Ṣe ìdámọ̀ àrùn náà kí o sì fi ìdí rẹ̀ múlẹ̀. Ya àwòrán fún ìtọ́kasí.", icon: "🔍" },
      { day: 1, action: `Lo ìtọ́jú tí a ṣe ìṣedúró: ${disease.cures[0]?.name?.yo || 'Wo àlàyé ìtọ́jú'}`, icon: "💊" },
      { day: 3, action: "Ṣàgbéyẹ̀wò àwọn irúgbìn tí àrùn kó fún ìlọsíwájú.", icon: "👀" },
      { day: 7, action: "Tún ṣàyẹ̀wò ìbàjẹ́ náà. Tí kò bá sí ìlọsíwájú, rò ìtọ́jú mìíràn.", icon: "📊" },
      { day: 7, action: "Tún lo ìtọ́jú tí àmì bá ṣì wà.", icon: "🔄" },
      { day: 14, action: "Ṣàyẹ̀wò bóyá àrùn ti tàn kálẹ̀. Lo àwọn ìgbésẹ̀ ìdènà.", icon: "🛡️" },
      { day: 21, action: "Àyẹ̀wò ìkẹyìn. Kọ àbájáde sílẹ̀ fún ọjọ́ iwájú.", icon: "📝" }
    ],
    pcm: [
      { day: 1, action: "Find out wetin be di sickness. Take clear photo.", icon: "🔍" },
      { day: 1, action: `Apply di recommended treatment: ${disease.cures[0]?.name?.pcm || 'Check cure details'}`, icon: "💊" },
      { day: 3, action: "Check if di plant dey improve or dey get worse.", icon: "👀" },
      { day: 7, action: "Check again. If no improvement, try another treatment.", icon: "📊" },
      { day: 7, action: "Apply treatment again if sickness still dey.", icon: "🔄" },
      { day: 14, action: "Check if di sickness don spread. Apply prevention.", icon: "🛡️" },
      { day: 21, action: "Final check. Write down wetin happen for future.", icon: "📝" }
    ]
  };

  return timelines[lang] || timelines.en;
}

/**
 * Get quick tips for a crop type
 */
function getCropTips(cropType, lang = 'en') {
  const cropDiseases = getDiseasesByCrop(cropType);
  return cropDiseases.map(d => ({
    id: d.id,
    name: d.name[lang] || d.name.en,
    severity: d.severity,
    quickTip: d.preventions[lang]?.[0] || d.preventions.en[0]
  }));
}

module.exports = { getRecommendations, getCropTips, getSupportedCrops };
