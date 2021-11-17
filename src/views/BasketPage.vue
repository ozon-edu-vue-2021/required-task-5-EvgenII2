<template>
  <div class="basket-page">
    <BasketTotal :price="getPrice()" :number="getNumber()" />
    <div class="product-list">
      <ProductCardForBasket
        v-for="item in products"
        :key="item.id"
        :dish="item.dish"
        :image="item.image"
        :price="item.price"
        :number="item.number"
        :id="item.id"
      />
    </div>
  </div>
</template>

<script>
import ProductCardForBasket from "../components/ProductCardForBasket.vue";
import BasketTotal from "../components/BasketTotal.vue";

export default {
  components: {
    ProductCardForBasket,
    BasketTotal,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = this.$store.getters.getProductListInBasket;
  },
  methods: {
    onClick() {
      this.$store.getters;
    },
    getPrice() {
      return this.products.reduce(function (sum, current) {
        return sum + current.price * current.number;
      }, 0);
    },
    getNumber() {
      return this.products.reduce(function (sum, current) {
        return sum + Number(current.number);
      }, 0);
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 30px;
  padding: 20px;
}
</style>
