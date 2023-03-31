const ctx = document.getElementById('myChart');

var data = {
  labels: [
    'Neutral',
    'Execution',
    'Yomi',
    'Knowledge',
    'Reaction Speed',
    'Temper'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [4, 4, 2, 1, 3, 0],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

var config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 5
        }
    }
  },
};
    
var chart = new Chart(ctx, config);

function createChart() {
  chart.destroy();
  chart = new Chart(ctx, config);
}

function player_name(playerName) {
  data.datasets[0].label = playerName;
  createChart();
}

function neutral(stat) {
  data.datasets[0].data[0] = stat;
  createChart();
}

function execution(stat) {
  data.datasets[0].data[1] = stat;
  createChart();
}

function yomi(stat) {
  data.datasets[0].data[2] = stat;
  createChart();
}

function knowledge(stat) {
  data.datasets[0].data[3] = stat;
  createChart();
}

function reaction(stat) {
  data.datasets[0].data[4] = stat;
  createChart();
}

function temper(stat) {
  data.datasets[0].data[5] = stat;
  createChart();
}