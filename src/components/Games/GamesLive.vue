<template>
  <div class="games-live">
    <MatchHeader league="Champions League" type="Quarter Finals"/>
    <MatchBlock homeTeam="MUFC" awayTeam="PSG" homeScore="3" awayScore="1" time="FT" />

    <MatchHeader league="Super League" type="Matchday 9"/>
    <MatchBlock homeTeam="MCFC" awayTeam="THU" homeScore="1" awayScore="0" time="HT" />
    <MatchBlock homeTeam="LIV" awayTeam="CHE" homeScore="3" awayScore="4" time="90'" />
    <MatchBlock homeTeam="ARS" awayTeam="BAR" homeScore="1" awayScore="6" time="78'" />

    <MatchHeader league="Premier League" type="Matchday 32"/>
    <MatchBlock homeTeam="LEI" awayTeam="WHU" homeScore="0" awayScore="0" time="HT" />
    <MatchBlock homeTeam="WOL" awayTeam="EVE" homeScore="2" awayScore="2" time="26'" />

    <!-- <MatchHeader
      v-for="competition in competitions"
      v-bind:key="competition.id"
      :league="competition.league"
      :type="competition.type"
    />

    <MatchBlock
      v-for="competition in competitions"
      v-bind:key="competition.id"
      :homeTeam="competition.match.homeTeam"
      :awayTeam="competition.match.awayTeam"
      :homeScore="competition.match.homeScore"
      :awayScore="competition.match.awayScore"
      :time="competition.match.time"
    /> -->

  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlock from "./MatchBlock";

export default {
  name: "GamesLive",
  components: { MatchHeader, MatchBlock },
  data() {
    return {
      competitions: [
        {
          id: 1,
          league: "Champions League",
          type: "Quarter Finals",
          match: {
            homeTeam: "MUFC",
            awayTeam: "PSG",
            homeScore: 3,
            awayScore: 1,
            time: "78'"
          }
        },
      ],
    };
  },
};
</script>