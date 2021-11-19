<template>
  <div class="product" v-if="liked">
    <img class="product__image" :src="require(`../assets/images/${image}`)" />
    <div class="product__desc">
      <h3 class="product__dish">{{ dish }}</h3>
      <div class="product__ingredient">ID: {{ id }}</div>
      <div class="product__price">Цена за единицу: {{ price }}</div>
      <input
        type="checkbox"
        v-model="liked"
        class="product__checkbox-like"
        @change="onChange"
      />
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
  data() {
    return {
      liked: this.isLike,
    };
  },
  methods: {
    onChange() {
      this.$store.dispatch("togleLike", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.product {
  padding: 20px;
  width: 250px;
  padding: 20px;
  border-radius: 15px;
  background-color: rgb(146, 152, 231);
}
.product__dish {
  padding: 0;
  margin: 0;
}
.product__image {
  width: 210px;
  border-radius: 10px;
  aspect-ratio: 1/1;
}
.product__desc {
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
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
