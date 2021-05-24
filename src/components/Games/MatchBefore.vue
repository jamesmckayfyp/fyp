<template>
  <div class="container">
    <MatchScoreBefore :scoreData="matchData.match.matchInfo"/>
    <MatchInfo :infoData="matchData.match.matchInfo"/>
    <MatchSquad :squadData="matchData.match.matchSquads"/>
  </div>
</template>

<script>
import MatchScoreBefore from "./MatchScoreBefore";
import MatchInfo from "./MatchInfo";
import MatchSquad from "./MatchSquad";
import MatchStats from "./MatchStats";
import MatchEvents from "./MatchEvents";
import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";

export default {
  name: "Match",
  components: {
    MatchScoreBefore,
    MatchInfo,
    MatchSquad,
    MatchStats,
    MatchEvents,
    HomeTeam,
    AwayTeam,
  },
  data() {
    return {
      url: "https://jamesmckayfyp.github.io/fyp/src/json/Match0.json",
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