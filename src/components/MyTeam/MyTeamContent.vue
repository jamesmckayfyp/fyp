<template>
  <div class="container">
    <MyTeamHeader />
    <MyTeamGames />
    <MyTeamInfo />
    <MyTeamStats />
    <MyTeamScorers heading="Club Top Scorers" :selectedScorers="scorers"/>
    <MyTeamAssists heading="Club Most Assists" :selectedAssists="assists"/>
    <MyTeamCombined heading="Club Top Combined" :selectedCombined="combined"/>
  </div>
</template>

<script>
import leagueA from "../../json/leagueA.json";

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
      selected: "leagueA",
      name: leagueA.competition.name,
      table: leagueA.standings[0].table,
      scorers: leagueA.stats[0].table,
      assists: leagueA.stats[1].table,
      combined: leagueA.stats[2].table,
  }}
};
</script>