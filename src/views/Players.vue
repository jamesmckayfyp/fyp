<template>
  <div id="players">
    <PlayersContent />
  </div>
</template>

<script>
import PlayersContent from "../components/Players/PlayersContent"

export default {
  name: "Players",
  title: 'Players | statpad',
  components: {
    PlayersContent
  },
};
</script>
