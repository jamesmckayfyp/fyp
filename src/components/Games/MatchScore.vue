<template>
  <div class="match-score">
    <div class="match-score--content">
      <div class="match-score--content__home">
        <div class="match-score--content__home--img">
            <!-- <img class="placeholder" :src="require(homeImage)" :alt="homeTeam"> -->
        </div>
        <div class="match-score--content__home--info">
          <div class="match-score--content__home--info__team">{{homeTeam}}</div>
        </div>
      </div>
      <div class="match-score--content__score">
          <div class="match-score--content__score--scores">{{homeScore}} - {{awayScore}}</div>
          <div class="match-score--content__score--time">{{time}}</div>
      </div>
      <div class="match-score--content__away">
        <div class="match-score--content__away--info">
          <div class="match-score--content__away--info__team">{{awayTeam}}</div>
        </div>
        <div class="match-score--content__away--img">
            <!-- <img class="placeholder" :src="require(awayImage)" :alt="awayTeam"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchScore",
  props: ["scoreData"],
  data(){
    return {
      homeTeam: "",
      homeScore: "",
      homeImage: "",
      awayTeam: "",
      awayScore: "",
      awayImage: "",
      time: ""
    }
  }
};
</script>