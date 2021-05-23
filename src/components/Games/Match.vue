<template>
  <div class="container">
    <div class="data-buttons">
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match1.json')">Match 1</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match2.json')">Match 2</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match3.json')">Match 3</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match4.json')">Match 4</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match5.json')">Match 5</div>
    </div>

    <MatchScore :scoreData="matchData.match.matchInfo"/>
    <MatchInfo :infoData="matchData.match.matchInfo"/>
    <MatchStats :statData="matchData.match.matchStats"/>
    <MatchEvents :eventData="matchData.match.matchEvents"/>
    <MatchSquad :squadData="matchData.match.matchSquads"/>
  </div>
</template>

<script>
import MatchScore from "./MatchScore";
import MatchInfo from "./MatchInfo";
import MatchSquad from "./MatchSquad";
import MatchStats from "./MatchStats";
import MatchEvents from "./MatchEvents";
import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";

export default {
  name: "Match",
  components: {
    MatchScore,
    MatchInfo,
    MatchSquad,
    MatchStats,
    MatchEvents,
    HomeTeam,
    AwayTeam,
  },
  data() {
    return {
      url: "https://jamesmckayfyp.github.io/fyp/src/json/Match1.json",
      matchData: [],
    };
  },
  created: function () {
    this.fetchData(this.url);
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          this.matchData = res;
        });
    },
  },
};
</script>