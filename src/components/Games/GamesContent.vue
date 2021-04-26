<template>
  <div class="container">
    <div class="game-select">
      <div class="game-select--tab left" v-on:click="previousGames()">
        <span class="icon icon-left-arrow"></span>Previous
      </div>
      <div class="game-select--tab active" v-on:click="liveGames()">
        Live<span class="icon icon-live"></span>
      </div>
      <div class="game-select--tab right" v-on:click="upcomingGames()">
        Upcoming<span class="icon icon-right-arrow"></span>
      </div>
    </div>

    <component :is="component" />
  </div>
</template>

<script>
import GamesLive from "./GamesLive";
import GamesPrevious from "./GamesPrevious";
import GamesUpcoming from "./GamesUpcoming";

export default {
  name: "GamesContent",
  components: { GamesLive, GamesPrevious, GamesUpcoming },
  data() {
    return {
      component: "GamesLive",
    };
  },
  methods: {
    previousGames() {
      this.component = "GamesPrevious";
    },
    liveGames() {
      this.component = "GamesLive";
    },
    upcomingGames() {
      this.component = "GamesUpcoming";
    },
  },
};
</script>