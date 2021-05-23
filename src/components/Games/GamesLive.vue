<template>
  <div class="games-live">
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
  name: "GamesLive",
  components: { MatchHeader, MatchBlock },
  data() {
    return {
      competitions: [
        {
          id: 1,
          league: "Championship",
          type: "Matchday 45",
          match: {
            homeTeam: "BRI",
            awayTeam: "NEW",
            homeScore: 3,
            awayScore: 1,
            time: "78'"
          }
        },
      ],
    };
  }
};
</script>