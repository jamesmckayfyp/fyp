<template>
  <div class="league-scorers">
    <div class="league-scorers--block">
      <div class="league-scorers--block__head">{{ heading }}</div>
      <div class="league-scorers--block__content">Content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeagueScorers",
  props: ["heading"],
};
</script>