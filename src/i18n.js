import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './common/languages/en.json';
import es from './common/languages/es.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    'en-US': {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
