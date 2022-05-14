/***
 * 处理类型标签
 */
export const handleLabel = (label) => {
  const labelObj = {
    0: {
      label: "管理员",
      tag: 'primary'
    },
    1: {
      label: "医生",
      tag: 'success'
    },
    2: {
      label: "护士",
      tag: 'info'
    },
    3: {
      label: "其他",
      tag: 'info'
    },
  }
  return labelObj[label]
}
export const handleStatus = (status) => {
    const labelObj = {
    '1': {
      label: "启用",
      tag: 'primary'
    },
    '0': {
      label: "禁用",
      tag: 'info'
    },
    '-1': {
      label: "已注销",
      tag: 'info'
    },
  }
  return labelObj[status.toString()]
}
