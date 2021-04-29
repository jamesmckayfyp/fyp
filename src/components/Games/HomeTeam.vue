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
            <div class="line-up--pitch__position--player__name">{{lb}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lcb}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rcb}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rb}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position def-mid">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{ldm}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{rdm}}</div>
          </div>
        </div>
        <div class="line-up--pitch__position att-mid">
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{lam}}</div>
          </div>
          <div class="line-up--pitch__position--player">
            <div class="line-up--pitch__position--player__icon"></div>
            <div class="line-up--pitch__position--player__name">{{cam}}</div>
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
  name: "HomeTeam",
  props: [""],
  data() {
    return {
      formation: "4-2-3-1",
      gk: "De Gea",
      lb: "Shaw",
      lcb: "Maguire",
      rcb: "Lindelof",
      rb: "Wan-Bissaka",
      ldm: "Fred",
      rdm: "McTominay",
      lam: "Rashford",
      cam: "Fernandes",
      ram: "Greenwood",
      st: "Cavani",
    }
  }
};
</script>