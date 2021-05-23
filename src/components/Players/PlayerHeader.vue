<template>
  <div class="player-header">
    <div class="player-header--content">
      <img
        src="https://cdn.soccerwiki.org/images/player/70404.png"
        :alt="playerName"
        class="player-header--content__img"
      />
      <div class="player-header--content__info">
        <div class="player-header--content__info--name">{{ playerName }}</div>
        <div class="player-header--content__info--club">
          {{ playerClub }} / {{ playerNation }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayersHeader",
  data() {
    return {
      playerName: "Ivan Toney",
      playerClub: "Brentford",
      playerNation: "England",
    };
  },
};
</script>