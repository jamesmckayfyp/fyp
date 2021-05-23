<template>
  <div class="line-up">
    <div class="line-up--pitch">
      <div class="line-up--pitch__formation">
        {{ squadData.teamHome.formation }}
      </div>
      <div class="line-up--pitch__position gk">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].gk.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].gk.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position def">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].lb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].lb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].lcb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].lcb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].rcb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].rcb.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].rb.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].rb.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position def-mid">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].ldm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].ldm.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].rdm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].rdm.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position att-mid">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].lm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].lm.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].cam.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].cam.player.name }}
          </div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].rm.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].rm.player.name }}
          </div>
        </div>
      </div>
      <div class="line-up--pitch__position att">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">
            {{ squadData.teamHome.startXI[0].st.player.number }}
          </div>
          <div class="line-up--pitch__position--player__name">
            {{ squadData.teamHome.startXI[0].st.player.name }}
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
              {{ squadData.teamHome.substitutes[0].sub1.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub1.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub2.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub2.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub3.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub3.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub4.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub4.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub5.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub5.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub6.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub6.player.name }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">
              {{ squadData.teamHome.substitutes[0].sub7.player.number }}
            </div>
            <div class="line-up--subs-left__players--player__name">
              {{ squadData.teamHome.substitutes[0].sub7.player.name }}
            </div>
          </div>
        
        </div>
      </div>
      <div class="line-up--subs-right">
        <div class="line-up--subs-right__head">Manager</div>
        <div class="line-up--subs-right__players">
          <div class="line-up--subs-right__players--player">
            <div class="line-up--subs-right__players--player__name">
              {{ squadData.teamHome.coach.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTeam",
  props: ["squadData"]
};
</script>