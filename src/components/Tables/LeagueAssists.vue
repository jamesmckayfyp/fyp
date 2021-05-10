<template>
  <div class="league-assists">
    <div class="league-assists--block">
      <div class="league-assists--block__head">{{ heading }}</div>
      <div class="league-assists--block__content">
        <LeaguePlayerStat :playerName="leagueAssists[0].player.name" :playerClub="leagueAssists[0].player.club" :playerImage="leagueAssists[0].player.image" :statNumber="leagueAssists[0].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueAssists[1].player.name" :playerClub="leagueAssists[1].player.club" :playerImage="leagueAssists[1].player.image" :statNumber="leagueAssists[1].player.statNumber"/>
        <LeaguePlayerStat :playerName="leagueAssists[2].player.name" :playerClub="leagueAssists[2].player.club" :playerImage="leagueAssists[2].player.image" :statNumber="leagueAssists[2].player.statNumber"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueAssists",
  props: ["heading", 'leagueAssists'],
  components: {LeaguePlayerStat},
};
</script>