import "/src/assets/main.css";
import "@fontsource/noto-sans-sc/400.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBlog,
  faCloud,
  faCompactDisc,
  faDollarSign,
  faHandHoldingDollar,
  faHouse,
  faLaptop,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBitcoin,
  faEthereum,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import { createApp } from "vue";
import App from "./App.vue";

library.add(faHouse);
library.add(faBlog);
library.add(faCloud);
library.add(faCompactDisc);
library.add(faGitAlt);
library.add(faLaptop);
library.add(faBitcoin);
library.add(faEthereum);
library.add(faDollarSign);
library.add(faHandHoldingDollar);
library.add(faLink);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
