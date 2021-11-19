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
            pr.numbers += payload.numbers;
          }
        });
      } else {
        state.productListInBasket.push(payload);
      }
    },
    togleProductLike: (state, payload) => {
      for (let index = 0; index < state.productList.length; index++) {
        if (state.productList[index].id === payload.id) {
          state.productList[index].isLike = !state.productList[index].isLike;
          break;
        }
      }
    },
    changeNumberInBasket: (state, payload) => {
      for (let index = 0; index < state.productListInBasket.length; index++) {
        if (state.productListInBasket[index].id === payload.id) {
          state.productListInBasket[index].numbers = Number(payload.numbers);
          break;
        }
      }
    },
  },

  actions: {
    setProducts: (context, payload) => {
      fetch("https://random-data-api.com/api/food/random_food?size=30")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        })
        .then((res) => {
          context.state.productList = res;
          for (
            let index = 0;
            index < context.state.productList.length;
            index++
          ) {
            context.state.productList[index].image = payload[index];
            context.state.productList[index].isLike = false;
            context.state.productList[index].price = Math.round(
              Math.random() * 1000
            );
          }
        })
        .catch((err) => console.log(err));
    },
    pushProduct: (context, payload) => {
      context.commit("pushProductInBasket", payload);
    },
    togleLike: (context, payload) => {
      context.commit("togleProductLike", payload);
    },
    changeNumber: (context, payload) => {
      context.commit("changeNumberInBasket", payload);
    },
  },
});
