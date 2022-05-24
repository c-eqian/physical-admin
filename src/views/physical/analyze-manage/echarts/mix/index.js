export const mixOption = {
  title: {
    text: '季度体检分析'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['测试机构1', '测试机构2', '测试机构3', '测试机构4', '测试机构5', '测试机构6']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1季度', '2季度', '3季度', '4季度']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '测试机构1',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '测试机构2',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '测试机构3',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '测试机构4',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '测试机构5',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: '测试机构6',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
