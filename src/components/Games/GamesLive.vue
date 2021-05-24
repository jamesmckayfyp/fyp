<template>
  <div class="games-live">
    <MatchHeader
      league="Championship"
      type="Matchday 45"
    />

    <MatchBlock
      :scoreData="matchData.match.matchInfo"
    />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlock from "./MatchBlock";

export default {
  name: "GamesLive",
  components: { MatchHeader, MatchBlock },
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