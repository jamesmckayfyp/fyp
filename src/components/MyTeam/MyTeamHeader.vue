<template>
  <div class="my-team-header">
    <div class="my-team-header--content">
      <img
        src="https://media.api-sports.io/football/teams/55.png"
        :alt="clubName"
        class="my-team-header--content__img"
      />
      <div class="my-team-header--content__info">
        <div class="my-team-header--content__info--name">{{ clubName }}</div>
        <div class="my-team-header--content__info--club">
          {{ clubArea }}, {{ clubNation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTeamHeader",
  data() {
    return {
      clubName: "Brentford",
      clubArea: "London",
      clubNation: "England",
    };
  },
};
</script>