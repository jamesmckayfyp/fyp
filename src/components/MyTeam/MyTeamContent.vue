<template>
  <div class="container">
    <MyTeamHeader />
    <!-- <MyTeamGames /> -->
    <MyTeamInfo />
    <MyTeamStats />
    <MyTeamScorers heading="Club Top Scorers" :selectedScorers="scorers"/>
    <MyTeamAssists heading="Club Most Assists" :selectedAssists="assists"/>
    <MyTeamCombined heading="Club Top Combined" :selectedCombined="combined"/>
  </div>
</template>

<script>
import leagueC from "../../json/leagueC.json";

import MyTeamHeader from "./MyTeamHeader";
import MyTeamGames from "./MyTeamGames";
import MyTeamInfo from "./MyTeamInfo";
import MyTeamStats from "./MyTeamStats";
import MyTeamScorers from "./MyTeamScorers";
import MyTeamAssists from "./MyTeamAssists";
import MyTeamCombined from "./MyTeamCombined";

export default {
  name: "MyTeamContent",
  components: {
    MyTeamHeader,
    MyTeamGames,
    MyTeamInfo,
    MyTeamStats,
    MyTeamScorers,
    MyTeamAssists,
    MyTeamCombined,
  },
  data() {
    return {
      selected: "leagueC",
      name: leagueC.competition.name,
      table: leagueC.standings[0].table,
      scorers: leagueC.stats[0].table,
      assists: leagueC.stats[1].table,
      combined: leagueC.stats[2].table,
  }}
};
</script>