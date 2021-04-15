<template>
    <div class="chart-change">
        <a class="chart-change__cta active" :alt={btnNameOne} >{{btnNameOne}}</a>
        <a class="chart-change__cta" :alt={btnNameTwo}>{{btnNameTwo}}</a>
        <a class="chart-change__cta" :alt={btnNameThree}>{{btnNameThree}}</a>
    </div>
</template>

<script>

export default {
  name: 'LeagueChartChange',
  props: ["btnNameOne", "btnNameTwo", "btnNameThree"]

}
</script>