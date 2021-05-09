<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import fetch from "./js/fetchAPI";

import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // fetch
  },
};
</script>

<style lang="less">
@import "./less/main/main.less";
</style>

