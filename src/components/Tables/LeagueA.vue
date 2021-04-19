<template>
  <div id="league-A">
    <LeagueTableChange />

    <LeagueTable :leagueTable="leagueTable" />

    <LeagueChartChange />

    <LeagueChart :leagueName="leagueName" />

    <LeagueScorers heading="Top Scorers" :leagueScorers="leagueScorers" />

    <LeagueAssists heading="Most Assists" :leagueAssists="leagueAssists" />

    <LeagueCombined heading="Most Goals & Assists" :leagueCombined="leagueCombined" />
  </div>
</template>

<script>
import LeagueTableChange from "./LeagueTableChange";
import LeagueChartChange from "./LeagueChartChange";
import LeagueTable from "./LeagueTable";
import LeagueChart from "./LeagueChart";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";

import leagueA from "../../json/leagueA.json";

export default {
  name: "TablesContent",
  components: {
    LeagueTableChange,
    LeagueChartChange,
    LeagueTable,
    LeagueChart,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined,
  },
  data() {
    return {
      leagueName: leagueA.competition.name,
      leagueCountry: leagueA.competition.country,
      leagueTable: leagueA.standings[0].table,
      leagueTableHome: leagueA.standings[1].table,
      leagueTableAway: leagueA.standings[2].table,
      leagueScorers: leagueA.stats[0].table,
      leagueAssists: leagueA.stats[1].table,
      leagueCombined: leagueA.stats[2].table,
    };
  },
};
</script>