<template>
  <div class="product-list">
    <ProductCard
      v-for="(item, index) in products"
      :key="item.id"
      :dish="item.dish"
      :ingredient="item.ingredient"
      :measurement="item.measurement"
      :image="images[index]"
      :id="item.id"
      :price="getRandomInteger()"
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
      images: [],
    };
  },
  created() {
    const pictures = require.context("@/assets/images", true, /^.*\.webp$/);
    this.images = pictures.keys().map((im) => im.slice(2));
    this.images = this.images.concat(this.images).concat(this.images);

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
