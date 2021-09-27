import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import about from "../views/about.vue";

import PortFlio from "../views/PortFlio.vue"
import contact from "../views/contact.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/service",
    name: "service",

    component: () =>
      import("../views/service.vue"),
  },
  {
    path: "/PortFlio",
    name: "PortFlio",
    component: PortFlio
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
