<template>
  <div class="league-assists">
    <div class="league-assists--block">
      <div class="league-assists--block__head">{{ heading }}</div>
      <div class="league-assists--block__content">Content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeagueAssists",
  props: ["heading"],
};
</script>