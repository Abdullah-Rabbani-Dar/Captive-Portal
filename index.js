import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import OtpPage from "@/components/OtpPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
  { path: '/', name:'home', component: Home },
  { path: '/otp', name:'otpPage', component: OtpPage },],
});

export default router;
