<template>
  <div class="player-header">
    <div class="player-header--content">
      <img
        src="../../assets/player-placeholder.svg"
        :alt="playerName"
        class="player-header--content__img"
      />
      <div class="player-header--content__info">
        <div class="player-header--content__info--name">{{ playerName }}</div>
        <div class="player-header--content__info--club">
          {{ playerClub }}  {{ playerNation }}
        </div>
        <!-- <div class="player-header--content__info--nation"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayersHeader",
  data() {
    return {
      playerName: "Bruno Fernandes",
      playerClub: "Man United",
      playerNation: "Portugal",
    };
  },
};
</script>