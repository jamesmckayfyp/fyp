<template>
  <router-link to="/Games/Match" alt="View Match" class="match-block">
      <div class="match-block--content">
        <div class="match-block--content__team home">
          {{ homeTeam }}
          <div class="match-block--content__team--img"></div>
        </div>
        <div class="match-block--content__info">
          <div class="match-block--content__info--score">
            {{ homeScore }} - {{ awayScore }}
          </div>
          <div class="match-block--content__info--time">{{ time }}</div>
        </div>
        <div class="match-block--content__team away">
          <div class="match-block--content__team--img"></div>
          {{ awayTeam }}
        </div>
      </div>
      <div class="match-block--cta">View Stats</div>
  </router-link>
</template>

<script>
import Match from "./Match";

export default {
  name: "MatchBlock",
  components: { Match },
  props: ["homeTeam", "awayTeam", "homeScore", "awayScore", "time"],
};
</script>