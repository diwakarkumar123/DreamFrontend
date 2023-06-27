import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';

import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import de from './de.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locale = NativeModules.I18nManager.localeIdentifier;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }, 
      de: { translation: de } 
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


