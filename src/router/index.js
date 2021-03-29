import Vue from "vue";
import VueRouter from "vue-router";
import nav1 from "../views/nav1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/nav1",
    name: "nav1",
    component: nav1,
  },
  {
    path: "/nav2",
    name: "nav2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav2.vue"),
  },
  {
    path: "/nav3",
    name: "nav3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav3.vue"),
  },
  {
    path: "/nav4",
    name: "nav4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav4.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
