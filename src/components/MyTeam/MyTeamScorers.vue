<template>
  <div class="league-scorers">
    <div class="league-scorers--block">
      <div class="league-scorers--block__head">{{ heading }}</div>
      <div class="league-scorers--block__content">
        <LeaguePlayerStat :playerName="selectedScorers[0].player.name" :playerClub="selectedScorers[0].player.club" :playerImage="selectedScorers[0].player.image" :statNumber="selectedScorers[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedScorers[1].player.name" :playerClub="selectedScorers[1].player.club" :playerImage="selectedScorers[1].player.image" :statNumber="selectedScorers[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="selectedScorers[2].player.name" :playerClub="selectedScorers[2].player.club" :playerImage="selectedScorers[2].player.image" :statNumber="selectedScorers[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueScorers",
  props: ["heading", 'selectedScorers'],
  components: {LeaguePlayerStat},
};
</script>