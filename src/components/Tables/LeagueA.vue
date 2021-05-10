<template>
  <div id="league-A">

    <LeagueTable :leagueTable="leagueTable" />

    <LeagueChartA :leagueName="leagueName" />

    <LeagueScorers heading="Top Scorers" :leagueScorers="leagueScorers" />

    <LeagueAssists heading="Most Assists" :leagueAssists="leagueAssists" />

    <LeagueCombined
      heading="Most Combined G&A"
      :leagueCombined="leagueCombined"
    />
  </div>
</template>

<script>
import LeagueTable from "./LeagueTable";
import LeagueChartA from "./LeagueChartA";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";
import leagueA from "../../json/leagueA.json";

export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueChartA,
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