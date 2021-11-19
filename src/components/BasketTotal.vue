<template>
  <div class="total">
    <h3 class="total__products">Количество товаров: {{ numbers }} шт.</h3>
    <div class="total__price">Общая цена: {{ price }} руб.</div>
    <button class="total__button" @click="onClickOrder">Оформить заказ</button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      default: 1,
    },
    numbers: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onClickOrder() {
      alert(
        `Куплено ${this.numbers} тов. на общую стоимость ${this.price} руб.`
      );
    },
  },
};
</script>

<style scoped>
.total {
  margin: 20px auto;
  padding: 20px;
  background-color: thistle;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  row-gap: 20px;
}
.total__products {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.total__price {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.total__button {
  margin: 0;
  width: 20%;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  background: tan;
  border: 1px solid black;
}
</style>
