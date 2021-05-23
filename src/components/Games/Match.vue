<template>
  <div class="container">
    <MatchScore />
    <MatchInfo />
    <MatchStats />
    <MatchEvents />
    <MatchSquad />
  </div>
</template>

<script>
import MatchScore from "./MatchScore";
import MatchInfo from "./MatchInfo";
import MatchSquad from "./MatchSquad";
import MatchStats from "./MatchStats";
import MatchEvents from "./MatchEvents";

export default {
  name: "Match",
  components: { MatchScore, MatchInfo, MatchSquad, MatchStats, MatchEvents },
};
</script>