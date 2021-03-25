<template>
  <div class="container">
    <div class="flex-box">
      <Welcome /> 
      <LiveScores />
    </div>
  </div>
</template>

<script>
import Welcome from './Welcome'
import LiveScores from './LiveScores'

export default {
  name: 'Content',
  components: {
    Welcome,
    LiveScores,
  }
}
</script>