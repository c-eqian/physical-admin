export  const barOption = {
  title: {
    text: '体检概况'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['测试机构1','测试机构2','测试机构3','测试机构4','测试机构5','测试机构6']
  },
  series: [
    {
      name: '有效用户',
      type: 'bar',
      data: [1000, 1200, 1300, 1400, 452, 3869]
    },
    {
      name: '已迁出',
      type: 'bar',
      data: [25, 369, 75, 456, 789, 354]
    },
    {
      name: '已注销',
      type: 'bar',
      data: [12, 45, 26, 100, 78, 13]
    },
  ]
};
