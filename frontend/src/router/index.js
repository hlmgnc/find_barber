import Vue from "vue";
import VueRouter from "vue-router";
import Client from "../views/client.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Client",
    component: Client
  },
  {
    path: "/clients/:id",
    name: "ClientDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/client-detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
