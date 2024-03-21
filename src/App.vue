<template>
  <HomePage />
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
body,
html {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
</style>
