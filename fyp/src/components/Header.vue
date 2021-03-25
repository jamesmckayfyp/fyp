<template>
  <div class="header">
      <div class="logo">Brand</div>
      <Navigation />
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