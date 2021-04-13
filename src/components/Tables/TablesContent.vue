<template>
  <div class="container">
      <LeagueFilter leagueName="Premier League" leagueCountry="England"/> 
      <!-- <LeagueTables /> -->
      <LeagueTable />
      <!-- <LeagueCharts leagueName="Premier League" /> -->
      <!-- <LeagueScorers />  -->
      <!-- <LeagueAssists /> -->
      <!-- <LeagueCombined /> -->
  </div>
</template>

<script>
import LeagueTable from "./LeagueTable";
import LeagueFilter from "./LeagueFilter";
import LeagueCharts from "./LeagueCharts";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";
import LeagueTest from "./LeagueTest";

export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueFilter,
    LeagueCharts,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined,
    LeagueTest
  },
};
</script>