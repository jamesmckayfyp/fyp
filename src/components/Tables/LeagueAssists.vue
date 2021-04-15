<template>
  <div class="league-assists">
    <div class="league-assists--block">
      <div class="league-assists--block__head">{{ heading }}</div>
      <div class="league-assists--block__content">
        <LeaguePlayerStat playerName="Harry Kane" playerClub="Tottenham" playerImage="p78830.png" statNumber="13"/>
        <LeaguePlayerStat playerName="Bruno Fernandes" playerClub="Man United" playerImage="p141746.png" statNumber="11"/>
        <LeaguePlayerStat playerName="Kevin De Bruyne" playerClub="Man City" playerImage="p61366.png" statNumber="11"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueAssists",
  props: ["heading"],
  components: {LeaguePlayerStat},
};
</script>