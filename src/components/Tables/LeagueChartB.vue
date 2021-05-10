<template>
    <div class="league-charts">
        <!-- <LeagueChartChange /> -->
        <div class="league-charts--block">
            <div class="league-charts--block__head">Table Points</div>
            <div class="league-charts--block__content">
                <div class="chart-container">
                    <TableBarChartB />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeagueChartChange from "./LeagueChartChange";

import TableBarChartB from "./TableBarChartB"

export default {
  name: 'LeagueChart',
  components : {
      LeagueChartChange,
      TableBarChartB,
    }
}
</script>
