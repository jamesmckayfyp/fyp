<template>
  <div class="container">
    <LeagueFilter leagueName="Premier League" leagueCountry="England" />
    <LeagueTableChange btnNameOne="Overall" btnNameTwo="Home" btnNameThree="Away" />
    <LeagueTable />
    <LeagueChartChange btnNameOne="Line" btnNameTwo="Bar" btnNameThree="Pie" />
    <LeagueChart leagueName="Premier League Charts" />
    <LeagueScorers heading="Top Scorers" />
    <LeagueAssists heading="Most Assists" />
    <LeagueCombined heading="Most Combined GA" />
  </div>
</template>

<script>
import LeagueTable from "./LeagueTable";
import LeagueFilter from "./LeagueFilter";
import LeagueChart from "./LeagueChart";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";
import LeagueTableChange from "./LeagueTableChange";
import LeagueChartChange from "./LeagueChartChange";

export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueFilter,
    LeagueChart,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined,
    LeagueTableChange,
    LeagueChartChange,
  }
};
</script>