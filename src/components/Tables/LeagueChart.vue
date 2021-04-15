<template>
    <div class="league-charts">
        <div class="league-charts--block">
            <div class="league-charts--block__head">{{leagueName}}</div>
            <div class="league-charts--block__content">
                <div class="chart-container">
                    <LineChart />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from "./LineChart"

export default {
  name: 'LeagueChart',
  props : ["leagueName"],
  components : {
      LineChart
    }

}
</script>

<style scoped>
/* .chart-container {
    width: 150px;
} */
</style>