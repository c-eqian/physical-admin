export const pieOption = {
  title: {
    text: '总数据',
    subtext: '人',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '体检概况',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 100048, name: '待体检' },
        { value: 7305, name: '已体检' },
        { value: 5080, name: '待审核' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
  ]
};
