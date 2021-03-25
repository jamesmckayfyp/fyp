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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav2.vue"),
  },
  {
    path: "/nav3",
    name: "nav3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav3.vue"),
  },
  {
    path: "/nav4",
    name: "nav4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav4.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
