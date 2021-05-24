<template>
  <div class="games-previous">
    <MatchHeader
      league="Championship"
      type="Matchday 45"
    />

    <MatchBlockPrevious
       :scoreData="matchData.match.matchInfo"
    />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlockPrevious from "./MatchBlockPrevious";

export default {
  name: "GamesPrevious",
  components: { MatchHeader, MatchBlockPrevious },
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