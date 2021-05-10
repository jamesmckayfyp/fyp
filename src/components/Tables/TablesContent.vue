<template>
  <div class="container">
    <select v-model="selected" @change="changeLeague($event)" class="league-select">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        class="league-select__options"
      >
        {{ option.name }}
      </option>
    </select>
    <component :is="selected"></component>
  </div>
</template>

<script>
import LeagueA from "./LeagueA";
import LeagueB from "./LeagueB";
export default {
  name: "TablesContent",
  components: { LeagueA, LeagueB },
  data() {
    return {
      selected: "LeagueA",
      options: [
        { name: "Premier League", value: "LeagueA" },
        { name: "Serie A", value: "LeagueB" },
      ],
    };
  },
  methods: {
    changeLeague(event) {
      this.selected = option.value;
    },
  },
};
</script>