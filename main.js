import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast, {
  // Toast configuration options
  position: POSITION.TOP_CENTER,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
});

app.mount("#app");

