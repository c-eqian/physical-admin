<template>
  <div class="user-data-contain" id="user-data-contain">

    <div style="width: 100% !important;display: flex;justify-content:space-between">
    <pageHeader v-if="isSearch" @goBack="goBack" :contentTitle="contentTitle"></pageHeader>
    <el-autocomplete class="input-search" :placeholder="placeholder" :debounce=0
                @select="handleSelect"
                :fetch-suggestions="querySearch"
                  @keyup.enter.native="onKeyDown"
                autocomplete="on" clearable v-model="inputSearch">
        <el-button slot="append" icon="el-icon-search"
         @click="searchBtn">
         </el-button>
    </el-autocomplete>
      <el-row>
      <el-col :span="24">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd" >新增</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" >批量删除</el-button>
        </div>
      </el-col>
    </el-row>
    </div>
    <div class="user-data-table">
      <el-table
        class="tableBox"
        :data="tableData"
        border
        stripe
        @row-dblclick="rowDoubleClicked"
        :header-cell-style="{
                       'background-color': '#F9F9F9',
                       'text-align':'center',
                         'font-size': '1rem'
        }"
        :cell-style="{'text-align':'center', 'font-size': '1rem'}"
        height=600px
        highlight-current-row
        style="width: 100%">
        <el-table-column
          fixed
          prop="ids"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          sortable
          width="100">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          width="80">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="100">
        </el-table-column>
        <el-table-column
          prop="idcard"
          label="证件"
          width="200">
        </el-table-column>
        <el-table-column
          prop="nation"
          label="民族"
          width="100">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          width="150">
        </el-table-column>
        <el-table-column
          prop="live_type"
          label="居住类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="org_name"
          label="所属机构"
          width="100">
        </el-table-column>
        <el-table-column
          prop="creatime"
          sortable
          label="建档时间"
          width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="viewUserClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userTotal">
    </el-pagination>
    <user-info @closeDialogVisible="closeDialogVisible" @user-info-form="dialogCallback" :dialogVisible="dialogVisible" :userInfoForm.sync="userInfo" ></user-info>
  </div>
</template>

<script>
import {getAge, handleGender} from '@/utils/plugin/utils'
import {deepClone} from '@/utils/handle'
import pageHeader from '@/components/physical/pageHeader/pageHeader'
import userInfo from '@/components/physical/user-info/index'
import '../static/my-css.css'

export default {
  name: 'userList',
  components: {
    pageHeader,
    // eslint-disable-next-line vue/no-unused-components
    userInfo
  },
  data () {
    return {
      contentTitle: '搜索',
      userTotal: 0, // 总数据
      currentPage: 1, // 当前页
      pageSize: 50, // 每页数据
      org_code: 0, // 机构代码
      inputSearch: '', // 输入搜索
      tableData: [],
      isShowBack: false, // 是否显示返回按钮
      isSearch: false, // 是否搜索状态
      dialogVisible: false,
      userInfo: {},
      searchSelect: [
        { id: 1, value: '111' },
        { id: 2, value: '222' },
        { id: 3, value: '333' },
        { id: 4, value: '444' }
      ],
      placeholder: '支持姓名、证件、机构搜索'
    }
  },
  async mounted () {
    this.org_code = this.$store.state.BaseStore.user.org_id
    await this.getTotal()// 获取总数
    await this.getUserList()// 获取用户数据
  },
  methods: {
    dialogCallback(value){
      this.userInfo = {}
    },
    handleAdd () { // 新增
      this.dialogVisible = !this.dialogVisible
    },
    requestSearch () { // 搜索请求
      this.$get(
        '/likeSearch',
        {
          searchText: this.inputSearch,
          page: this.currentPage,
          limit: this.pageSize
        }
      ).then(res => {
        if (res.data.status === 200) {
          if (!this.isSearch) {
            this.isSearch = true
            this.isShowBack = !this.isShowBack// 取反
          }

          this.handleUserData(res.data.result)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    onKeyDown (e) { // 监听键盘回车键
      if (e.keyCode === 13 && this.inputSearch !== '') {
        this.pageSize = 50
        this.currentPage = 1
        this.search_result_total()
        this.requestSearch()
      } else {
        this.messageTip('请输入搜索内容')
      }
    },
    // 搜索
    searchBtn () {
      if (this.inputSearch !== '') {
        this.pageSize = 50
        this.currentPage = 1
        this.search_result_total()
        this.requestSearch()
      }
    },
    querySearch (queryString, cb) { // 输入框建议回调
      let dataList = [ // 也可以在后端接口动态获取
        { id: 1, value: '111' },
        { id: 2, value: '222' },
        { id: 3, value: '333' },
        { id: 4, value: '444' }
      ]
      var results = queryString ? dataList.filter(this.createFilter(queryString)) : dataList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    // 建议回调选中
    handleSelect (item) {
      console.log(item)
    },
    // 每页数据改变
    handleSizeChange (val) {
      this.pageSize = val
      if (this.isSearch) {
        this.requestSearch()
      } else {
        this.getUserList()
      }
    },
    // 切换当前页
    handleCurrentChange (val) {
      this.currentPage = val
      if (this.isSearch) {
        this.requestSearch()
      } else {
        this.getUserList()
      }
    },
    // 搜索的结果数
    search_result_total () {
      this.$get('/SearchTotal', {
        searchText: this.inputSearch
      }).then(res => {
        console.log(res.data)
        if (res.data.status === 200) {
          var total = res.data.result.total
          if (total === 0 || total === '0') {
            this.messageTip('无数据')
          } else {
            this.userTotal = total
          }
        } else {
          console.log(res.data)
          this.messageTip(res.data.msg)
        }
      })
    },
    closeDialogVisible () { // 关闭弹窗
      this.dialogVisible = false
    },
    // 用户总数
    getTotal () {
      this.$get('/userTotal', {
        org_code: this.org_code
      }).then(res => {
        if (res.data.status === 200) {
          this.userTotal = res.data.result.total
        }
      })
    },
    // 获取用户数据
    getUserList () {
      this.$get('/userList', {
        org_code: this.org_code,
        page: this.currentPage,
        limit: this.pageSize
      }).then(res => {
        if (res.data.status === 200) {
          this.handleUserData(res.data.result)
        }
      })
    },
    // 双击某行
    rowDoubleClicked (row, column, event) {
      console.log(row, column, event)
    },
    viewUserClick (row) {
      // this.$store.commit('BaseStore/updateUserInfoForm', row)
      // 深度拷贝
      this.userInfo = deepClone(row)
      this.dialogVisible = !this.dialogVisible
    },
    // 处理用户数据
    handleUserData (userData) {
      for (var index in userData) {
        userData[index].ids = (parseInt(index) + 1).toString() // 添加编号
        userData[index].gender = handleGender(userData[index].gender)
        userData[index].live_type = userData[index].live_type === 1 ? '户籍' : '非户籍'
        userData[index].age = getAge(userData[index].birthday)
      }
      this.tableData = userData
    },
    goBack () { // 页面返回按钮触发
      this.isSearch = false
      this.isShowBack = false
      this.getTotal()// 获取总数
      this.getUserList()// 获取用户数据
    },
    messageTip (msg = '无数据') { // 提示窗口
      this.$message({
        message: msg,
        type: 'warning',
        duration: 1500
      })
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .user-data-contain .el-input{
  width: 100%;
}
.user-data-contain {
  width: 100%;
  height: 690px;
  overflow: hidden;

}
.user-data-table {
  overflow: hidden;
  height: 600px;
}

</style>
