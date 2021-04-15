<template>
  <div class="league-scorers">
    <div class="league-scorers--block">
      <div class="league-scorers--block__head">{{ heading }}</div>
      <div class="league-scorers--block__content">
        <LeaguePlayerStat playerName="Harry Kane" playerClub="Tottenham" playerImage="p78830.png" statNumber="19"/>
        <LeaguePlayerStat playerName="Mohamed Salah" playerClub="Liverpool" playerImage="p118748.png" statNumber="19"/>
        <LeaguePlayerStat playerName="Bruno Fernandes" playerClub="Man United" playerImage="p141746.png" statNumber="16"/>
      </div>
    </div>
  </div>
</template>

<script>
import LeaguePlayerStat from './LeaguePlayerStat';

export default {
  name: "LeagueScorers",
  props: ["heading"],
  components: {LeaguePlayerStat},
};
</script>