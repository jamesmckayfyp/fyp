<template>
  <div class="container">
    <!-- <Lineup /> -->
    Match Info
  </div>
</template>

<script>
import Lineup from "./Lineup";

export default {
  name: "Match",
  components: { Lineup },
  props: ["homeTeamMatch", "awayTeam", "homeScore", "awayScore", "time"]
};
</script>