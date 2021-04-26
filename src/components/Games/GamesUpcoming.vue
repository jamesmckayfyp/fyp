<template>
  <div class="games-upcoming">
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
  name: "GamesUpcoming",
  components: { MatchHeader, MatchBlock },
  data() {
    return {
      competitions: [
        {
          id: 1,
          league: "Europa League",
          type: "Semi Finals",
          match: {
            homeTeam: "AJX",
            awayTeam: "POR",
            time: "20:00"
          }
        },
      ],
    };
  },
};
</script>