<template>
  <div class="product-in-basket">
    <img
      class="product-in-basket__image"
      :src="require(`../assets/images/${image}`)"
    />
    <div class="product-in-basket__desc">
      <h3 class="product-in-basket__dish">{{ dish }}</h3>
      <div class="product-in-basket__ingredient">ID: {{ id }}</div>
      <div class="product-in-basket__price">Цена: {{ price }}</div>
      <div class="product-in-basket__number">
        Количество: {{ numberOfProd }}
      </div>
      <input
        class="product-in-basket__input"
        type="number"
        min="1"
        v-model="numberOfProd"
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
    numbers: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      numberOfProd: this.numbers,
    };
  },
  methods: {
    onChange() {
      this.$store.dispatch("changeNumber", {
        id: this.id,
        numbers: this.numberOfProd,
      });
    },
  },
};
</script>

<style scoped>
.product-in-basket {
  padding: 20px;
  width: 250px;
  padding: 20px;
  border-radius: 15px;
  background-color: rgb(219, 130, 200);
}
.product-in-basket__image {
  width: 210px;
  border-radius: 10px;
  aspect-ratio: 1/1;
}
.product-in-basket__dish {
  padding: 0;
  margin: 0;
}
.product-in-basket__desc {
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
}
.product-in-basket__input {
  text-align: center;
}
.product-in-basket__button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: red;
}
</style>
