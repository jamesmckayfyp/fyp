<template>
  <div class="my-team-games">

          <MatchBlock
            v-for="competition in competitions"
            v-bind:key="competition.id"
            :homeTeam="competition.match.homeTeam"
            :awayTeam="competition.match.awayTeam"
            :homeScore="competition.match.homeScore"
            :awayScore="competition.match.awayScore"
            :time="competition.match.time"
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
import MatchBlock from "../Games/MatchBlock";

export default {
  name: "MyTeamGames",
  components: { MatchBlock },
  data() {
    return {
      competitions: [
        {
          id: 1,
          league: "Premier League",
          type: "Matchday 30",
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