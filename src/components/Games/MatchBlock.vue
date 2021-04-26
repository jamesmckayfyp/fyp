<template>
  <div class="match-block">
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
  </div>
</template>

<script>
export default {
  name: "MatchBlock",
  props: ["homeTeam", "awayTeam", "homeScore", "awayScore", "time"]
};
</script>