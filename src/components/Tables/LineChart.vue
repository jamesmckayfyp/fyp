<script>
import { Bar } from "vue-chartjs";
import leagueA from "../../json/leagueA.json";

export default {
  name: "LineChart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Man City", "Man United", "Leicester", "West Ham"],
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