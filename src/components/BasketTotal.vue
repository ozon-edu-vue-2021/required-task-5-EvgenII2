<template>
  <div class="total">
    <h3 class="total__products">{{ number }}</h3>
    <div class="total__price">{{ price }}</div>
    <button class="total__button" @click="onClickOrder">Оформить заказ</button>
    <button class="total__button" @click="onClick">Очистить корзину</button>
  </div>
</template>

<script>
// import f from '../assets/images'
export default {
  props: {
    price: {
      type: Number,
      default: 1,
    },
    number: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onClick() {
      console.log(this.number);
    },
    onClickOrder() {
      alert(
        `Куплено ${this.number} товаров на стоимость ${this.number} рублей`
      );
    },
  },
};
</script>

<style scoped>
.total {
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
}
</style>