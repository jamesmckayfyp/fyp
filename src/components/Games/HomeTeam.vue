<template>
  <div class="line-up">
    <div class="line-up--pitch">
      <div class="line-up--pitch__formation">{{ formation }}</div>
      <div class="line-up--pitch__position gk">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">1</div>
          <div class="line-up--pitch__position--player__name">{{ gk }}</div>
        </div>
      </div>
      <div class="line-up--pitch__position def">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">23</div>
          <div class="line-up--pitch__position--player__name">{{ lb }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number captain">5</div>
          <div class="line-up--pitch__position--player__name">{{ lcb }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">2</div>
          <div class="line-up--pitch__position--player__name">{{ rcb }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">29</div>
          <div class="line-up--pitch__position--player__name">{{ rb }}</div>
        </div>
      </div>
      <div class="line-up--pitch__position def-mid">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">17</div>
          <div class="line-up--pitch__position--player__name">{{ ldm }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">39</div>
          <div class="line-up--pitch__position--player__name">{{ rdm }}</div>
        </div>
      </div>
      <div class="line-up--pitch__position att-mid">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">10</div>
          <div class="line-up--pitch__position--player__name">{{ lam }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">18</div>
          <div class="line-up--pitch__position--player__name">{{ cam }}</div>
        </div>
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">11</div>
          <div class="line-up--pitch__position--player__name">{{ ram }}</div>
        </div>
      </div>
      <div class="line-up--pitch__position att">
        <div class="line-up--pitch__position--player">
          <div class="line-up--pitch__position--player__number">7</div>
          <div class="line-up--pitch__position--player__name">{{ st }}</div>
        </div>
      </div>
    </div>
    <div class="line-up--subs">
      <div class="line-up--subs-left">
        <div class="line-up--subs-left__head">Substitutes</div>
        <div class="line-up--subs-left__players">
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">26</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subOne }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">3</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subTwo }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">28</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subThree }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">38</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subFour }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">6</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subFive }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">34</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subSix }}
            </div>
          </div>
          <div class="line-up--subs-left__players--player">
            <div class="line-up--subs-left__players--player__number">9</div>
            <div class="line-up--subs-left__players--player__name">
              {{ subSeven }}
            </div>
          </div>
        </div>
      </div>
      <div class="line-up--subs-right">
        <div class="line-up--subs-right__head">Manager</div>
        <div class="line-up--subs-right__players">
          <div class="line-up--subs-right__players--player">
            <div class="line-up--subs-right__players--player__name">
              {{ staffOne }}
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
      subOne: "Henderson",
      subTwo: "Bailly",
      subThree: "Telles",
      subFour: "Tuanzebe",
      subFive: "Pogba",
      subSix: "van de Beek",
      subSeven: "Martial",
      staffOne: "Ole Gunnar Solkjaer"
    };
  },
};
</script>