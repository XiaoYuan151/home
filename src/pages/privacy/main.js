import "/src/assets/main.css";
import "@fontsource/noto-sans-sc/400.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import zh from "./locales/zh.json";
import en from "./locales/en.json";

let locale;
const lang = navigator.language || navigator.userLanguage;
if (lang.startsWith("zh")) {
  locale = "zh";
} else {
  locale = "en";
}
const i18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: "en",
  messages: {
    en,
    zh,
  },
});
const app = createApp(App);
app.use(i18n);
app.mount("#app");
