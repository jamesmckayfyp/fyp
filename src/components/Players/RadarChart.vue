<script>
import { Radar } from "vue-chartjs";

export default {
  name: "RadarChart",
  extends: Radar,
  data: () => ({
    chartdata: {
      labels: ["Goals", "Assists", "MOTM", "Clean Sheets"],
      datasets: [
        {
          label: "Points",
          backgroundColor: "#349749",
          data: [74, 63, 56, 55, 0],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#F2F4F0",
              borderColor: "#F2F4F0",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#F2F4F0",
              borderColor: "#F2F4F0",
            },
          },
        ],
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>