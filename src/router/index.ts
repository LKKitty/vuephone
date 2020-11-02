import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/index.vue"),
  },
  {
    path: "/Fatcher",
    name: "Fatcher",
    component: () => import("@/view/test/sonDom.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_PATH,
  routes,
});

export default router;
