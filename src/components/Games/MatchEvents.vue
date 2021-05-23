<template>
  <div class="match-events">
    <div class="match-events--block">
      <div class="match-events--block__head">Match Events</div>
      <div class="match-events--block__content">
        <div class="events">
          <div class="events--home" v-for="items in eventData.teamHome" :key="items">
            {{ eventData.teamHome[0].time }}
            {{ eventData.teamHome[0].player }}
            {{ eventData.teamHome[0].type }}
          </div>
          <div class="events--away" v-for="items in eventData.teamAway" :key="items">
            {{ eventData.teamAway[0].time }}
            {{ eventData.teamAway[0].player }}
            {{ eventData.teamAway[0].type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchEvents",
  props: ["eventData"],
};
</script>