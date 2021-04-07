<template>
  <div id="games">
    <GamesContent />
  </div>
</template>

<script>
import GamesContent from "../components/Games/GamesContent";

export default {
  name: "Games",
  title: 'Games | statpad',
  components: {
    GamesContent
  },
};
</script>
