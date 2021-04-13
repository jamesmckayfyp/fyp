<template>
    <div class="league-filter">
        <div class="league-filter--info">
            <div class="league-filter--info__img"></div>
            <div class="league-filter--info__name">{{leagueName}}</div>
            <div class="league-filter--info__country">{{leagueCountry}}</div>
        </div>
        <div class="league-filter--dropdown">
            <div class="league-filter--dropdown__cta">Change League</div>
            <span class="icon icon-down-arrow"></span>
        </div>
    </div>
</template>

<script>

export default {
   name: "LeagueFilter",
   props : ["leagueName", "leagueCountry"]
}
</script>
