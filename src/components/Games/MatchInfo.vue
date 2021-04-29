<template>
  <div class="match-info">
      <h2>{{competition}} - {{type}}</h2>
  </div>
</template>

<script>

export default {
  name: "MatchInfo",
  props: ["competition", "type"]
};
</script>