import Vue from "vue";
import Router from "vue-router";

import MainPage from "../views/ListPage";
import BasketPage from "../views/BasketPage";
import LikedPage from "../views/LikedPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/list",
      component: MainPage,
      meta: {
        title: "Товары",
      },
    },
    {
      path: "/basket",
      component: BasketPage,
      meta: {
        title: "Корзина",
      },
    },
    {
      path: "/liked",
      component: LikedPage,
      meta: {
        title: "Топ",
      },
    },
  ],
});
