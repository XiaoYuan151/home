import "/src/assets/main.css";
import "@fontsource/noto-sans-sc/400.css";

import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

const app = createApp(App);
app.use(i18n);
app.mount("#app");
