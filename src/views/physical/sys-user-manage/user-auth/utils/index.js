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
  }
  return labelObj[label]
}
export const handleStatus = (status) => {
  let statusText = '';
  switch (status) {
    case '1':
    case  1:
      statusText = '启用';
      break;
    case '0':
    case  0:
      statusText = '禁用';
      break;
    case '-1':
    case  -1:
      statusText = '已注销';
      break;
      default :
        statusText='-';
         break;
  }
  return statusText
}
