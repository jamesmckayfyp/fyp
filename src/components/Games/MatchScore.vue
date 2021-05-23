<template>
  <div class="match-score">
    <div class="match-score--content">
      <div class="match-score--content__home">
        <div class="match-score--content__home--img">
            <img :src="(scoreData.teamHome.team.logo)" :alt="scoreData.teamHome.team.name">
        </div>
        <div class="match-score--content__home--info">
          <div class="match-score--content__home--info__team">{{scoreData.teamHome.team.name}}</div>
        </div>
      </div>
      <div class="match-score--content__score">
          <div class="match-score--content__score--scores">{{scoreData.teamHome.score}} - {{scoreData.teamAway.score}}</div>
          <div class="match-score--content__score--time">{{scoreData.time}}</div>
      </div>
      <div class="match-score--content__away">
        <div class="match-score--content__away--info">
          <div class="match-score--content__away--info__team">{{scoreData.teamAway.team.name}}</div>
        </div>
        <div class="match-score--content__away--img">
           <img :src="scoreData.teamAway.team.logo" :alt="scoreData.teamAway.team.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchScore",
  props: ["scoreData"]
};
</script>