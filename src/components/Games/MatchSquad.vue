<template>
  <div class="match-squad">
    <div class="match-squad--block">
      <div class="match-squad--block__head">Line-Ups</div>
      <div class="match-squad--block__content">
        <div class="match-squad--block__content--tabs">
          <div
            class="match-squad--block__content--tabs__tab active"
            v-on:click="homeTeam()"
          >
            Home
          </div>
          <div
            class="match-squad--block__content--tabs__tab"
            v-on:click="awayTeam()"
          >
            Away
          </div>
        </div>
        <component :is="lineUp" :squadData="squadData"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";

export default {
  name: "MatchSquad",
  components: { HomeTeam, AwayTeam },
  props: ["homeTeam", "awayTeam", "squadData"],
  data() {
    return {
      squadData: [],
      lineUp: "HomeTeam",
    };
  },
  methods: {
    homeTeam() {
      this.lineUp = "HomeTeam";
    },
    awayTeam() {
      this.lineUp = "AwayTeam";
    },
  },
};
</script>