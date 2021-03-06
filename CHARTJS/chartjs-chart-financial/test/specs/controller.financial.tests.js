describe("Financial controller tests", function () {
  it("Should create candlestick elements for each data item during initialization", function () {
    var chart = window.acquireChart({
      type: "candlestick",
      data: {
        datasets: [
          {
            data: [
              { t: 1491004800, o: 70.87, h: 80.13, l: 40.94, c: 50.24 },
              { t: 1491091200, o: 60.23, h: 200.23, l: 50.29, c: 90.2 },
              { t: 1491177600, o: 40.0, h: 50.42, l: 20.31, c: 30.2 },
              { t: 1491264000, o: 60.9, h: 80.34, l: 40.14, c: 60.29 },
              { t: 1491350400, o: 60.94, h: 100.09, l: 50.78, c: 90.04 },
              { t: 1491436800, o: 30.49, h: 50.2, l: 20.09, c: 40.2 },
              { t: 1491523200, o: 50.04, h: 80.93, l: 40.94, c: 70.24 },
              { t: 1491609600, o: 60.29, h: 100.49, l: 50.49, c: 90.24 },
              { t: 1491696000, o: 40.04, h: 50.23, l: 20.23, c: 30.49 },
              { t: 1491782400, o: 30.23, h: 50.09, l: 20.87, c: 40.49 },
            ],
          },
        ],
      },
      getDatasetMeta: function (datasetIndex) {
        this.data.datasets[datasetIndex].meta = this.data.datasets[datasetIndex]
          .meta || {
          data: [],
          dataset: null,
        };
        return this.data.datasets[datasetIndex].meta;
      },
    });

    var meta = chart.getDatasetMeta(0);
    expect(meta.data.length).toBe(10);
    for (var i = 0; i < meta.data.length; i++) {
      expect(meta.data[i].x > 0).toBe(true);
      expect(meta.data[i].y > 0).toBe(true);
    }
  });
});
