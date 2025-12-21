import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import ja from './ja/translation.json';
import sv from './sv/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
    sv: { translation: sv },
  },
  lng: localStorage.getItem('lng') ?? 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
