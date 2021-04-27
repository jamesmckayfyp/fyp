<template>
  <div class="container">
    {{homeTeamMatch}}
    {{awayTeam}}
    {{homeScore}}
    {{awayScore}}
    {{time}}
  </div>
</template>

<script>

export default {
  name: "Match",
  props: ["homeTeamMatch", "awayTeam", "homeScore", "awayScore", "time"]
};
</script>