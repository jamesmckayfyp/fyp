<template>
  <div class="match-stats">
    <div class="match-stats--block">
      <div class="match-stats--block__head">Stats</div>
      <div class="match-stats--block__content">
        <div class="stats">
          <div class="stats--groups">
            <div class="stats--groups__home">
              <div class="stats--groups__home--head">
                {{ statData.teamHome.name }}
              </div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOn.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOff.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsTotal.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsBlocked.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsInBox.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOutBox.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].fouls.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].corners.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].offsides.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].possession.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].yellows.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].reds.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].saves.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesTotal.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesAccurate.value }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesPercent.value }}</div>
            </div>
            <div class="stats--groups__stats">
              <div class="stats--groups__stats--head">Stats</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOn.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOff.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsTotal.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsBlocked.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsInBox.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].shotsOutBox.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].fouls.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].corners.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].offsides.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].possession.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].yellows.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].reds.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].saves.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesTotal.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesAccurate.type }}</div>
              <div class="stat">{{ statData.teamHome.statistics[0].passesPercent.type }}</div>
            </div>
            <div class="stats--groups__away">
              <div class="stats--groups__away--head">
                {{ statData.teamAway.name }}
              </div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsOn.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsOff.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsTotal.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsBlocked.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsInBox.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].shotsOutBox.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].fouls.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].corners.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].offsides.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].possession.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].yellows.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].reds.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].saves.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].passesTotal.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].passesAccurate.value }}</div>
              <div class="stat">{{ statData.teamAway.statistics[0].passesPercent.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MatchStats",
  props: ["statData"]
};
</script>