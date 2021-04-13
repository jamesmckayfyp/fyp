<template>
  <div class="container">
      <LeagueFilter /> 
      <LeagueTables />
      <LeagueCharts />
      <LeagueScorers /> 
      <LeagueAssists />
      <LeagueCombined />
  </div>
</template>

<script>
import LeagueTables from "./LeagueTables";
import LeagueFilter from "./LeagueFilter";
import LeagueCharts from "./LeagueCharts";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";

export default {
  name: "TablesContent",
  components: {
    LeagueTables,
    LeagueFilter,
    LeagueCharts,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined
  },
};
</script>