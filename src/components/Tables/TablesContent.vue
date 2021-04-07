<template>
  <div class="container">
      <!-- <LeagueTable />
      <LeagueTest/> -->
      Tables
  </div>
</template>

<script>
import LeagueTable from "./LeagueTable";
import LeagueTest from "./LeagueTest";

export default {
  name: "TablesContent",
  components: {
    LeagueTable,
    LeagueTest,
  },
};
</script>