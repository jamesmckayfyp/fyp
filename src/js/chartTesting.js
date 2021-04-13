export const lineChart = {
    type: "bar",
    data: {
      labels: ["Rooney", "Ronaldo", "Berbatov"],
      datasets: [
        {
          label: "Number of Goals",
          data: [17, 21, 12],
          backgroundColor: "#4c4c4c",
          borderColor: "#22AF4A",
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
            fontColor: '#F2F4F0',
              beginAtZero: true,
              padding: 25
            }
          }
        ],
        xAxes: [
        {   
            ticks: {
                fontColor: '#F2F4F0',
            }
        }
        ]
      }
    }
  };
  
  export default lineChart;