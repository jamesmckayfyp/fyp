<template>
  <div class="league-table-block">
    <h2>{{leagueName}} <span>({{leagueCountry}})</span></h2>
    <div class="league-table">
      <div class="league-table--row head">
        <div class="league-table--row__column pos">#</div>
        <div class="league-table--row__column team">Team</div>
        <div class="league-table--row__column games">PL</div>
        <div class="league-table--row__column w">W</div>
        <div class="league-table--row__column d">D</div>
        <div class="league-table--row__column l">L</div>
        <div class="league-table--row__column gf">GF</div>
        <div class="league-table--row__column ga">GA</div>
        <div class="league-table--row__column gd">GD</div>
        <div class="league-table--row__column points">PTS</div>
      </div>
      <div class="league-table--row data">
        <div class="league-table--row__column pos"><div v-for="data in leagueTable" :key="data.position">{{data.position}}</div></div>
        <div class="league-table--row__column team"><div v-for="data in leagueTable" :key="data.name"><img :src="data.team.crestUrl" :alt="data.team.name"><img/>{{data.team.name}}</div></div>
        <div class="league-table--row__column games"><div v-for="data in leagueTable" :key="data.games">{{data.playedGames}}</div></div>
        <div class="league-table--row__column w"><div v-for="data in leagueTable" :key="data.won">{{data.won}}</div></div>
        <div class="league-table--row__column d"><div v-for="data in leagueTable" :key="data.draw">{{data.draw}}</div></div>
        <div class="league-table--row__column l"><div v-for="data in leagueTable" :key="data.lost">{{data.lost}}</div></div>
        <div class="league-table--row__column gf"><div v-for="data in leagueTable" :key="data.goalsFor">{{data.goalsFor}}</div></div>
        <div class="league-table--row__column ga"><div v-for="data in leagueTable" :key="data.goalsAgainst">{{data.goalsAgainst}}</div></div>
        <div class="league-table--row__column gd"><div v-for="data in leagueTable" :key="data.goalDifference">{{data.goalDifference}}</div></div>
        <div class="league-table--row__column points"><div v-for="data in leagueTable" :key="data.points">{{data.points}}</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeagueTable",
  data() {
    return {
      data: [],
      leagueTable : [],
      leagueName : [],
      leagueCountry : []
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
      this.leagueTable = data.standings[0].table;
      this.leagueName = data.competition.name;
      this.leagueCountry = data.competition.area.name;
    },
  },
};
</script>