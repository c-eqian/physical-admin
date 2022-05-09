import Mock from 'mockjs'

const Random = Mock.Random
/**
 * 大便潜血
 */
const DTJ005 = () => {
  return Mock.mock({
    data: [
  {
    id: 1,
    abbreviation: 'U-LEU',
    ItemName: '大便潜血',
    Lis_Result: Random.float(0, 7, 2, 2),
    hint: '',
    Lis_ReferenceRange: '2.8<6.1',
    FeeItemCode: 'TJ005',
    Lis_ResultUnit: 'mmol/L',
    ItemCode: '931',
  },
    ]
  })

}
Mock.mock('/api/DTJ005', DTJ005)
/**
 * 空腹血糖
 */
const KTJ003 = () => {
  return Mock.mock({
    data: [
  {
    id: 1,
    abbreviation: 'U-LEU',
    ItemName: '空腹血糖',
    Lis_Result: Random.float(1, 8, 2, 2),
    hint: '',
    Lis_ReferenceRange: '2.8<6.1',
    FeeItemCode: 'TJ003',
    Lis_ResultUnit: 'mmol/L',
    ItemCode: '125',
  },
    ]
  })

}
Mock.mock('/api/KTJ003', KTJ003)
/**
 * 乙肝表面抗原
 */
const YTJ007 = () => {
  return Mock.mock({
    data: [
        {
    id: 1,
    abbreviation: 'U-LEU',
    ItemName: '乙肝表面抗原',
    Lis_Result: Random.float(0, 2, 2, 2),
    hint: '',
    Lis_ReferenceRange: '<0.18',
    FeeItemCode: 'TJ007',
    Lis_ResultUnit: 'ng/ml',
    ItemCode: '3006',
  },
    ]
  })

}
Mock.mock('/api/YTJ007', YTJ007)

/**
 * 肾功能
 */
const STJ009 = () => {
  return Mock.mock({
    data: [
      {
        id: 1,
        abbreviation: 'U-LEU',
        ItemName: '血尿素氮',
        Lis_Result: Random.float(1, 10, 2, 2),
        hint: '',
        Lis_ReferenceRange: '3.2～7.0',
        FeeItemCode: 'TJ009',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '118',
      },
      {
        id: 2,
        abbreviation: 'U-LEU',
        ItemName: '血清肌酐',
        Lis_Result: Random.integer(50, 120),
        hint: '',
        Lis_ReferenceRange: '62～115/53～97',
        FeeItemCode: 'TJ009',
        Lis_ResultUnit: 'μmol/L',
        ItemCode: '119',
      },
      {
        id: 3,
        abbreviation: 'U-LEU',
        ItemName: '血钾浓度',
        Lis_Result: Random.integer(1, 10),
        hint: '',
        Lis_ReferenceRange: '<5',
        FeeItemCode: 'TJ009',
        Lis_ResultUnit: '',
        ItemCode: '131',
      },
      {
        id: 4,
        abbreviation: 'U-LEU',
        ItemName: '血钠浓度',
        Lis_Result: Random.integer(1, 10),
        hint: '',
        Lis_ReferenceRange: '<5',
        FeeItemCode: 'TJ009',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '132',
      },
    ]
  })

}
Mock.mock('/api/STJ009', STJ009)
/**
 * 糖化血红蛋白
 */
const TTJ006 = () => {
  return Mock.mock({
    data: [
      {
    id: 1,
    abbreviation: 'U-LEU',
    ItemName: '糖化血红蛋白',
    Lis_Result: Random.integer(0, 10),
    hint: '',
    Lis_ReferenceRange: '<5',
    FeeItemCode: 'TJ006',
    Lis_ResultUnit: '',
    ItemCode: '158',
  },
    ]
  })

}
Mock.mock('/api/TTJ006', TTJ006)
/**
 * 血常规
 */
const XTJ001 = () => {
  return Mock.mock({
    data: [
      {
        id: 1,
        abbreviation: 'HCT',
        ItemName: '白细胞',
        Lis_Result: Random.float(1, 15, 2, 2),
        hint: '',
        Lis_ReferenceRange: '4.0～10.0）',
        FeeItemCode: 'TJ001',
        Lis_ResultUnit: '10^9/L',
        ItemCode: '380',
      },
      {
        id: 2,
        abbreviation: 'Hb',
        ItemName: '血红蛋白',
        Lis_Result: Random.integer(110,170),
        hint: '',
        Lis_ReferenceRange: '120～160',
        FeeItemCode: 'TJ001',
        Lis_ResultUnit: 'g/L',
        ItemCode: '393',
      },
      {
        id: 3,
        abbreviation: 'XXB',
        ItemName: '血小板',
        Lis_Result: Random.integer(90,350),
        hint: '',
        Lis_ReferenceRange: '100～300',
        FeeItemCode: 'TJ001',
        Lis_ResultUnit: '10^9/L',
        ItemCode: '401',
      },
    ]
  })

}
Mock.mock('/api/XTJ001', XTJ001)
/**
 * 血脂四项
 */
const XTJ010 = () => {
  return Mock.mock({
    data: [
      {
        id: 1,
        abbreviation: 'TC',
        ItemName: '总胆固醇',
        Lis_Result: Random.float(1, 10, 2, 2),
        hint: '',
        Lis_ReferenceRange: '2.8～5.17',
        FeeItemCode: 'TJ010',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '100',
      },
      {
        id: 2,
        abbreviation: 'TG',
        ItemName: '甘油三脂',
        Lis_Result: Random.float(0, 3, 2, 2),
        hint: '',
        Lis_ReferenceRange: '0.56～1.7',
        FeeItemCode: 'TJ010',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '122',
      },
      {
        id: 3,
        abbreviation: 'HDL-C',
        ItemName: '血清高密度值蛋白胆固醇',
        Lis_Result: Random.float(0, 3, 2, 2),
        hint: '',
        Lis_ReferenceRange: '0.96～1.15',
        FeeItemCode: 'TJ010',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '123',
      },
      {
        id: 4,
        abbreviation: 'LDL-C',
        ItemName: '血清低密度值蛋白胆固醇',
        Lis_Result: Random.integer(0, 5),
        hint: '',
        Lis_ReferenceRange: '0～3',
        FeeItemCode: 'TJ010',
        Lis_ResultUnit: 'mmol/L',
        ItemCode: '124',
      },
    ]
  })

}
Mock.mock('/api/XTJ010', XTJ010)
/**
 * 肝功能
 * @type {function(): *}
 */
const GTJ008 = () => {
  return Mock.mock({
    data: [
      {
        id: 1,
        abbreviation: 'ALT',
        ItemName: '血清谷丙转氨酶',
        Lis_Result: Random.integer(1, 60),
        hint: '',
        Lis_ReferenceRange: '7-40',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'U/L',
        ItemCode: '107',
      },
      {
        id: 2,
        abbreviation: 'AST',
        ItemName: '血清谷草转氨酶',
        Lis_Result: Random.integer(1, 60),
        hint: '',
        Lis_ReferenceRange: '13-35',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'U/L',
        ItemCode: '108',
      },
      {
        id: 3,
        abbreviation: 'U-LEU',
        ItemName: '谷草/谷丙',
        Lis_Result: Random.integer(1, 40),
        hint: '',
        Lis_ReferenceRange: '0-23',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'μmol/L',
        ItemCode: '5053',
      },
      {
        id: 4,
        abbreviation: 'U-LEU',
        ItemName: '总胆红素',
        Lis_Result: Random.integer(1, 40),
        hint: '',
        Lis_ReferenceRange: '0-23',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'μmol/L',
        ItemCode: '784',
      },
      {
        id: 5,
        abbreviation: 'DBIL',
        ItemName: '结合胆红素',
        Lis_Result: Random.integer(1, 15),
        hint: '',
        Lis_ReferenceRange: '0-8',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'μmol/L',
        ItemCode: '2189',
      },
      {
        id: 6,
        abbreviation: 'ALB',
        ItemName: '白蛋白',
        Lis_Result: Random.integer(30, 70),
        hint: '',
        Lis_ReferenceRange: '40~55',
        FeeItemCode: 'TJ008',
        Lis_ResultUnit: 'g/L',
        ItemCode: '104',
      },
    ]
  })

}
Mock.mock('/api/GTJ008', GTJ008)
/**
 * 随机一般体检
 */
const randomBase = () => {
  return Mock.mock({
    org_code: Random.id(),
    Height: Random.integer(140, 200),
    Weight: Random.float(40, 100, 2, 2),
    name: Random.cname(),
    birthday: Random.integer(2, 70),
    gender: Random.integer(1, 2),
    idCard: Random.id(),
    VisitingDate: Random.now(),
    cur_address: Random.county(true),
    phone: Random.integer(10000000000, 99999999999),
    BMI: Random.float(10, 30, 2, 2),
    heart_rate: Random.integer(10, 200),
    Temperature: Random.float(25, 45, 2, 2),
    LSBP: Random.integer(60, 90),
    LDBP: Random.integer(80, 180)
  });
}
Mock.mock('/api/base-exam', randomBase)
/**
 * 随机尿常规
 */
const randomNCG = () => {
  return Mock.mock({
    result1: Random.integer(0, 10),
    "result2|+1": ["-", "+"],
    "result3|+1": ["-", "+"],
    "result4|+1": ["弱阳性", "阳性"],
    "result5|+1": ["-", "+"],
    "result6|+1": ["-", "+"],
    "result7|+1": ["-", "+"],
    result8: Random.float(1, 2, 0, 3),
    result9: Random.float(1, 10, 0, 3),
    "result10|+1": ["-", "+"],
    "result11|+1": ["-", "+"],
  });
}
Mock.mock('/api/random-urine', randomNCG)
// 登录
Mock.mock('/api/login', 'post', (option) => {
  let {username, password} = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

// 用户数据
const userData = () => {
  let users = []
  for (let i = 0; i < 10; i++) {
    let user = {
      'rid': Random.id(),
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1),
      'idCard': Random.id(),
      'uploadStatus': Random.integer(-1, 1),
      'doctorName': Random.cname(),
      'auditStatus': Random.integer(-1, 1),
      'examStatus': Random.integer(-1, 1),
      'remark': Random.cword(20),
      'org_name': Random.cword(10),
    }
    users.push(user)
  }
  return users
}
Mock.mock('/api/users', userData)

// 文章数据
const articleData = () => {
  let articles = []
  for (let i = 0; i < 20; i++) {
    let article = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'title': Random.csentence(),
      'author': Random.cname(),
      'content': Random.csentence(),
      'status': Random.integer(0, 1),
      'idCard': Random.id()
    }
    articles.push(article)
  }
  return articles
}
Mock.mock('/api/articles', articleData)
