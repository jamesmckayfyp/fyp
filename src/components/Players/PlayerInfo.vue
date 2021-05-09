<template>
  <div class="player-info">
    <div class="player-info--block">
      <div class="player-info--block__head">Player Info</div>
      <div class="player-info--block__content">
        <div class="player-info--block__content--info">
          <div class="label">Age</div>
          <div class="stat">{{playerAge}}</div>
        </div>
        <div class="player-info--block__content--info">
          <div class="label">Height</div>
          <div class="stat">{{playerHeight}}</div>
        </div>
        <div class="player-info--block__content--info">
          <div class="label">Position</div>
          <div class="stat">{{playerPosition}}</div>
        </div>
        <div class="player-info--block__content--info">
          <div class="label">Shirt Number</div>
          <div class="stat">{{playerShirtNo}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerInfo",
  data() {
    return {
      playerAge: "26",
      playerShirtNo: "18",
      playerPosition: "AM",
      playerHeight: "180cm",
    };
  },
};
</script>