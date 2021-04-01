<template>
  <div class="container">
      <Welcome />
      <LiveScores />
      <LeagueTable />
  </div>
</template>

<script>
import Welcome from "./Welcome";
import LiveScores from "./LiveScores";
import LeagueTable from "./LeagueTable";

export default {
  name: "Content",
  components: {
    Welcome,
    LiveScores,
    LeagueTable,
  },
};
</script>