<template>
  <div class="container">
    <MatchScore :scoreData="matchData.match.matchInfo"/>
    <MatchInfo :infoData="matchData.match.matchInfo"/>
    <MatchEvents :eventData="matchData.match.matchEvents"/>
    <MatchStats :statData="matchData.match.matchStats"/>
    <MatchSquad :squadData="matchData.match.matchSquads"/>

     <div class="data-buttons">
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match1.json')">Before the match</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match2.json')">22'(Norwich Goal)</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match3.json')">HT (Norwich Goal & Half Time)</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match4.json')">66'(Brentford Equalise)</div>
      <div class="data-buttons--btn" @click="fetchData('https://jamesmckayfyp.github.io/fyp/src/json/Match5.json')">FT (Brentford Goal & Win)</div>
    </div>
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