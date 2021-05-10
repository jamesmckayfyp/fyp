<template>
  <div class="container">
    <select
      v-model="selected"
      @change="changeLeague($event)"
      class="league-select"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        class="league-select__options"
      >
        {{ league.name }}
      </option>
    </select>
    <!-- {{leagueTable.rank}} -->

    <LeagueTable :selectedLeague="leagueTable"/>
    <LeagueChart />
    <LeagueScorers />
    <LeagueAssists />
    <LeagueCombined />
  </div>
</template>

<script>
import LeagueTable from "./LeagueTable";
import LeagueChart from "./LeagueChart";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";

export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueChart,
    LeagueScorers,
    LeagueAssists,
    LeagueCombined,
  },
  data() {
    return {
      data: [],
      league : [],
      leagueTable : [],
    };
  },
  beforeMount() {
    this.getStats();
  },
  methods: {
    async getStats() {
      const res = await fetch(
        "https://jamesmckayfyp.github.io/fyp/src/json/testing/ChampTableOne.json"
      );
      const data = await res.json();
      this.league = data.response[0].league;
      this.leagueTable = data.response[0].league.standings[0][0];
    },
  },
};
</script>