<template>
  <div class="league-combined">
    <div class="league-combined--block">
      <div class="league-combined--block__head">{{ heading }}</div>
      <div class="league-combined--block__content">Content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeagueCombined",
  props: ["heading"],
};
</script>