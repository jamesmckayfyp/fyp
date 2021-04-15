<template>
  <div class="league-combined">
    <div class="league-combined--block">
      <div class="league-combined--block__head">{{ heading }}</div>
      <div class="league-combined--block__content">
        <LeaguePlayerStat playerName="Harry Kane" playerClub="Tottenham" playerImage="p78830.png" statNumber="32"/>
        <LeaguePlayerStat playerName="Bruno Fernandes" playerClub="Man United" playerImage="p141746.png" statNumber="27"/>
        <LeaguePlayerStat playerName="Heung-min Son" playerClub="Tottenham" playerImage="p85971.png" statNumber="23"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueCombined",
  props: ["heading"],
  components: {LeaguePlayerStat},
};
</script>