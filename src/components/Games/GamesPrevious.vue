<template>
  <div class="games-previous">
    <MatchHeader />
    <MatchBlock />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlock from "./MatchBlock";

export default {
  name: "GamesPrevious",
  components: { MatchHeader, MatchBlock },
};
</script>