<template>
  <div class="container">
      <Welcome />
      <LiveScores />
      <LeagueTable />
      <LeagueTest/>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import LiveScores from "./LiveScores";
import LeagueTable from "./LeagueTable";
import LeagueTest from "./LeagueTest";

export default {
  name: "Content",
  components: {
    Welcome,
    LiveScores,
    LeagueTable,
    LeagueTest,
  },
};
</script>