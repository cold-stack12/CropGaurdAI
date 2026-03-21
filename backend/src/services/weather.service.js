/**
 * CropGuard AI — Weather & Alert Service
 * Provides weather data and disease outbreak alerts for Nigerian states
 */

const nigerianStates = {
  lagos: { lat: 6.5244, lon: 3.3792 },
  oyo: { lat: 7.8519, lon: 3.9318 },
  kano: { lat: 12.0022, lon: 8.5920 },
  kaduna: { lat: 10.5222, lon: 7.4383 },
  ogun: { lat: 7.1604, lon: 3.3480 },
  enugu: { lat: 6.4584, lon: 7.5464 },
  anambra: { lat: 6.2209, lon: 6.9370 },
  rivers: { lat: 4.8156, lon: 7.0498 },
  benue: { lat: 7.7352, lon: 8.5391 },
  plateau: { lat: 9.2182, lon: 9.5179 },
  niger: { lat: 9.9309, lon: 5.5981 },
  kwara: { lat: 8.4799, lon: 4.5418 },
  ondo: { lat: 7.2507, lon: 5.2103 },
  ekiti: { lat: 7.7190, lon: 5.3110 },
  osun: { lat: 7.5629, lon: 4.5200 },
  abia: { lat: 5.4527, lon: 7.5248 },
  imo: { lat: 5.5720, lon: 7.0588 },
  cross_river: { lat: 5.9631, lon: 8.3359 },
  akwa_ibom: { lat: 5.0077, lon: 7.8494 },
  bayelsa: { lat: 4.7719, lon: 6.0699 }
};

/**
 * Get weather for a Nigerian state
 */
async function getWeather(state) {
  const useMock = process.env.USE_MOCK_SERVICES === 'true';

  if (!useMock && process.env.OPENWEATHERMAP_API_KEY) {
    return await fetchRealWeather(state);
  }

  return getMockWeather(state);
}

async function fetchRealWeather(state) {
  try {
    const coords = nigerianStates[state.toLowerCase()] || nigerianStates.lagos;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.error('Weather API error:', error.message);
    return getMockWeather(state);
  }
}

function getMockWeather(state) {
  const temp = 25 + Math.random() * 10;
  const humidity = 55 + Math.random() * 35;
  const conditions = ['Clear', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Heavy Rain', 'Thunderstorm'];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  return {
    location: state.charAt(0).toUpperCase() + state.slice(1) + ' State, Nigeria',
    temperature: Math.round(temp),
    humidity: Math.round(humidity),
    condition: condition,
    windSpeed: Math.round(5 + Math.random() * 15),
    forecast: generateForecast(),
    isMock: true
  };
}

function generateForecast() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  return days.map(day => ({
    day,
    high: Math.round(28 + Math.random() * 8),
    low: Math.round(20 + Math.random() * 5),
    rain: Math.round(Math.random() * 100)
  }));
}

/**
 * Generate disease alerts based on weather conditions
 */
function generateAlerts(weather, lang = 'en') {
  const alerts = [];

  if (weather.humidity > 80) {
    alerts.push({
      id: 'high-humidity',
      type: 'warning',
      crop: 'rice',
      title: {
        en: '⚠️ High Humidity Alert — Rice Blast Risk',
        yo: '⚠️ Ìkìlọ̀ Ọ̀rinrin gíga — Ewu Àrùn Blast Ìrẹsì',
        ig: '⚠️ Ịdọ aka ná ntị Ikuku mmiri — Ihe egwu Blast Ọsịkapa',
        ha: '⚠️ Faɗakarwa Zafi — Haɗarin cutar Blast ta Shinkafa',
        pcm: '⚠️ High Humidity Warning — Rice Blast Risk'
      }[lang] || '⚠️ High Humidity Alert — Rice Blast Risk',
      message: {
        en: `Humidity at ${weather.humidity}% in ${weather.location}. Monitor rice fields for blast symptoms.`,
        yo: `Ọ̀rinrin wà ní ${weather.humidity}% ní ${weather.location}. Ṣàgbéyẹ̀wò oko ìrẹsì fún àmì blast.`,
        pcm: `Humidity dey ${weather.humidity}% for ${weather.location}. Check your rice farm for blast sickness sign.`
      }[lang] || `Humidity at ${weather.humidity}% in ${weather.location}. Monitor rice fields for blast symptoms.`,
      severity: 'high'
    });
  }

  if (weather.condition === 'Heavy Rain' || weather.condition === 'Thunderstorm') {
    alerts.push({
      id: 'heavy-rain',
      type: 'warning',
      crop: 'tomato',
      title: {
        en: '🌧️ Heavy Rain — Late Blight Risk for Tomatoes',
        yo: '🌧️ Ojò Líle — Ewu Late Blight fún Tòmátì',
        ig: '🌧️ Mmiri Ozuzo siri ike — Ihe egwu Late Blight maka Tomato',
        ha: '🌧️ Ruwan Sama Mai Yawa — Haɗarin Late Blight ga Tumatir',
        pcm: '🌧️ Heavy Rain — Late Blight Danger for Tomato'
      }[lang] || '🌧️ Heavy Rain — Late Blight Risk for Tomatoes',
      message: {
        en: 'Heavy rainfall increases risk of late blight in tomato crops. Apply preventive fungicide.',
        yo: 'Ojò líle mú ewu late blight pọ̀ sí i fún tòmátì. Lo oògùn ìdènà.',
        pcm: 'Heavy rain go increase di chance of late blight for tomato. Apply fungicide to prevent am.'
      }[lang] || 'Heavy rainfall increases risk of late blight in tomato crops. Apply preventive fungicide.',
      severity: 'high'
    });
  }

  if (weather.temperature > 32) {
    alerts.push({
      id: 'high-temp',
      type: 'info',
      crop: 'maize',
      title: {
        en: '🌡️ High Temperature — Armyworm Activity Expected',
        yo: '🌡️ Ìgbóná Gíga — Ìṣe Armyworm Ni A Ń Retí',
        pcm: '🌡️ High Temperature — Armyworm Go Dey Active'
      }[lang] || '🌡️ High Temperature — Armyworm Activity Expected',
      message: {
        en: `Temperature at ${weather.temperature}°C. Warm conditions favor Fall Armyworm activity in maize.`,
        pcm: `Temperature dey ${weather.temperature}°C. Hot weather go make armyworm dey active for maize farm.`
      }[lang] || `Temperature at ${weather.temperature}°C. Warm conditions favor Fall Armyworm activity in maize.`,
      severity: 'medium'
    });
  }

  // Always add a general seasonal tip
  alerts.push({
    id: 'seasonal-tip',
    type: 'tip',
    crop: 'general',
    title: {
      en: '💡 Seasonal Farming Tip',
      yo: '💡 Ìmọ̀ràn Àkókò Iṣẹ́ Oko',
      ig: '💡 Ndụmọdụ Oge Ọrụ Ubi',
      ha: '💡 Shawarar Noma ta Lokaci',
      pcm: '💡 Farming Tip for This Season'
    }[lang] || '💡 Seasonal Farming Tip',
    message: {
      en: 'Regularly scout your fields for early signs of disease. Early detection saves crops and money.',
      yo: 'Ṣàyẹ̀wò oko rẹ nígbà gbogbo fún àmì àrùn. Ìrísí kùtùkùtù ń gba irúgbìn àti owó là.',
      ig: 'Na-enyocha ubi gị mgbe niile maka ihe ịrịba ama ọrịa. Ịchọpụta oge na-azọpụta ihe ọkụkụ na ego.',
      ha: 'Kullum bincika gonarku don gano alamun cuta da wuri. Gano da wuri yana ceton amfanin gona da kuɗi.',
      pcm: 'Always check your farm for early sign of sickness. If you catch am early, you go save your crop and money.'
    }[lang] || 'Regularly scout your fields for early signs of disease. Early detection saves crops and money.',
    severity: 'low'
  });

  return alerts;
}

module.exports = { getWeather, generateAlerts };
