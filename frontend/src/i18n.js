import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Korea Clinic Finder"
      }
    },
    bn: {
      translation: {
        title: "কোরিয়া ক্লিনিক অনুসন্ধানকারী"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});