<template>
  <div class="product">
    <img class="product__image" :src="require(`../assets/images/${image}`)" />
    <div class="product__desc">
      <h3 class="product__dish">{{ dish }}</h3>
      <div class="product__ingredient">ID: {{ id }}</div>
      <div class="product__ingredient">Ингридиенты: {{ ingredient }}</div>
      <div class="product__measurement">Измерение: {{ measurement }}</div>
      <div class="product__price">Цена за единицу: {{ price }}</div>
    </div>
    <div class="product__button-wrapper">
      <p>Количество</p>
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
      default: "-",
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
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("pushProduct", {
        dish: this.dish,
        image: this.image,
        price: this.price,
        number: Number(this.number),
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.product {
  width: 350px;
  background-color: azure;
}
.product__image {
  border-radius: 10px;
  width: 350px;
  aspect-ratio: 1/1;
}
.product__desc {
  margin-bottom: 10px;
  padding-left: 20px;
}
.product__button-wrapper {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}
.product__input {
  width: 10%;
}
</style>
