<template>
  <div class="match-stats">
    <div class="match-stats--block">
      <div class="match-stats--block__head">Stats</div>
      <div class="match-stats--block__content">
        <Stats homeTeam="Man United" awayTeam="Roma"/>
      </div>
    </div>
  </div>
</template>

<script>
import Stats from "./Stats";

export default {
  name: "MatchStats",
  components: {Stats}
};
</script>