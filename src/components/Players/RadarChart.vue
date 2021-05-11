<script>
import { Radar } from "vue-chartjs";

export default {
  name: "RadarChart",
  extends: Radar,
  data: () => ({
    chartdata: {
      labels: ["Goals", "Assists", "Clean Sheets", "MOTM"],
      datasets: [
        {
          label: 'Player Stat',
          data: [65, 59, 90, 81,],
          fill: true,
          backgroundColor: '#349749',
          borderColor: '#F2F4F0',
          pointBackgroundColor: '#349749',
          pointBorderColor: '#F2F4F0',
          pointHoverBackgroundColor: '#F2F4F0',
          pointHoverBorderColor: '#349749'
        },
      ],
    },
    options: {
      legend: {display: false},
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
            angleLines: {
                display: false
            },
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#F2F4F0",
              fontSize: 15,
              fontFamily: "DM Sans",
            },
        }
    }
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>