<template>
  <div id="league-B">

    <LeagueTable :leagueTable="leagueTable" />

    <LeagueChartB :leagueName="leagueName" />

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
import LeagueChartB from "./LeagueChartB";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";
import leagueB from "../../json/leagueB.json";
export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueChartB,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined,
  },
  data() {
    return {
      leagueName: leagueB.competition.name,
      leagueCountry: leagueB.competition.country,
      leagueTable: leagueB.standings[0].table,
      leagueTableHome: leagueB.standings[1].table,
      leagueTableAway: leagueB.standings[2].table,
      leagueScorers: leagueB.stats[0].table,
      leagueAssists: leagueB.stats[1].table,
      leagueCombined: leagueB.stats[2].table,
    };
  },
};
</script>