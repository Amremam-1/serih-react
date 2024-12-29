import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translationEn from "./messages/en.json"
import translationAr from "./messages/ar.json"

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
}

i18n
  .use(LanguageDetector) // للكشف عن لغة المتصفح
  .use(initReactI18next) // تكامل مع React
  .init({
    resources,
    lng: "En", // اللغة الافتراضية
    fallbackLng: "En", // اللغة التي يتم استخدامها في حالة عدم توفر الترجمة
    interpolation: {
      escapeValue: false, // React يتولى الحماية من XSS
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
