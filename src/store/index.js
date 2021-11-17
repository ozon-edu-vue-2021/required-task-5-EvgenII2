import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    productList: [],
    productListInBasket: [],
    productListLiked: [],
  }),
  getters: {
    getProductList: (state) => {
      return state.productList;
    },
    getProductListInBasket: (state) => {
      return state.productListInBasket;
    },
  },
  mutations: {
    pushProductInBasket: (state, payload) => {
      if (
        state.productListInBasket.filter((pr) => {
          return pr.id === payload.id;
        }).length > 0
      ) {
        state.productListInBasket.forEach((pr) => {
          if (pr.id === payload.id) {
            pr.number += payload.number;
          }
        });
      } else {
        state.productListInBasket.push(payload);
      }
    },
    setProductsFromApi(state) {
      fetch("https://random-data-api.com/api/food/random_food?size=30")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
        .then((res) => {
          state.productList = res;
        })
        .catch((err) => console.log(err));
    },
  },
  actions: {
    setProducts: (context) => {
      context.commit("setProductsFromApi");
    },
    pushProduct: (context, payload) => {
      context.commit("pushProductInBasket", payload);
    },
  },
});
