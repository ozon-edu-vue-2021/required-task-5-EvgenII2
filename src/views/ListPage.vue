<template>
  <div class="product-list">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :dish="item.dish"
      :ingredient="item.ingredient"
      :measurement="item.measurement"
      :image="item.image"
      :id="item.id"
      :isLike="item.isLike"
      :price="item.price"
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.products = this.$store.getters.getProductList;
  },
  methods: {
    getRandomInteger() {
      return Math.round(Math.random() * 1000);
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
