export const dashOption= {
    series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 10,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 10,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 10,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        fontSize: 15,
        offsetCenter: [0, '80%']
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
};
