import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    productList: [],
    productListInBasket: [],
  }),
  getters: {
    getProductList: (state) => {
      console.log("get");
      return state.productList;
    },
    getProductListInBasket: (state) => {
      console.log("get");
      return state.productListInBasket;
    },
  },
  mutations: {
    pushProductInBasket: (state, payload) => {
      state.productListInBasket.push(payload);
    },
    getProductsFromApi: (state, payload) => {
      console.log("mut");
      fetch("https://random-data-api.com/api/food/random_food?size=30")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
        .then((res) => (state.productList = res))
        .catch((err) => console.log(err));
      payload;
    },
  },
  actions: {
    getProducts: (context) => {
      console.log("act");
      context.commit("getProductsFromApi");
    },
    pushProduct: (context, payload) => {
      console.log("act");
      context.commit("pushProductInBasket", payload);
    },
  },
});
