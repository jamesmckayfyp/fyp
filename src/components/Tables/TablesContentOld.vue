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
        {{ option.name }}
      </option>
    </select>

    <LeagueTable :selectedTable="table"/>

    <LeagueChart />
    <LeagueScorers
      heading="Top Scorers"
      :selectedScorers="scorers"
    />
    <LeagueAssists
      heading="Most Assists"
      :selectedAssists="assists"
    />
    <LeagueCombined
      heading="Most Goals & Assists"
      :selectedCombined="combined"
    />
  </div>
</template>

<script>
// components
import LeagueTable from "./LeagueTable";
import LeagueChart from "./LeagueChart";
import LeagueScorers from "./LeagueScorers";
import LeagueAssists from "./LeagueAssists";
import LeagueCombined from "./LeagueCombined";

// json data
import leagueA from "../../json/leagueA.json";
import leagueB from "../../json/leagueB.json";

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
      selected: "leagueA",
      name: leagueA.competition.name,
      table: leagueA.standings[0].table,
      scorers: leagueA.stats[0].table,
      assists: leagueA.stats[1].table,
      combined: leagueA.stats[2].table,
     
      options: [
        {
          value: "leagueA",
          name: leagueA.competition.name,
          table: leagueA.standings[0].table,
          scorers: leagueA.stats[0].table,
          assists: leagueA.stats[1].table,
          combined: leagueA.stats[2].table,
        },
        {
          value: "leagueB",
          name: leagueB.competition.name,
          table: leagueB.standings[0].table,
          scorers: leagueB.stats[0].table,
          assists: leagueB.stats[1].table,
          combined: leagueB.stats[2].table,
        },
      ]

    };
  },
  methods: {
    changeLeague(event) {
      this.selected = option.value;
    }
  }
};
</script>