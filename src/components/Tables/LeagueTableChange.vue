<template>
    <div class="league-change">
        <a class="league-change__cta" :alt={btnNameOne} >{{btnNameOne}}</a>
        <a class="league-change__cta" :alt={btnNameTwo}>{{btnNameTwo}}</a>
        <a class="league-change__cta" :alt={btnNameThree}>{{btnNameThree}}</a>
    </div>
</template>

<script>

export default {
  name: 'LeagueTableChange',
  props: ["btnNameOne", "btnNameTwo", "btnNameThree"]

}
</script>