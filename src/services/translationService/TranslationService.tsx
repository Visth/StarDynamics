import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const pl = {};
const en = {};

i18next.use(LanguageDetector).init({
  debug: true,
  lng: localStorage.getItem('lang'),
  detection: {
    order: ['localStorage', 'cookie', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
  },
  fallbackLng: 'en',
  resources: {
    pl: pl,
    en: en,
  },
});

export const trans = (key: string, htmlElement?: string) =>
  i18next.t(key, { htmlElement: htmlElement, interpolation: { escapeValue: false } });

export default i18next;
