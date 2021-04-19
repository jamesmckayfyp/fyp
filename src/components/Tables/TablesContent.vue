<template>
  <div class="container">
    <CustomSelect
      :options="[leagueA, leagueB]"
      :default="leagueA"
      class="select"
      @input="alert(displayToKey($event))"
    />
    <component :is="component"/>
  </div>
</template>

<script>
import CustomSelect from "./CustomSelect";
import LeagueA from "./LeagueA";
import LeagueB from "./LeagueB";

export default {
  name: "TablesContent",
  components: {CustomSelect, LeagueA, LeagueB},
  data(){
    return {
      component: 'LeagueA',
      leagueA: 'Premier League',
      leagueB: 'Serie A'
    }
  }
};
</script>