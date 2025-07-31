checkLogin();
let trendChart;

function initTrendChart() {
  const ctx = document.getElementById('trendChart');
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Historical Load',
        data: [],
        borderColor: '#ff6384',
        fill: false
      }]
    }
  });
  loadDummyData();
}

function loadDummyData() {
  const now = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(now.getTime() - i * 3600000);
    trendChart.data.labels.unshift(date.toLocaleString());
    trendChart.data.datasets[0].data.unshift((Math.random() * 100 + 300).toFixed(2));
  }
  trendChart.update();
}

document.addEventListener('DOMContentLoaded', initTrendChart);
