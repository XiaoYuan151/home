import { createI18n } from "vue-i18n";
import zh from "../locales/zh.json";
import en from "../locales/en.json";

let locale = "zh";
const lang = navigator.language || navigator.userLanguage;
if (lang.startsWith("zh")) {
  locale = "zh";
} else if (lang.startsWith("en")) {
  locale = "en";
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale,
  fallbackLocale: "en",
  messages: {
    zh,
    en,
  },
});

export default i18n;
