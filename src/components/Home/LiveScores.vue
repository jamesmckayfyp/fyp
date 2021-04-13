<template>
    <div class="live-scores">
        <div class="live-scores--block">
            <div class="live-scores--block__heading">Latest Scores</div>
            <div class="live-scores--block__content">
                <div class="team home">{{homeTeam}}</div>
                <div class="score">{{homeScore}} - {{awayScore}}</div>
                <div class="team away">{{awayTeam}}</div>
            </div>
            <router-link to="/Games" class="live-scores--block__cta" alt="View All">View All</router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LiveScores',
  data() {
      return {
        homeTeam: "PSG",
        awayTeam: "MUFC",
        homeScore: 1,
        awayScore: 3
      }
  }
}

</script>