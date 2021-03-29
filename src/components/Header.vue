<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">statpad</div>
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