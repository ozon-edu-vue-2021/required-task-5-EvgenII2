import Vue from "vue";
import Router from "vue-router";

import MainPage from "../views/MainPage";
import BasketPage from "../views/BasketPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
      meta: {
        title: "Главная",
      },
    },
    {
      path: "/basket",
      component: BasketPage,
      meta: {
        title: "Корзина",
      },
    },
  ],
});
