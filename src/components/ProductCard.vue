<template>
  <div class="product">
    <img class="product__image" :src="require(`../assets/images/${image}`)" />
    <div class="product__desc">
      <h3 class="product__dish">{{ dish }}</h3>
      <div class="product__ingredient">{{ ingredient }}</div>
      <div class="product__measurement">{{ measurement }}</div>
      <div class="product__price">{{ price }}</div>
    </div>
    <div class="product__button-wrapper">
      <input
        class="product__input"
        type="number"
        min="1"
        v-model="number"
        value="number"
      />
      <button class="product__button" @click="onClick">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
// import f from '../assets/images'
export default {
  props: {
    dish: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: "-",
    },
    measurement: {
      type: String,
      default: "0",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    onClick() {
      console.log(this.number);
      this.$store.dispatch("pushProduct", {
        dish: this.dish,
        image: this.image,
        price: this.price,
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