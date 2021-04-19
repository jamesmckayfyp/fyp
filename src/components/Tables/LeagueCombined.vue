<template>
  <div class="league-combined">
    <div class="league-combined--block">
      <div class="league-combined--block__head">{{ heading }}</div>
      <div class="league-combined--block__content">
        <LeaguePlayerStat :playerName="leagueCombined[0].player.name" :playerClub="leagueCombined[0].player.club" :playerImage="leagueCombined[0].player.image" :statNumber="leagueCombined[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueCombined[1].player.name" :playerClub="leagueCombined[1].player.club" :playerImage="leagueCombined[1].player.image" :statNumber="leagueCombined[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueCombined[2].player.name" :playerClub="leagueCombined[2].player.club" :playerImage="leagueCombined[2].player.image" :statNumber="leagueCombined[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueCombined",
  props: ["heading", 'leagueCombined'],
  components: {LeaguePlayerStat},
};
</script>