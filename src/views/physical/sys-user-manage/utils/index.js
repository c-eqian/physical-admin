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
export const rules = {
    sys_user_name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        birthday: [
          {required: true, message: '请选择日期', trigger: 'change'}
        ],
        sex: [
          {type: 'date', required: true, message: '请选择性别', trigger: 'change'}
        ],
        sys_type: [
          {type: 'date', required: true, message: '角色分配不能为空', trigger: 'change'}
        ],
        authority: [
          {type: 'array', required: true, message: '角色分配不能为空', trigger: 'change'}
        ],
        sys_user_account: [
          {required: true, message: '账号不能为空', trigger: 'blur'}
        ],
        sys_user_password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '联系方式不能为空', trigger: 'blur'}
        ],
        idCard: [
          {required: true, message: '身份证不能为空', trigger: 'blur'}
        ],
        org_id: [
          {required: true, message: '请填写机构', trigger: 'blur'}
        ],
}
