export default {
  config: {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      datasets: [{
        data: [4, 3, 2, 1, 0, 0, -1, -2, -3, -4],
        datalabels: {
          backgroundColor: '#ff0',
          display: false
        }
      }, {
        data: [4, 2, 0, -2, -4, -2, 0, 2, 4, 2, 0],
        datalabels: {
          backgroundColor: '#0f0',
          display: true
        }
      }, {
        data: [-4, -2, 0, 2, 4, 2, 0, -2, -4, -2, 0],
        datalabels: {
          backgroundColor: '#f00',
          display: true
        }
      }, {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        datalabels: {
          backgroundColor: '#f0f',
          // display: (fallback: true)
        }
      }]
    },
    options: {
      layout: {
        padding: 64
      },
      elements: {
        line: {
          borderColor: 'transparent',
          fill: false
        }
      },
      plugins: {
        datalabels: {
          borderColor: '#0000ff',
          borderWidth: 4,
          font: {
            size: 0
          },
          padding: {
            top: 16,
            right: 24,
            bottom: 16,
            left: 24
          },
          rotation: (ctx) => ctx.dataIndex * 42
        }
      }
    }
  },
  options: {
    canvas: {
      height: 320,
      width: 320
    }
  }
};
