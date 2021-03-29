<template>
  <div class="api-testing">
    <div>{{ data.competition.name }} Leaders</div>
    <div>Team: {{ data.standings[0].table[0].team.name }}</div>
    <div>Points: {{ data.standings[0].table[0].points }}</div>
    <img :src="data.standings[0].table[0].team.crestUrl" :alt="data.standings[0].table[0].team.name">

    
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
        "https://api.football-data.org/v2/competitions/PL/standings"
      );
      const data = await res.json();
      this.data = data;
    },
  },
};
</script>