<template>
  <div class="games-upcoming">
    <MatchHeader />
    <MatchBlock />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlock from "./MatchBlock";

export default {
  name: "GamesUpcoming",
  components: { MatchHeader, MatchBlock },
};
</script>