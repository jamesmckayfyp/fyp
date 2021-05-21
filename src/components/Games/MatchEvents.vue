<template>
  <div class="match-events">
    <div class="match-events--block">
      <div class="match-events--block__head">Match Events</div>
      <div class="match-events--block__content">
        <Events />
      </div>
    </div>
  </div>
</template>

<script>
import Events from "./Events";

export default {
  name: "MatchEvents",
  components: {Events}
};
</script>