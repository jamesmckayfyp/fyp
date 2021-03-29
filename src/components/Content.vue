<template>
  <div class="container">
    <div class="flex-box">
      <Welcome /> 
      <LiveScores />
    </div>
    <ApiTesting />
  </div>
</template>

<script>
import Welcome from './Welcome'
import LiveScores from './LiveScores'
import ApiTesting from './ApiTesting'

export default {
  name: 'Content',
  components: {
    Welcome,
    LiveScores,
    ApiTesting,
  }
}
</script>