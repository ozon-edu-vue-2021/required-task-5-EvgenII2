<template>
  <div class="product">
    <img class="product__image" :src="require(`../assets/images/${image}`)" />
    <div class="product__desc">
      <h3 class="product__dish">{{ dish }}</h3>
      <div class="product__ingredient">ID: {{ id }}</div>
      <div class="product__ingredient">Ингридиенты: {{ ingredient }}</div>
      <div class="product__measurement">Измерение: {{ measurement }}</div>
      <div class="product__price">Цена за единицу: {{ price }}</div>
      <input
        type="checkbox"
        v-model="likedData"
        class="product__checkbox-like"
        @change="onChange"
      />
    </div>
    <div class="product__button-wrapper">
      <p>Количество</p>
      <input class="product__input" type="number" min="1" v-model="numbers" />
      <button class="product__button" @click="onClick">
        Добавить в корзину
      </button>
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
    isLike: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.isLike);
  },
  data() {
    return {
      numbers: 1,
      likedData: this.isLike,
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("pushProduct", {
        dish: this.dish,
        image: this.image,
        price: this.price,
        isLike: this.likedData,
        numbers: Number(this.numbers),
        id: this.id,
      });
    },
    onChange() {
      console.log(this.likedData);
      this.$store.dispatch("togleLike", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.product {
  width: 350px;
  background-color: rgb(164, 165, 167);
  padding: 20px;
  border-radius: 15px;
}
.product__image {
  border-radius: 10px;
  width: 310px;
  aspect-ratio: 1/1;
}
.product__desc {
  margin-bottom: 10px;
}
.product__button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}
.product__input {
  width: 15%;
  padding: 5px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 5px;
}
.product__button {
  padding: 8px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}
.product__button:hover {
  opacity: 0.7;
}
.product__checkbox-like {
  width: 16px;
  height: 16px;
  background-color: white;
  border: 2px solid #fff;
  border-radius: 50%;
  vertical-align: middle;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.09);
}
.product__checkbox-like:checked {
  background-color: #2be080;
}
</style>
