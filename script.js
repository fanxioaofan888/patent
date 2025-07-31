let chart;
let loadData = [];
let predictData = [];
let timestamps = [];
let interval;

function initChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [
        { label: '实际负荷', data: loadData, borderColor: 'red', fill: false },
        { label: '预测负荷', data: predictData, borderColor: 'blue', fill: false }
      ]
    },
    options: {
      animation: false,
      scales: { x: { display: false } }
    }
  });
}

function updateChart() {
  chart.update();
}

function simulateStep() {
  const lastLoad = loadData.length ? loadData[loadData.length - 1] : 300 + Math.random() * 50;
  const newLoad = lastLoad + (Math.random() - 0.5) * 10;
  const prediction = newLoad + (Math.random() - 0.5) * 5;

  const time = new Date().toLocaleTimeString();
  timestamps.push(time);
  loadData.push(newLoad.toFixed(2));
  predictData.push(prediction.toFixed(2));

  document.getElementById('status').textContent = `当前负荷: ${newLoad.toFixed(2)} kW, 预测值: ${prediction.toFixed(2)} kW`;
  updateChart();

  if (timestamps.length > 20) {
    timestamps.shift();
    loadData.shift();
    predictData.shift();
  }
}

function startSimulation() {
  if (!chart) {
    initChart();
  }
  if (!interval) {
    interval = setInterval(simulateStep, 1000);
  }
}

document.getElementById('startButton').addEventListener('click', startSimulation);
