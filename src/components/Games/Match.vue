<template>
  <div class="container">
    <MatchScore
      homeTeam="Brighton"
      awayTeam="Newcastle"
      homeScore="3"
      awayScore="1"
      homeScorers="Trossard (30', 42'), Bissouma (72')"
      awayScorers="Joelinton (53')"
      time="78'"
    />
    <MatchInfo competition="Premier League" type="Matchday 32" />
    <MatchStats homeTeam="Brighton" awayTeam="Newcastle" />
    <MatchSquad homeTeam="Brighton" awayTeam="Newcastle" />
    
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