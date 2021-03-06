import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import Tables from "../views/Tables.vue";
import Players from "../views/Players.vue";
import MyTeam from "../views/MyTeam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Games",
    name: "Games",
    component: () =>
      import(/* webpackChunkName: "games" */ "../views/Games.vue"),
  },
  {
    path: "/Tables",
    name: "Tables",
    component: () =>
      import(/* webpackChunkName: "tables" */ "../views/Tables.vue"),
  },
  {
    path: "/Players",
    name: "Players",
    component: () =>
      import(/* webpackChunkName: "players" */ "../views/Players.vue"),
  },
  {
    path: "/MyTeam",
    name: "MyTeam",
    component: () =>
      import(/* webpackChunkName: "myteam" */ "../views/MyTeam.vue"),
  },
  {
  path: "/Games/Match",
  name: "Match",
  component: () =>
    import(/* webpackChunkName: "myteam" */ "../components/Games/Match.vue"),
  },
  {
    path: "/Games/PreviousMatch",
    name: "MatchPrevious",
    component: () =>
      import(/* webpackChunkName: "myteam" */ "../components/Games/MatchPrevious.vue"),
    },
    {
      path: "/Games/MatchBefore",
      name: "MatchBefore",
      component: () =>
        import(/* webpackChunkName: "myteam" */ "../components/Games/MatchBefore.vue"),
      }
];

const router = new VueRouter({
  routes,
});

export default router;
