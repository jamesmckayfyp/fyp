<template>
  <div class="lineup">
    <div class="lineup--pitch">
      <div class="lineup--pitch__position gk">
        <div
          class="lineup--pitch__position--player"
          v-for="player in squad"
          :key="player.squad"
        >
          {{ squad.gk.player }}
        </div>
      </div>
      <div class="lineup--pitch__position def">
        <div
          class="lineup--pitch__position--player"
          v-for="player in squad"
          :key="player.squad"
        >
          {{ squad.def.player }}
        </div>
      </div>
      <div class="lineup--pitch__position mid-def">
        <div class="lineup--pitch__position--player"></div>
      </div>
      <div class="lineup--pitch__position mid">
        <div class="lineup--pitch__position--player"></div>
      </div>
      <div class="lineup--pitch__position mid-att">
        <div class="lineup--pitch__position--player"></div>
      </div>
      <div class="lineup--pitch__position att">
        <div class="lineup--pitch__position--player"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lineup",
  data() {
    return {
      position: [
        {
          gk: {
            player: "GK",
          },
          def: {
            player: "LB",
            player: "CB",
            player: "CB",
            player: "RB",
          },
          midDef: {},
          mid: {
            player: "LM",
            player: "CM",
            player: "CM",
            player: "RM",
          },
          midAtt: {},
          att: {
            player: "ST",
            player: "ST",
          },
        },
      ],

      squad: position[0]
    };
  },
};
</script>