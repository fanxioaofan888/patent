checkLogin();
let chart;
function initChart() {
  const ctx = document.getElementById('realtimeChart');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Power (kW)',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        fill: false
      }]
    },
    options: {
      scales: {
        x: {display: true},
        y: {beginAtZero: true}
      }
    }
  });
}

function addData() {
  const now = new Date().toLocaleTimeString();
  const value = Math.random() * 100 + 300;
  chart.data.labels.push(now);
  chart.data.datasets[0].data.push(value.toFixed(2));
  if (chart.data.labels.length > 20) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }
  chart.update();
}

document.addEventListener('DOMContentLoaded', () => {
  initChart();
  setInterval(addData, 1000);
});
