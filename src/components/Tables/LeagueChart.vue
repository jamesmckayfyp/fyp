<template>
    <div class="league-charts">
        <LeagueChartChange />
        <div class="league-charts--block">
            <div class="league-charts--block__head">{{leagueName}} Points</div>
            <div class="league-charts--block__content">
                <div class="chart-container">
                    <!-- <LineChartA /> -->
                    <!-- <LineChartB /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeagueChartChange from "./LeagueTableChange";

import LineChartA from "./LineChartA"
import LineChartB from "./LineChartB"

export default {
  name: 'LeagueChart',
  props : ["leagueName"],
  components : {
      LeagueChartChange,
      LineChartA,
      LineChartB
    }
}
</script>

<style scoped>
/* .chart-container {
    width: 150px;
} */
</style>