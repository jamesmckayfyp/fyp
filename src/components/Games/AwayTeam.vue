<template>
  <div class="line-up">
    <div class="line-up--pitch">
      <div class="line-up--pitch__formation">
        {{ squadData.teamAway.formation }}
      </div>
      <div class="line-up--pitch__position gk">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].gk.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].gk.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position def">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].lb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].lb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].lcb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].lcb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].rcb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].rcb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].rb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].rb.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position mid">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].lcm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].lcm.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].cm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].cm.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].rcm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].rcm.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position att">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].lw.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].lw.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].st.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].st.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamAway.startXI[0].rw.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamAway.startXI[0].rw.player.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="line-up--subs">
      <div class="line-up--subs-left">
        <div class="line-up--subs-left__head">Substitutes</div>
        <div class="line-up--subs-left__players">
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub1.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub1.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub2.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub2.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub3.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub3.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub4.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub4.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub5.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub5.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub6.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub6.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamAway.substitutes[0].sub7.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamAway.substitutes[0].sub7.player.name }}
            </div>
          </div>
        
        </div>
      </div>
      <div class="line-up--subs-right">
        <div class="line-up--subs-right__head">Manager</div>
        <div class="line-up--subs-right__players">
          <div class="line-up--subs-right__players--player">
            <div class="line-up--subs-right__players--player__name">
              {{ squadData.teamAway.coach.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AwayTeam",
  props: ["squadData"]
};
</script>