<template>
  <div class="api-testing">
    <div class="pl-table">
      <div class="divTable">
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">Position</div>
            <div class="divTableCell">Team</div>
            <div class="divTableCell">Games Played</div>
            <div class="divTableCell">W</div>
            <div class="divTableCell">D</div>
            <div class="divTableCell">L</div>
            <div class="divTableCell">Points</div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">{{ data.standings[0].table[0].position }}</div>
            <div class="divTableCell"><img :src="data.standings[0].table[0].team.crestUrl" :alt="data.standings[0].table[0].team.name"/> {{ data.standings[0].table[0].team.name }}</div>
            <div class="divTableCell">{{ data.standings[0].table[0].playedGames }}</div>
            <div class="divTableCell">{{ data.standings[0].table[0].won }}</div>
            <div class="divTableCell">{{ data.standings[0].table[0].draw }}</div>
            <div class="divTableCell">{{ data.standings[0].table[0].lost }}</div>
            <div class="divTableCell">{{ data.standings[0].table[0].points }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiTesting",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "https://api.football-data.org/v2/competitions/PL/standings",
        {
          headers: {
            "X-Auth-Token": "9b97f93053334beda3c0fa8152196ff9",
          },
        }
      );
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>