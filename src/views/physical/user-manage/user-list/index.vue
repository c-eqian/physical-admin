<template>
  <div class="user-data-contain" id="user-data-contain">

    <div style="width: 100% !important;display: flex;justify-content:space-between">
      <!--      <pageHeader v-if="isSearch" @goBack="goBack" :contentTitle="contentTitle"></pageHeader>-->
      <el-autocomplete class="input-search" :placeholder="placeholder" :debounce=0
                       @select="handleSelect"
                       :fetch-suggestions="querySearch"
                       :trigger-on-focus="false"
                       @keyup.enter.native="onKeyDown"
                       autocomplete="on" clearable v-model="inputSearch">
        <el-button slot="append" icon="el-icon-search"
                   @click="searchBtn">
        </el-button>
      </el-autocomplete>
      <el-row>
        <el-col :span="24">
          <div class="tool-box">
            <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">新增</el-button>
            <el-button type="danger" @click="deleteListClicked" icon="el-icon-delete" size="small">批量删除</el-button>
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
        v-loading="tableLoading"
        @row-dblclick="rowDoubleClicked"
        :header-cell-style="{
                       'background-color': '#F9F9F9',
                       'text-align':'center',
                         'font-size': '1rem'
        }"
        :cell-style="{'text-align':'center', 'font-size': '1rem'}"
        height=600px
        @selection-change="handleSelectionChange"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
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
            <el-button v-if="!scope.row.cardId" type="text"
                       @click="addCard(scope.row)"
                       size="small">绑卡
            </el-button>
            <el-button v-else type="text" style="color: red"
                       @click="deleteCard(scope.row)"
                       size="small">解绑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userTotal">
    </el-pagination>
    <user-info @closeDialogVisible="closeDialogVisible"
               @user-info-form="dialogCallback"
               @add-success="addSuccess"
               :dialogVisible="dialogVisible"
               :userInfoForm.sync="userInfo"
               :type="openType">

    </user-info>
    <add-card
      :addCardVisible="addCardVisible"
      :rowForm="rowData"
      @update-visible="updateVisible"
    >
    </add-card>
  </div>
</template>

<script>
import {getAge, handleGender} from '@/utils/plugin/utils'
import {deepClone} from '@/utils/handle'
import pageHeader from '@/components/physical/pageHeader/pageHeader'
import userInfo from '@/components/physical/user-info/index'
import addCard from '../components/add-card/index'
import '../static/my-css.css'

export default {
  name: 'userList',
  components: {
    pageHeader,
    addCard,
    // eslint-disable-next-line vue/no-unused-components
    userInfo
  },
  data() {
    return {
      openType: true,
      selectionList: [],
      tableLoading: false,
      contentTitle: '搜索',
      userTotal: 0, // 总数据
      currentPage: 1, // 当前页
      pageSize: 20, // 每页数据
      org_code: 0, // 机构代码
      inputSearch: '', // 输入搜索
      tableData: [],
      isShowBack: false, // 是否显示返回按钮
      isSearch: false, // 是否搜索状态
      dialogVisible: false,
      addCardVisible: false,
      userInfo: {},
      rowData: {},
      dataList: [],
      searchSelect: [
        {id: 1, value: '111'},
        {id: 2, value: '222'},
        {id: 3, value: '333'},
        {id: 4, value: '444'}
      ],
      placeholder: '支持姓名、证件、机构搜索'
    }
  },
  async mounted() {
    this.org_code = this.$store.state.BaseStore.user.org_id
    // await this.getTotal()// 获取总数
    await this.getUserList()// 获取用户数据
  },
  methods: {
    async deleteCard(row) {
      await this.$confirm(`【${row.name}】绑定的【${row.cardId}】将被解除，是否继续？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$get('/delete-card', {
          userId: row.userId
        }).then(res => {
          this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
          setTimeout(() => {
            this.getUserList()
          }, 1500)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        });
      });
    },
    addCard(row) {
      console.log(row)
      // 深度拷贝
      this.rowData = deepClone(row)
      this.addCardVisible = true
    },
    updateVisible() {
      this.addCardVisible = false
      setTimeout(() => {
        this.getUserList()
      }, 1500)
    },
    async deleteListClicked() { // 删除操作
      if (this.selectionList.length > 0) {
        let array = []
        this.selectionList.forEach(item => {
          array.push({idCard: item.idcard})
        })
        await this.$post('/delete-user', {
          list: JSON.stringify(array)
        }).then(res => {
          this.messageTip(res.data.msg, 'success')
          setTimeout(() => {
            this.getUserList()
          }, 1500)
        })
      } else {
        this.messageTip('请至少选择一项', 'error')
      }
    },
    handleSelectionChange(val) {
      this.selectionList = val
      console.log(this.selectionList)
    },
    dialogCallback(value) {
      this.openType = true
      this.userInfo = {}
    },
    addSuccess() {
      this.getUserList()// 获取用户数据
    },
    handleAdd() { // 新增
      this.dialogVisible = !this.dialogVisible
    },
    async requestSearch(searchText = '') { // 搜索请求
      this.tableLoading = true
      await this.$get(
        '/likeSearch',
        {
          searchText: searchText,
          page: this.currentPage,
          limit: this.pageSize,
          timestamp: new Date(),
          noLoading: true
        }
      ).then(res => {
        if (res.data.status === 200) {
          if (!this.isSearch) {
            this.isSearch = true
            this.isShowBack = !this.isShowBack// 取反
          }
          this.userTotal = res.data.result.total
          this.handleUserData(res.data.result.lt)
          console.log(res.data.result.lt, 5558)
        } else {
          this.messageTip(res.data.msg, 'error')
        }
      }).catch(error => {
        console.log(error)
      })
      this.tableLoading = false
    },
    onKeyDown(e) { // 监听键盘回车键
      if (e.keyCode === 13 && this.inputSearch !== '') {
        this.pageSize = 20
        this.currentPage = 1
        // this.search_result_total()
        this.requestSearch(this.inputSearch)
      } else {
        this.messageTip('请输入搜索内容')
      }
    },
    // 搜索
    searchBtn() {
      this.pageSize = 20
      this.currentPage = 1
      // this.search_result_total()
      // this.requestSearch(this.inputSearch)
      if (this.inputSearch !== '') {
        this.pageSize = 20
        this.currentPage = 1
        // this.search_result_total()
        this.requestSearch(this.inputSearch)
      } else {
        this.getUserList()
      }
    },
    async querySearch(queryString, cb) { // 输入框建议回调
      if (!queryString) return
      console.log(queryString)
      await this.$get('/searchSuggestion', {
        keyWords: queryString,
        noLoading: true
      }).then(res => {
        if (res.data.status === 200) {
          this.dataList = []
          // this.dataList = res.data.result
          res.data.result.forEach(item => {
            item.value = item.name
            this.dataList.push(item)
          })
        }
        console.log(this.dataList)
      })
      var results = queryString ? this.dataList.filter(this.createFilter(queryString)) : this.dataList
      // 调用 callback 返回建议列表的数据
      console.log(results)
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    // 建议回调选中
    handleSelect(item) {
      this.requestSearch(item.name)
    },
    // 每页数据改变
    handleSizeChange(val) {
      this.pageSize = val
      if (this.isSearch) {
        this.requestSearch(this.inputSearch)
      } else {
        this.getUserList()
      }
    },
    // 切换当前页
    handleCurrentChange(val) {
      this.currentPage = val
      if (this.isSearch) {
        this.requestSearch(this.inputSearch)
      } else {
        this.getUserList()
      }
    },
    // 搜索的结果数
    search_result_total() {
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
    closeDialogVisible() { // 关闭弹窗
      this.openType = true
      this.dialogVisible = false
    },
    // // 用户总数
    // getTotal () {
    //   this.$get('/userTotal', {
    //     org_code: this.org_code
    //   }).then(res => {
    //     if (res.data.status === 200) {
    //       this.userTotal = res.data.result.total
    //     }
    //   })
    // },
    // 获取用户数据
    async getUserList() {
      this.tableLoading = true
      await this.$get('/userList', {
        org_code: this.org_code,
        page: this.currentPage,
        limit: this.pageSize,
        timestamp: new Date(),
        noLoading: true
      }).then(res => {
        console.log(res)
        if (res.data.status === 200) {
          this.handleUserData(res.data.result.lt)
          this.userTotal = res.data.result.total
        }
      })
      this.tableLoading = false
    },
    // 双击某行
    rowDoubleClicked(row, column, event) {
      console.log(row, column, event)
    },
    viewUserClick(row) {
      // this.$store.commit('BaseStore/updateUserInfoForm', row)
      // 深度拷贝
      this.userInfo = deepClone(row)
      this.openType = false
      this.dialogVisible = !this.dialogVisible
    },
    // 处理用户数据
    handleUserData(userData) {
      this.tableData = []
      console.log(userData)
      try {
        for (var index in userData) {
          userData[index].gender = handleGender(userData[index].gender)
          userData[index].live_type = userData[index].live_type === 1 ? '户籍' : '非户籍'
          userData[index].age = getAge(userData[index].birthday)
        }
        this.tableData = userData
      } catch (e) {
        this.messageTip('数据解析异常')
      }
    },
    goBack() { // 页面返回按钮触发
      this.isSearch = false
      this.isShowBack = false
      // this.getTotal()// 获取总数
      this.getUserList()// 获取用户数据
    },
    messageTip(msg = '无数据', type = 'warning') { // 提示窗口
      this.$message({
        message: msg,
        type: type,
        duration: 1500
      })
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .user-data-contain .el-input {
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
