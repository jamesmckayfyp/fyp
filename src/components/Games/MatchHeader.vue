<template>
  <div class="match-header">
    <div class="match-header--content">
      <div class="match-header--content__img"></div>
      <div class="match-header--content__league">{{ league }}</div>
      <div class="match-header--content__type">{{ type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchHeader",
  props: ["league", "type"],
};
</script>