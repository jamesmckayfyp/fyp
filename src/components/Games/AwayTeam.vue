<template>
  <div class="line-up">
      <div class="line-up--pitch">
        <div class="line-up--pitch__formation">{{formation}}</div>
        <div class="line-up--pitch__position gk">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{gk}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position def">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lcb}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{cb}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rcb}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position mid">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lm}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lcm}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rcm}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rm}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position att-mid">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lam}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{ram}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position att">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{st}}</div>
          </div>
        </div>
      </div>
      <!-- <div class="line-up--subs">
        <div class="line-up--subs__head"></div>
        <div class="line-up--subs__players">
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
          <div class="line-up--subs__players--player">Player</div>
        </div>
      </div> -->
  </div>
</template>

<script>

export default {
  name: "AwayTeam",
  props: [""],
  data() {
    return {
      formation: "3-4-3",
      gk: "Lopez",
      lcb: "Fazio",
      cb: "Smalling",
      rcb: "Mancini",
      rm: "Santon",
      rcm: "Villar",
      lcm: "Diawara",
      lm: "Peres",
      lam: "Pellegrini",
      ram: "Perez",
      st: "Mayoral",
    }
  }
};
</script>