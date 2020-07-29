import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: () => import("../views/LoginView/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/LoginView/ForgotPassword.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../components/Main.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
