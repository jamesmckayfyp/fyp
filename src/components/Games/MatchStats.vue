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
              <div class="stat">{{ homePosession }}</div>

            </div>
            <div class="stats--groups__stats">
              <div class="stats--groups__stats--head">Stats</div>
              <div class="stat">Possession %</div>

            </div>
            <div class="stats--groups__away">
              <div class="stats--groups__away--head">
                {{ statData.teamAway.name }}
              </div>
              <div class="stat">{{ awayPosession }}</div>
   
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