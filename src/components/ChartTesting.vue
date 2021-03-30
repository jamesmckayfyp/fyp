<template>
    <div class="chart-testing">
        <canvas id="line-chart"></canvas>
    </div>    
</template>

<script>
import Chart from 'chart.js'
import lineChart from '../js/chartTesting.js'

export default {
  name: 'ChartTesting',
  data() {
    return {
      lineChart : lineChart
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart');
    new Chart(ctx, this.lineChart);
  }
}

</script>