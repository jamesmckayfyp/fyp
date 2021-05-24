<template>
  <router-link to="/Games/PreviousMatch" alt="View Match" class="match-block">
      <div class="match-block--content">
        <div class="match-block--content__team home">
          {{scoreData.teamHome.team.shortName}}
          <div class="match-block--content__team--img">
            <img :src="(scoreData.teamHome.team.logo)" :alt="scoreData.teamHome.team.name">
          </div>
        </div>
        <div class="match-block--content__info">
          <div class="match-block--content__info--score">
            {{scoreData.teamHome.score}} - {{scoreData.teamAway.score}}
          </div>
          <div class="match-block--content__info--time">{{scoreData.time}}</div>
        </div>
        <div class="match-block--content__team away">
          <div class="match-block--content__team--img">
            <img :src="(scoreData.teamAway.team.logo)" :alt="scoreData.teamAway.team.name">
          </div>
          {{scoreData.teamAway.team.shortName}}
        </div>
      </div>
      <div class="match-block--cta">View Stats</div>
  </router-link>
</template>

<script>
import MatchPrevious from "./MatchPrevious";

export default {
  name: "MatchBlock",
  components: { MatchPrevious },
  props: ["scoreData"],
};
</script>