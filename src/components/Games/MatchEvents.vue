<template>
  <div class="match-events">
    <div class="match-events--block">
      <div class="match-events--block__head">Match Events</div>
      <div class="match-events--block__content">
        <div class="events">
          <div
            class="events--home"
            v-for="items in eventData.teamHome"
            :key="items"
          >
            <div class="events--home__block">
              <div class="time">{{ eventData.teamHome[0].time }}</div>
              <div class="player">{{ eventData.teamHome[0].player }}</div>
              <div class="type">{{ eventData.teamHome[0].type }}</div>
              
            </div>
          </div>
          <div
            class="events--away"
            v-for="items in eventData.teamAway"
            :key="items"
          >
            <div class="events--away__block">
              
              <div class="type">{{ eventData.teamAway[0].type }}</div>
              <div class="player">{{ eventData.teamAway[0].player }}</div>
              <div class="time">{{ eventData.teamAway[0].time }}</div>
            </div>
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