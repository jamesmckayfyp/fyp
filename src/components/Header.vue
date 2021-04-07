<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">statpad</router-link>
      </div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    Navigation,
  }
}
</script>