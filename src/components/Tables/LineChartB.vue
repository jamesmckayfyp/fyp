<script>
import { Bar } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Inter Milan", "AC Milan", "Atalanta", "Juventus"],
      datasets: [
        {
          label: "Points",
          backgroundColor: "#349749",
          data: [75, 66, 64, 62, 0],
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