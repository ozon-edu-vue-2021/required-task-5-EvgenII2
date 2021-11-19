<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">MainPage</router-link>
      <router-link to="/list">ListPage</router-link>
      <router-link to="/basket">BasketPage</router-link>
      <router-link to="/liked">LikedPage</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const pictures = require.context("@/assets/images", true, /^.*\.webp$/);
    let images = pictures.keys().map((im) => im.slice(2));
    images = images.concat(images).concat(images);
    this.getProducts(images);
  },
  methods: {
    getProducts(payload) {
      this.$store.dispatch("setProducts", payload);
    },
    getRandomInteger() {
      return Math.round(Math.random() * 1000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
.nav {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  column-gap: 50px;
}
</style>
