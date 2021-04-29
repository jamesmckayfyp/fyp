<template>
  <div class="match-score">
    <div class="match-score--content">
      <div class="match-score--content__home">
        <div class="match-score--content__home--img">
            <div class="placeholder"></div>
        </div>
        <div class="match-score--content__home--info">
          <div class="match-score--content__home--info__team">{{homeTeam}}</div>
          <div class="match-score--content__home--info__scorers">{{homeScorers}}</div>
        </div>
      </div>
      <div class="match-score--content__score">
          <div class="match-score--content__score--scores">{{homeScore}} - {{awayScore}}</div>
          <div class="match-score--content__score--time">{{time}}</div>
      </div>
      <div class="match-score--content__away">
        <div class="match-score--content__away--info">
          <div class="match-score--content__away--info__team">{{awayTeam}}</div>
          <div class="match-score--content__away--info__scorers">{{awayScorers}}</div>
        </div>
        <div class="match-score--content__away--img">
            <div class="placeholder"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchScore",
  props: [
    "homeTeam",
    "awayTeam",
    "homeScore",
    "awayScore",
    "homeScorers",
    "awayScorers",
    "time",
  ],
};
</script>