<template>
  <div class="container">
    <MatchScore :scoreData="matchData.match.matchInfo"/>
    <MatchInfo :infoData="matchData.match.matchInfo"/>
    <MatchEvents :eventData="matchData.match.matchEvents"/>
    <MatchStats :statData="matchData.match.matchStats"/>
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
      url: "https://jamesmckayfyp.github.io/fyp/src/json/PreviousMatch.json",
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