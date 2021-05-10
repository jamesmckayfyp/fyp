<template>
    <router-link to="/Players" alt="View Player" class="player-stat">
        <div class="player-stat--content">
            <img class="player-stat--content__img" :src="('https://cdn.soccerwiki.org/images/player/' + playerImage)" :alt="playerName">
            <div class="player-stat--content__player">{{playerName}}<span>{{playerClub}}</span></div>
        </div>
        <div class="player-stat--stat">{{statNumber}}</div>
    </router-link>
</template>

<script>
export default {
  name: "LeaguePlayerStat",
  props: ["playerName","playerClub","playerImage","statNumber"]
};
</script>