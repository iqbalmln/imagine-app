import { createApp } from 'vue'
import '/src/assets/css/style.css'
import router from "./router";
import App from './App.vue'
import 'boxicons'

createApp(App).use(router).mount("#app");
