<template>
    <div class="league-charts">
        <div class="league-charts--block">
            <div class="league-charts--block__head">{{leagueName}}</div>
            <div class="league-charts--block__content">Content</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'LiveScores',
  props : ["leagueName"],

}
</script>