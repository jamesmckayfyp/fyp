<template>
  <div class="container">
    <PlayerHeader />
    <PlayerInfo />
    <PlayerRadar />
    <PlayerStats />
  </div>
</template>

<script>
import PlayerHeader from "./PlayerHeader";
import PlayerInfo from "./PlayerInfo";
import PlayerRadar from "./PlayerRadar";
import PlayerStats from "./PlayerStats";

export default {
  name: "PlayersContent",
  components: {
    PlayerHeader,
    PlayerInfo,
    PlayerRadar,
    PlayerStats
  }
};
</script>