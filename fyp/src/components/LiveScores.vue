<template>
    <div class="ls">
        <div class="ls--block">
            <div class="ls--block__heading">Live Scores</div>
            <div class="ls--block__content">
                <div class="team home">{{homeTeam}}</div>
                <div class="score">{{homeScore}} - {{awayScore}}</div>
                <div class="team away">{{awayTeam}}</div>
            </div>
            <div class="ls--block__cta">View All</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LiveScores',
  data() {
      return {
        homeTeam: 'Team',
        awayTeam: 'Team',
        homeScore: 0,
        awayScore: 0
      }
  }
}

</script>