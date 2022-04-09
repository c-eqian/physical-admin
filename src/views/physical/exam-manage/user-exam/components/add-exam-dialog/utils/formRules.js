const diaLogFormRules= {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          lt: [
            { type: 'array', required: true, message: '请至少选择一个体检项目', trigger: 'change' }
          ],
        }
const form = {
         userId: '',
        idCard: '',
        name: '',
        gender: 2,
        phone: '',
        nation: '',
        contact_name: '',
        contact_phone: '',
        live_type: '',
        blood_type: '',
        cur_address: '',
        org_code: '',
        org_name: '',
        status: '',
        creator: '',
        last_updator: '',
        creatime: '',
        birthday: '',
        last_updatime: '',
        codeList:{
          total:'',
          lt:[]
        },
        list:[]
}
        export default {diaLogFormRules, form}
