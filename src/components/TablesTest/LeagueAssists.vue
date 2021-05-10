<template>
  <div class="league-assists">
    <div class="league-assists--block">
      <div class="league-assists--block__head">{{ heading }}</div>
      <div class="league-assists--block__content">
        <LeaguePlayerStat :playerName="selectedAssists[0].player.name" :playerClub="selectedAssists[0].player.club" :playerImage="selectedAssists[0].player.image" :statNumber="selectedAssists[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedAssists[1].player.name" :playerClub="selectedAssists[1].player.club" :playerImage="selectedAssists[1].player.image" :statNumber="selectedAssists[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedAssists[2].player.name" :playerClub="selectedAssists[2].player.club" :playerImage="selectedAssists[2].player.image" :statNumber="selectedAssists[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueAssists",
  props: ["heading", 'selectedAssists'],
  components: {LeaguePlayerStat},
};
</script>