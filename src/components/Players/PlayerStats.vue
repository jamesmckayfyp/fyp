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
          <div>{{ comp1 }}</div>
          <div>{{ comp2 }}</div>
          <div>{{ comp3 }}</div>
        </div>
        <div class="player-stats-block--row__column g">
          <div>{{ stat1 }}</div>
          <div>{{ stat2 }}</div>
          <div>{{ stat3 }}</div>
        </div>
        <div class="player-stats-block--row__column a">
          <div>{{ stat4 }}</div>
          <div>{{ stat5 }}</div>
          <div>{{ stat6 }}</div>
        </div>
        <div class="player-stats-block--row__column cs">
          <div>{{ stat7 }}</div>
          <div>{{ stat8 }}</div>
          <div>{{ stat9 }}</div>
        </div>
        <div class="player-stats-block--row__column motm">
          <div>{{ stat10 }}</div>
          <div>{{ stat11 }}</div>
          <div>{{ stat12 }}</div>
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
      comp1: "Championship",
      comp2: "Carabao Cup",
      comp3: "FA Cup",
      stat1: "31",
      stat2: "4",
      stat3: "1",
      stat4: "10",
      stat5: "0",
      stat6: "1",
      stat7: "10",
      stat8: "2",
      stat9: "1",
      stat10: "13",
      stat11: "2",
      stat12: "3",
      goalsTotal: "36",
      assistsTotal: "11",
      csTotal: "13",
      motmTotal: "18",
    };
  },
};
</script>