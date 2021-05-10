<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Man City", "Man United", "Leicester", "West Ham"],
      datasets: [
        {
          label: "Points",
          backgroundColor: "#349749",
          color: "#F2F4F0",
          data: [74, 63, 56, 55, 0],
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              min: 50,
              max: 80,
              fontColor: "#F2F4F0",
              fontSize: 15,
              fontFamily: "DM Sans",
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#F2F4F0",
              fontSize: 15,
              fontFamily: "DM Sans",
              fontWeight: "bold",
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