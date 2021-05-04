<template>
  <div class="stats">
    <div class="stats--groups">
      <div class="stats--groups__home">
        <div class="stats--groups__home--head">
          {{ homeTeam }}
        </div>
        <div class="stat">{{ homePosession }}</div>
        <div class="stat">{{ homeShots }}</div>
        <div class="stat">{{ homeShotsOn }}</div>
        <div class="stat">{{ homePasses }}</div>
        <div class="stat">{{ homePassesOn }}</div>
        <div class="stat">{{ homeTackles }}</div>
        <div class="stat">{{ homeClearances }}</div>
        <div class="stat">{{ homeCorners }}</div>
        <div class="stat">{{ homeOffsides }}</div>
        <div class="stat">{{ homeFouls }}</div>
        <div class="stat">{{ homeYellows }}</div>
        <div class="stat">{{ homeReds }}</div>
      </div>
      <div class="stats--groups__stats">
        <div class="stats--groups__stats--head">Stats</div>
        <div class="stat">Possession %</div>
        <div class="stat">Shots</div>
        <div class="stat">Shots on target</div>
        <div class="stat">Passes</div>
        <div class="stat">Pass completion %</div>
        <div class="stat">Tackles</div>
        <div class="stat">Clearances</div>
        <div class="stat">Corners</div>
        <div class="stat">Offsides</div>
        <div class="stat">Fouls</div>
        <div class="stat">Yellow cards</div>
        <div class="stat">Red cards</div>
      </div>
      <div class="stats--groups__away">
        <div class="stats--groups__away--head">
          {{ awayTeam }}
        </div>
        <div class="stat">{{ awayPosession }}</div>
        <div class="stat">{{ awayShots }}</div>
        <div class="stat">{{ awayShotsOn }}</div>
        <div class="stat">{{ awayPasses }}</div>
        <div class="stat">{{ awayPassesOn }}</div>
        <div class="stat">{{ awayTackles }}</div>
        <div class="stat">{{ awayClearances }}</div>
        <div class="stat">{{ awayCorners }}</div>
        <div class="stat">{{ awayOffsides }}</div>
        <div class="stat">{{ awayFouls }}</div>
        <div class="stat">{{ awayYellows }}</div>
        <div class="stat">{{ awayReds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  props: ["homeTeam", "awayTeam"],
  data() {
    return {
      homePosession: "0",
      homeShots: "0",
      homeShotsOn: "0",
      homePasses: "0",
      homePassesOn: "0",
      homeTackles: "0",
      homeClearances: "0",
      homeCorners: "0",
      homeOffsides: "0",
      homeFouls: "0",
      homeYellows: "0",
      homeReds: "0",

      awayPosession: "0",
      awayShots: "0",
      awayShotsOn: "0",
      awayPasses: "0",
      awayPassesOn: "0",
      awayTackles: "0",
      awayClearances: "0",
      awayCorners: "0",
      awayOffsides: "0",
      awayFouls: "0",
      awayYellows: "0",
      awayReds: "0",
    };
  },
};
</script>