<template>
  <div class="product-list">
    <LikedCard
      v-for="item in productsLiked"
      :key="item.id"
      :dish="item.dish"
      :image="item.image"
      :price="item.price"
      :isLike="item.isLike"
      :id="item.id"
    />
  </div>
</template>

<script>
import LikedCard from "../components/LikedCard.vue";

export default {
  components: {
    LikedCard,
  },
  data() {
    return {
      productsLiked: [],
    };
  },
  created() {
    this.productsLiked = this.$store.getters.getProductList;
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
