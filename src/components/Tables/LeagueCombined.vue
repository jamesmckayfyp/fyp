<template>
  <div class="league-combined">
    <div class="league-combined--block">
      <div class="league-combined--block__head">{{ heading }}</div>
      <div class="league-combined--block__content">
        <LeaguePlayerStat :playerName="selectedCombined[0].player.name" :playerClub="selectedCombined[0].player.club" :playerImage="selectedCombined[0].player.image" :statNumber="selectedCombined[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedCombined[1].player.name" :playerClub="selectedCombined[1].player.club" :playerImage="selectedCombined[1].player.image" :statNumber="selectedCombined[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedCombined[2].player.name" :playerClub="selectedCombined[2].player.club" :playerImage="selectedCombined[2].player.image" :statNumber="selectedCombined[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueCombined",
  props: ["heading", 'selectedCombined'],
  components: {LeaguePlayerStat},
};
</script>