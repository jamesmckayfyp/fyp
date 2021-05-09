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
          <div>{{ compOne }}</div>
          <div>{{ compOne }}</div>
        </div>
        <div class="my-team-stats-block--row__column g">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="my-team-stats-block--row__column a">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="my-team-stats-block--row__column cs">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
        </div>
        <div class="my-team-stats-block--row__column motm">
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
          <div>{{ stat }}</div>
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