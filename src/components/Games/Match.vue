<template>
  <div class="container">
    <MatchScore
      homeTeam="Man United"
      awayTeam="Roma"
      homeScore="3"
      awayScore="2"
      homeScorers="Player (30', 42'), Player (72')"
      awayScorers="Player (53', 62')"
      time="88'"
    />
    <MatchInfo competition="Europa League" type="Semi-Finals" />
    <MatchSquad homeTeam="Man United" awayTeam="Roma" />
    <!-- <MatchStats /> -->
    <!-- <MatchOthers /> -->
  </div>
</template>

<script>
import MatchScore from "./MatchScore";
import MatchInfo from "./MatchInfo";
import MatchSquad from "./MatchSquad";
import MatchStats from "./MatchStats";
import MatchOthers from "./MatchOthers";

export default {
  name: "Match",
  components: { MatchScore, MatchInfo, MatchSquad, MatchStats, MatchOthers },
};
</script>