<template>
    <div class="container">
        <Example />
        <Welcome />
    </div>
</template>

<script>
import Example from './Example'
import Welcome from './Welcome'

export default {
  name: 'Content',
  components: {
    Example,
    Welcome,
  }
}
</script>