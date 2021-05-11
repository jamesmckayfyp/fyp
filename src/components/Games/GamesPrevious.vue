<template>
  <div class="games-previous">
    <MatchHeader
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
    />
  </div>
</template>

<script>
import MatchHeader from "./MatchHeader";
import MatchBlock from "./MatchBlock";

export default {
  name: "GamesPrevious",
  components: { MatchHeader, MatchBlock },
  data() {
    return {
      competitions: [
        {
          id: 1,
          league: "Premier League",
          type: "Matchday 29",
          match: {
            homeTeam: "LIV",
            awayTeam: "CHE",
            homeScore: 3,
            awayScore: 4,
            time: "FT"
          }
        },
      ],
    };
  }
};
</script>