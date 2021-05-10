<template>
    <div class="league-charts">
        <!-- <LeagueChartChange /> -->
        <div class="league-charts--block">
            <div class="league-charts--block__head">Table Points</div>
            <div class="league-charts--block__content">
                <div class="chart-container">
                    <TableBarChartA />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeagueChartChange from "./LeagueChartChange";

import TableBarChartA from "./TableBarChartA"

export default {
  name: 'LeagueChart',
  components : {
      LeagueChartChange,
      TableBarChartA
    }
}
</script>
