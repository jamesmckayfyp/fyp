<template>
  <div class="my-team-stats">
    <div class="my-team-stats-block">
      <div class="my-team-stats-block--row head mobile">
        <div class="my-team-stats-block--row__column comp">Comp</div>
        <div class="my-team-stats-block--row__column g">W</div>
        <div class="my-team-stats-block--row__column a">D</div>
        <div class="my-team-stats-block--row__column cs">L</div>
        <div class="my-team-stats-block--row__column motm">GD</div>
      </div>
      <div class="my-team-stats-block--row head desktop">
        <div class="my-team-stats-block--row__column comp">Competition</div>
        <div class="my-team-stats-block--row__column g">Wins</div>
        <div class="my-team-stats-block--row__column a">Draws</div>
        <div class="my-team-stats-block--row__column cs">Losses</div>
        <div class="my-team-stats-block--row__column motm">Goal Difference</div>
      </div>
      <div class="my-team-stats-block--row data">
        <div class="my-team-stats-block--row__column comp">
          <div>{{ compOne }}</div>
          <div>{{ compTwo }}</div>
          <div>{{ compThree }}</div>
        </div>
        <div class="my-team-stats-block--row__column g">
          <div>{{ stat1 }}</div>
          <div>{{ stat2 }}</div>
          <div>{{ stat3 }}</div>
        </div>
        <div class="my-team-stats-block--row__column a">
          <div>{{ stat4 }}</div>
          <div>{{ stat5 }}</div>
          <div>{{ stat6 }}</div>
        </div>
        <div class="my-team-stats-block--row__column cs">
          <div>{{ stat7 }}</div>
          <div>{{ stat8 }}</div>
          <div>{{ stat9 }}</div>
        </div>
        <div class="my-team-stats-block--row__column motm">
          <div>{{ stat10 }}</div>
          <div>{{ stat11 }}</div>
          <div>{{ stat12 }}</div>
        </div>
      </div>
      <div class="my-team-stats-block--row total">
        <div class="my-team-stats-block--row__column comp">Total</div>
        <div class="my-team-stats-block--row__column g">{{goalsTotal}}</div>
        <div class="my-team-stats-block--row__column a">{{assistsTotal}}</div>
        <div class="my-team-stats-block--row__column cs">{{csTotal}}</div>
        <div class="my-team-stats-block--row__column motm">{{motmTotal}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTeamStats",
  data() {
    return {
      compOne: "Championship",
      compTwo: "FA Cup",
      compThree: "Carabao Cup",
      stat1: "24",
      stat2: "3",
      stat3: "2",
      stat4: "15",
      stat5: "0",
      stat6: "0",
      stat7: "7",
      stat8: "1",
      stat9: "1",
      stat10: "+37",
      stat11: "+7",
      stat12: "+1",
      goalsTotal: "30",
      assistsTotal: "15",
      csTotal: "9",
      motmTotal: "45",
    };
  },
};
</script>