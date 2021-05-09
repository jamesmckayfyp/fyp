<template>
  <div class="player-radar">
    <div class="player-radar--block">
      <div class="player-radar--block__head">Player Radar</div>
      <div class="player-radar--block__content">
        <!-- <RadarChart /> -->
        Radar Chart
      </div>
    </div>
  </div>
</template>

<script>
import RadarChart from "./RadarChart";

export default {
  name: "PlayerRadar",
  components: {RadarChart}
};
</script>