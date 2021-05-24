<template>
  <div class="games-upcoming">
    <MatchHeader
      league="Championship"
      type="Matchday 45"
    />

    <MatchBlockBefore
      :scoreData="matchData.match.matchInfo"
    />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlockBefore from "./MatchBlockBefore";

export default {
  name: "GamesUpcoming",
  components: { MatchHeader, MatchBlockBefore },
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