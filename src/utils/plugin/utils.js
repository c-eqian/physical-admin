// 1—A型；2—B型；3—O型；4—AB型；5—不详
// 常住类型：1—户籍；2—非户籍
// 人群类别：1—老年人；2—孕产妇；3—0-6岁儿童；4—贫困人口；5—7到64岁
export function orgName () {
  return [
    {
      'label': '测试机构1',
      'value': '45060001'
    },
    {
      'label': '测试机构2',
      'value': '45060002'
    },
    {
      'label': '测试机构3',
      'value': '45060003'
    },
    {
      'label': '测试机构4',
      'value': '45060004'
    },
    {
      'label': '测试机构5',
      'value': '45060005'
    },
    {
      'label': '测试机构6',
      'value': '45060006'
    }
  ]
}
export function rules () {
  return {
    userName: [{
      required: true,
      message: '请输入用户名'
    }],
    idCard: [{
      required: true,
      message: '请输入身份证'
    }],
    age: [{
      required: true,
      message: '字段值不可为空'
    }],
    nation: [{
      required: true,
      message: '请选择民族'
    }],
    phone: [{
      required: true,
      message: '亲输入手机号'
    }],
    gender: [{
      required: true,
      message: '请选择性别'
    }],
    birthday: [{
      required: true,
      message: '请选择出生日期'
    }],
    live_type: [{
      required: true,
      message: '请选择居住类型'
    }],
    blood_type: [{
      required: true,
      message: '请选择血型'
    }],
    person_type: [{
      required: true,
      message: '请选择建档类型'
    }],
    address: [{
      required: true,
      message: '请输入居住地址'
    }]
  }
}
export function personType () {
  return [
    {
      'label': '老年人',
      'value': '1'
    },
    {
      'label': '孕产妇',
      'value': '2'
    },
    {
      'label': '0-6岁儿童',
      'value': '3'
    },
    {
      'label': '5—7到64岁',
      'value': '4'
    }
  ]
}
export function genderType () {
  return [
    {
      'label': '男',
      'value': 1
    },
    {
      'label': '女',
      'value': 2
    }]
}
export function liveType () {
  return [
    {
      'label': '户籍',
      'value': 1
    },
    {
      'label': '非户籍',
      'value': 2
    }]
}
export function boolType () {
  return [
    {
      'label': 'A型',
      'value': 1
    },
    {
      'label': 'B型',
      'value': 2
    },
    {
      'label': 'O型',
      'value': 3
    },
    {
      'label': 'AB型',
      'value': 4
    },
    {
      'label': '不详',
      'value': 5
    }]
}
export function nationList () {
  return [
    {
      'label': '布依族',
      'value': '布依族'
    },
    {
      'label': '汉族',
      'value': '汉族'
    },
    {
      'label': '回族',
      'value': '回族'
    },
    {
      'label': '蒙古族',
      'value': '蒙古族'
    },
    {
      'label': '朝鲜族',
      'value': '朝鲜族'
    },
    {
      'label': '满族',
      'value': '满族'
    },
    {
      'label': '苗族',
      'value': '苗族'
    },
    {
      'label': '瑶族',
      'value': '瑶族'
    },
    {
      'label': '藏族',
      'value': '藏族'
    },
    {
      'label': '侗族',
      'value': '侗族'
    },
    {
      'label': '维吾尔族',
      'value': '维吾尔族'
    },
    {
      'label': '壮族',
      'value': '壮族'
    },
    {
      'label': '布依族',
      'value': '彝族'
    }
  ]
}

// 计算年龄
export function getAge (strBirthday) {
  /* 根据出生日期算出年龄 */
  let returnAge
  let strBirthdayArr = strBirthday.split('-')
  let birthYear = strBirthdayArr[0]
  let birthMonth = strBirthdayArr[1]
  let birthDay = strBirthdayArr[2]

  let d = new Date()
  let nowYear = d.getFullYear()
  let nowMonth = d.getMonth() + 1
  let nowDay = d.getDate()

  if (nowYear === birthYear) {
    returnAge = 0// 同年 则为0岁
  } else {
    let ageDiff = nowYear - birthYear // 年之差
    if (ageDiff > 0) {
      if (nowMonth === birthMonth) {
        let dayDiff = nowDay - birthDay// 日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      } else {
        let monthDiff = nowMonth - birthMonth// 月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1
        } else {
          returnAge = ageDiff
        }
      }
    } else {
      returnAge = -1// 返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge.toString() + '岁'// 返回周岁年龄
}

// 性别处理
export function handleGender (gender) {
  let sex
  switch (gender) {
    case '1':
    case 1:
      sex = '男'
      break
    case '2' :
    case 2:
      sex = '女'
      break
    default :
      sex = '未知'
      break
  }
  return sex
}
export const handlefForMatTime = (utc_datetime) =>{
    //   // 转为正常的时间格式 年-月-日 时:分:秒
    // let new_datetime = utc_datetime.split("T")[0] + " " + utc_datetime.split("T")[1].split(".")[0];
    //
    // // 处理成为时间戳
    // let timeStamp = new Date(new_datetime.replace(/-/g, '/')).getTime();
    // timeStamp = timeStamp / 1000;
    // // 增加8个小时，北京时间比utc时间多八个时区
    // timeStamp = timeStamp + 8 * 60 * 60;
    //
    // // 时间戳转为时间
    // let date = new Date(parseInt(timeStamp.toString()) * 1000);
    // let YY = date.getFullYear() + '-';
    // let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    // let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    // let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    // let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    // let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    // return YY + MM + DD + " " + hh + mm + ss;
   let date = new Date(utc_datetime);
    return date.getFullYear() + "-" +
      ((date.getMonth() + 1)<10 ? '0' + (date.getMonth() + 1):(date.getMonth() + 1)) + "-" +
      (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + " " +
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}
