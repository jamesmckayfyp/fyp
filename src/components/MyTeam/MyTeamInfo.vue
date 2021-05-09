<template>
  <div class="my-team-info">
    <div class="my-team-info--block">
      <div class="my-team-info--block__head">Club Info</div>
      <div class="my-team-info--block__content">
        <div class="my-team-info--block__content--info">
          <div class="label">Established</div>
          <div class="stat">{{clubDate}}</div>
        </div>
        <div class="my-team-info--block__content--info">
          <div class="label">League Position</div>
          <div class="stat">{{clubPosition}}</div>
        </div>
        <div class="my-team-info--block__content--info">
          <div class="label">Stadium</div>
          <div class="stat">{{clubStadium}}</div>
        </div>
        <div class="my-team-info--block__content--info">
          <div class="label">Nickname</div>
          <div class="stat">{{clubNickname}}</div>
        </div>
        <div class="my-team-info--block__content--info">
          <div class="label">Manager</div>
          <div class="stat">{{clubManager}}</div>
        </div>
        <div class="my-team-info--block__content--info">
          <div class="label">Captain</div>
          <div class="stat">{{clubCaptain}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTeamInfo",
  data() {
    return {
      clubDate: "1878",
      clubPosition: "2nd",
      clubStadium: "Old Trafford",
      clubNickname: "Red Devils",
      clubManager: "Solskjær",
      clubCaptain: "Maguire",
    };
  },
};
</script>