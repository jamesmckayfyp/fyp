<template>
  <div class="league-scorers">
    <div class="league-scorers--block">
      <div class="league-scorers--block__head">{{ heading }}</div>
      <div class="league-scorers--block__content">
        <LeaguePlayerStat :playerName="leagueScorers[0].player.name" :playerClub="leagueScorers[0].player.club" :playerImage="leagueScorers[0].player.image" :statNumber="leagueScorers[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueScorers[1].player.name" :playerClub="leagueScorers[1].player.club" :playerImage="leagueScorers[1].player.image" :statNumber="leagueScorers[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueScorers[2].player.name" :playerClub="leagueScorers[2].player.club" :playerImage="leagueScorers[2].player.image" :statNumber="leagueScorers[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueScorers",
  props: ["heading", 'leagueScorers'],
  components: {LeaguePlayerStat},
};
</script>