<template>
  <div class="player-stats">
    <div class="player-stats-block">
      <div class="player-stats-block--row head mobile">
        <div class="player-stats-block--row__column comp">Comp</div>
        <div class="player-stats-block--row__column g">G</div>
        <div class="player-stats-block--row__column a">A</div>
        <div class="player-stats-block--row__column cs">CS</div>
        <div class="player-stats-block--row__column motm">MOTM</div>
      </div>
      <div class="player-stats-block--row head desktop">
        <div class="player-stats-block--row__column comp">Competition</div>
        <div class="player-stats-block--row__column g">Goals</div>
        <div class="player-stats-block--row__column a">Assists</div>
        <div class="player-stats-block--row__column cs">Clean Sheets</div>
        <div class="player-stats-block--row__column motm">MOTM</div>
      </div>
      <div class="player-stats-block--row data">
        <div class="player-stats-block--row__column comp">
          <div>{{ compOne }}</div>
          <div>{{ compOne }}</div>
          <div>{{ compOne }}</div>
        </div>
        <div class="player-stats-block--row__column g">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="player-stats-block--row__column a">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="player-stats-block--row__column cs">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="player-stats-block--row__column motm">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
      </div>
      <div class="player-stats-block--row total">
        <div class="player-stats-block--row__column comp">Total</div>
        <div class="player-stats-block--row__column g">{{goalsTotal}}</div>
        <div class="player-stats-block--row__column a">{{assistsTotal}}</div>
        <div class="player-stats-block--row__column cs">{{csTotal}}</div>
        <div class="player-stats-block--row__column motm">{{motmTotal}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerStats",
  data() {
    return {
      compOne: "League A",
      stat: "25",
      goalsTotal: "75",
      assistsTotal: "75",
      csTotal: "75",
      motmTotal: "75",
    };
  },
};
</script>