<template>
  <div class="container">
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
};
</script>