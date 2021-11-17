<template>
  <div class="product">
    <img class="product__image" :src="require(`../assets/images/${image}`)" />
    <div class="product__desc">
      <h3 class="product__dish">{{ dish }}</h3>
      <div class="product__ingredient">ID: {{ id }}</div>
      <div class="product__price">Цена: {{ price }}</div>
      <div class="product__number">Количесвто: {{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch("pushProduct", {
        dish: this.dish,
        image: this.image,
        price: this.price,
        id: this.id,
        number: this.number,
      });
    },
  },
};
</script>

<style scoped>
.product__image {
  width: 350px;
  aspect-ratio: 1/1;
}
.product__desc {
  margin-bottom: 10px;
}
.product__button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>