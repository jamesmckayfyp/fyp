<template>
  <div class="league-table">
      <ul id="position ">
        <li>Position</li>
        <li v-for="data in plTable" :key="data.position">{{data.position}}</li>
      </ul>
      <ul id="team">
        <li>Team</li>
        <li v-for="data in plTable" :key="data.name">{{data.team.name}}</li>
      </ul>
      <ul id="games">
        <li>Games Played</li>
        <li v-for="data in plTable" :key="data.games">{{data.playedGames}}</li>
      </ul>
      <ul id="wins">
        <li>W</li>
        <li v-for="data in plTable" :key="data.won">{{data.won}}</li>
      </ul>
      <ul id="draws">
        <li>D</li>
        <li v-for="data in plTable" :key="data.draw">{{data.draw}}</li>
      </ul>
      <ul id="losses">
        <li>L</li>
        <li v-for="data in plTable" :key="data.lost">{{data.lost}}</li>
      </ul>
      <ul id="points">
        <li>Points</li>
        <li v-for="data in plTable" :key="data.points">{{data.points}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "LeagueTable",
  data() {
    return {
      data: [],
      plTable : []
    };
  },
  beforeMount() {
    this.getStats();
  },
  methods: {
    async getStats() {
      const res = await fetch(
        "https://api.football-data.org/v2/competitions/PL/standings",
        {
          headers: {
            "X-Auth-Token": "9b97f93053334beda3c0fa8152196ff9",
          },
        }
      );
      const data = await res.json();
      this.plTable = data.standings[0].table;
    },
  },
};
</script>