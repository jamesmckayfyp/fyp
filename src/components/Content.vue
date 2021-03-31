<template>
  <div class="container">
    <div class="flex-box">
      <Welcome />
      <LiveScores /> 
      <!-- <ThemeChange /> -->
    </div>
    <!-- <div class="flex-box">
      <ApiTesting />
      <ChartTesting />
    </div> -->
  </div>
</template>

<script>
import Welcome from './Welcome'
import LiveScores from './LiveScores'
import ApiTesting from './ApiTesting'
import ChartTesting from './ChartTesting'
import ThemeChange from './ThemeChange'

export default {
  name: 'Content',
  components: {
    Welcome,
    LiveScores,
    ApiTesting,
    ChartTesting,
    ThemeChange,
  }
}
</script>