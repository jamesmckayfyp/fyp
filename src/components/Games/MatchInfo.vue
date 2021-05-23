<template>
  <div class="match-info">
      <h2>{{infoData.comp}} - {{infoData.type}}</h2>
  </div>
</template>

<script>

export default {
  name: "MatchInfo",
  props: ["infoData"]
};
</script>