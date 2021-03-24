<template>
    <div class="header">
        <div class="logo">Brand</div>
        <Navigation />
        <div class="cta">CTA</div>
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