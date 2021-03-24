<template>
  <div id="app">
    <h2>FYP</h2>
    <div id="nav">
      <router-link to="/nav1">Nav 1</router-link>
      <router-link to="/nav2">Nav 2</router-link> 
      <router-link to="/nav3">Nav 3</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
  @import "./less/main.less";
</style>
