let list1 = [{
    id: 1,
    abbreviation: 'ALT',
    name: '丙氨酸氨基转移酶',
    result: '22.1',
    hint: '',
    reference: '6~35',
    units: 'U/L'
  },
  {
    id: 2,
    abbreviation: 'AST',
    name: '天门冬氨酸氨基转移酶',
    result: '22.0',
    hint: '',
    reference: '15~40',
    units: 'U/L'
  },
  {
    id: 3,
    abbreviation: 'TP',
    name: '总蛋白',
    result: '73.3',
    hint: '',
    reference: '60~80',
    units: 'g/L'
  },
  {
    id: 4,
    abbreviation: 'ALB',
    name: '白蛋白',
    result: '40.7',
    hint: '',
    reference: '38~48',
    units: 'g/L'
  },
  {
    id: 5,
    abbreviation: 'A/G',
    name: '白球比',
    result: '1.49',
    hint: '↓',
    reference: '1.50~2.50',
    units: 'SOD'
  },
  {
    id: 6,
    abbreviation: 'TBIL',
    name: '总胆胆红素',
    result: '13.1',
    hint: '',
    reference: '3.4～17.1',
    units: 'μmol/L'
  },
  {
    id: 7,
    abbreviation: 'DBIL',
    name: '直接胆红素',
    result: '3.0',
    hint: '',
    reference: '1.7-10.2',
    units: 'μmol/L'
  },
  {
    id: 8,
    abbreviation: 'TBA',
    name: '胆酸汁',
    result: '2.6',
    hint: '',
    reference: '<10.0',
    units: 'μmol/L'
  },
  {
    id: 9,
    abbreviation: 'ALP',
    name: '碱性磷酸酶',
    result: '111.3',
    hint: '',
    reference: '40.0-150.0',
    units: 'U/L'
  },
  {
    id: 10,
    abbreviation: 'γ-GT',
    name: 'γ-谷氨酰转肽酶',
    result: '15.2',
    hint: '',
    reference: '5.0～54.0',
    units: 'U/L'
  },
  {
    id: 11,
    abbreviation: 'PA',
    name: '前白蛋白',
    result: '197',
    hint: '↓',
    reference: '200.0~360.0',
    units: 'mg/L'
  },
  {
    id: 12,
    abbreviation: 'AFU',
    name: 'α-L-岩藻糖苷酶',
    result: '31.0',
    hint: '',
    reference: '12.0~40.0',
    units: 'U/L'
  },
  {
    id: 13,
    abbreviation: 'CG',
    name: '甘胆酸',
    result: '0.44',
    hint: '',
    reference: '0.4~2.98',
    units: 'mg/L'
  },
  {
    id: 14,
    abbreviation: 'CER',
    name: '铜蓝蛋白',
    result: '220.7',
    hint: '',
    reference: '150.0～600.0',
    units: 'mg/L'
  },
  {
    id: 15,
    abbreviation: 'HP',
    name: '触珠蛋白',
    result: '1.66',
    hint: '',
    reference: '0.3-2.0',
    units: 'mg/dl'
  },
  {
    id: 16,
    abbreviation: 'AGP',
    name: 'α-1酸性糖蛋白',
    result: '88.20',
    hint: '',
    reference: '50.00~130.00',
    units: 'mg/dl'
  },
  {
    id: 17,
    abbreviation: 'SOD',
    name: '超氧化物歧化酶',
    result: '230',
    hint: '↑',
    reference: '120~220',
    units: 'U/mL'
  },
  {
    id: 18,
    abbreviation: 'BUN',
    name: '尿素氮',
    result: '3.0',
    hint: '',
    reference: '2.9~7.5',
    units: 'mmol/L'
  },
  {
    id: 19,
    abbreviation: 'CRE',
    name: '肌酐',
    result: '50.7',
    hint: '↓',
    reference: '54.0-106.0',
    units: 'μmol/L'
  },
]

let list2 = [{
    id: 1,
    abbreviation: 'UA',
    name: '尿酸',
    result: '422.0',
    hint: '↑',
    reference: '149～416',
    units: 'umol/L'
  },
  {
    id: 2,
    abbreviation: 'β2-MG',
    name: '血清β2-微球蛋白',
    result: '1.9',
    hint: '',
    reference: '0.80～2.40',
    units: 'mg/L'
  },
  {
    id: 3,
    abbreviation: 'Cys C',
    name: '胱抑素C',
    result: '0.83',
    hint: '',
    reference: '0.51～1.09',
    units: 'mg/L'
  },
  {
    id: 4,
    abbreviation: 'RBP',
    name: '视黄醇结合蛋白',
    result: '37.7',
    hint: '',
    reference: '36.0~56.0',
    units: 'mg/L'
  },
  {
    id: 5,
    abbreviation: 'C1q',
    name: '补体c1q',
    result: '260.3',
    hint: '↑',
    reference: '155.0~255.0',
    units: 'mg/L'
  },
  {
    id: 6,
    abbreviation: 'TCHO',
    name: '总胆固醇',
    result: '3.3',
    hint: '',
    reference: '3.0~5.2',
    units: 'mmol//L'
  },
  {
    id: 7,
    abbreviation: 'TG',
    name: '甘油三酯',
    result: '1.8',
    hint: '↑',
    reference: '0.45~1.69',
    units: 'mmol//L'
  },
  {
    id: 8,
    abbreviation: 'HDL',
    name: '高密度脂蛋白',
    result: '1.8',
    hint: '',
    reference: '0.70~2.00',
    units: 'mmol//L'
  },
  {
    id: 9,
    abbreviation: 'LDL',
    name: '低密度脂蛋白',
    result: '1.91',
    hint: '',
    reference: '<3.12',
    units: 'mmol//L'
  },
  {
    id: 10,
    abbreviation: 'LPA',
    name: '脂蛋白',
    result: '6.91',
    hint: '',
    reference: '0~30.00',
    units: 'mg/dl'
  },
  {
    id: 11,
    abbreviation: 'Hcy',
    name: '高半胱氨酸',
    result: '17.0',
    hint: '↑',
    reference: '<15.0',
    units: 'mg/dl'
  },
  {
    id: 12,
    abbreviation: 'NEFA',
    name: '游离脂肪酸',
    result: '930.7',
    hint: '↑',
    reference: '135.0~808.0',
    units: 'umol/L'
  },
  {
    id: 13,
    abbreviation: 'NEFA',
    name: '葡萄糖',
    result: '6.5',
    hint: '↑',
    reference: '3.92~6.16',
    units: 'mmol/L'
  },
]

let list3 = [
  {
    id: 1,
    abbreviation: ' ηb200',
    name: '全血粘度200',
    result: '4.5',
    hint: '',
    reference: '3.20~5.00',
    units: 'mP a·s'
  },
  {
    id: 2,
    abbreviation: ' ηb30',
    name: '全血粘度30',
    result: '5.5',
    hint: '',
    reference: '4.60~6.50',
    units: 'mP a·s'
  },
  {
    id: 3,
    abbreviation: ' ηb5',
    name: '全血粘度5',
    result: '10.01',
    hint: '',
    reference: '7.50~10.50',
    units: 'mP a·s'
  },
  {
    id: 4,
    abbreviation: ' ηb1',
    name: '全血粘度1',
    result: '22.75',
    hint: '↑',
    reference: '7.50~22.50',
    units: 'mP a·s'
  },
  {
    id: 5,
    abbreviation: ' ηb',
    name: '血浆粘度',
    result: '1.33',
    hint: '',
    reference: '1.27~1.70',
    units: 'mP a·s'
  },
  {
    id: 6,
    abbreviation: ' Hct',
    name: '红细胞比容',
    result: '0.50',
    hint: '',
    reference: '0.40~0.50',
    units: ''
  },
  {
    id: 7,
    abbreviation: 'ESR',
    name: '红细胞沉降率',
    result: '5.00',
    hint: '',
    reference: '0.00~10.00',
    units: 'mm/h'
  },
]

let list4 = [
  {
    id: 1,
    abbreviation: 'WBC',
    name: '白细胞计数',
    result: '9.4',
    hint: '',
    reference: '3.2~9.5',
    units: '10^9/L'
  },
  {
    id: 2,
    abbreviation: 'RBC',
    name: '红细胞计数',
    result: '6.1',
    hint: '↑',
    reference: '4.5~5.5',
    units: '10^12/L'
  },
  {
    id: 3,
    abbreviation: 'Hemoglobin',
    name: '血红蛋白检查',
    result: '160.0',
    hint: '',
    reference: '120.0~160.0',
    units: 'g/L'
  },
  {
    id: 4,
    abbreviation: 'HCT',
    name: '血细胞比容值测定',
    result: '50.0',
    hint: '',
    reference: '41.0~53.0',
    units: 'g/L'
  },
  {
    id: 5,
    abbreviation: 'MCH',
    name: '红细胞平均血红蛋白量',
    result: '25.6',
    hint: '↓',
    reference: '26.0~34.0',
    units: 'pg/Cell'
  },
  {
    id: 6,
    abbreviation: 'MCV',
    name: '红细胞平均体积',
    result: '80.0',
    hint: '',
    reference: '80.0~100.0',
    units: 'fL'
  },
  {
    id: 7,
    abbreviation: 'MCHC',
    name: '红细胞平均血红蛋白浓度',
    result: '332.0',
    hint: '',
    reference: '310.0~370.0',
    units: 'g/L'
  },
  {
    id: 8,
    abbreviation: 'RDW',
    name: '红细胞体积分布宽度',
    result: '15.0',
    hint: '↑',
    reference: '11.5~14.5',
    units: '%'
  },
  {
    id: 9,
    abbreviation: 'Platelets',
    name: '血小板计数',
    result: '275',
    hint: '',
    reference: '150.0~350.0',
    units: '10^9/L'
  },
]

export {
  list1,
  list2,
  list3,
  list4
}