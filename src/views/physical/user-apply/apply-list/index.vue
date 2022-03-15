<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-03-05 16:24:50
 * @LastEditors: 十三
 * @LastEditTime: 2022-03-08 23:02:32
-->
<template>
  <div class="notice-content" id="notice-content">
    <div class="notice-header">
      <pageHeader @goBack="goBack" :contentTitle="contentTitle"></pageHeader>
      <div class="notice-header-right">
        <el-dropdown split-button>
          选择机构
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in org_list" :key="item.org_code" :icon="item.icon">{{ item.org_name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <searchInput :placeholder="placeholder" @search="search"></searchInput>
        <el-badge :value="99" class="item" type="info">
          <el-tag type="info">今日处理</el-tag>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-tag type="primary">待审核</el-tag>
        </el-badge>
        <el-badge :value="2" class="item" type="success">
          <el-tag type="success">已通过</el-tag>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-tag type="warning">未通过</el-tag>

        </el-badge>
        <el-badge  :max="10" class="item">
          <el-button type="primary"
                     plain icon="el-icon-refresh-left"
                     @click="refreshClicked"
          >
            刷新
          </el-button>
        </el-badge>
      </div>
    </div>
    <div class="notice-table">
      <el-table
        size="mini"
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
          sortable
          width="60">
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          sortable
          width="130">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          sortable
          width="80">
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="证件"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="org_name"
          label="所属机构"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          label="申请类型"
          width="130">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              width="400"
              trigger="hover">
              <el-table :data="scope.row.apply_type">
                <el-table-column width="150" property="FeeItemCode" label="项目编码"></el-table-column>
                <el-table-column width="100" property="FeeItemName" label="项目名称"></el-table-column>
              </el-table>
              <el-button type="text" slot="reference" size="small">查看</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="apply_time"
          label="申请时间"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="complete_time"
          label="完成时间"
          sortable
          width="200">
        </el-table-column>
        <el-table-column
          prop="apply_status"
          sortable
          label="状态"
          width="100">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.apply_tag_style"
              disable-transitions>{{ scope.row.apply_tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="operator_name"
          sortable
          label="操作人"
          width="100">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-dropdown v-if="scope.row.apply_status===0" @command="dropdownCallback">
          <span class="el-dropdown-link">
            选择<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-success" style="color: green" :command="{data:scope.row,id:1}">同意
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-error" :command="{data:scope.row,id:-1}">拒绝</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button icon="el-icon-remove" v-else-if="scope.row.apply_status===1" @click="handleClick(scope.row)"
                       type="success"
                       size="small">
              撤销
            </el-button>
            <!--            <el-button type="text" size="small">编辑</el-button>-->
            <el-button icon="el-icon-s-help" v-else-if="scope.row.apply_status===-1" @click="handleClick(scope.row)"
                       type="primary"
                       size="small">复审
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="el-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotal">
      </el-pagination>
    </div>
    <el-dialog
      :title="dialogOptions.dialogTitle"
      :visible.sync="dialogOptions.DialogShow"
      width="30%"
      center>
      <el-input clearable @input="inputChange" type="textarea" v-model="dialogInput"
                :placeholder="dialogOptions.dialogPlaceholder"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogOptions.DialogShow = false">取 消</el-button>
    <el-button :disabled="dialogInputDisable" type="primary" @click="dialogClicked">确 定</el-button>
  </span>
    </el-dialog>
    <!--    <self-dialog :dialogOptions="dialogOptions" :show="show"></self-dialog>-->
  </div>

</template>

<script type="text/javascript">
import pageHeader from '@/components/physical/pageHeader/pageHeader'
import searchInput from '@/components/physical/searchInput/searchInput'
import '../static/notice.css'
// eslint-disable-next-line camelcase
import { handle_apply_data } from '@/utils/handle'
import selfDialog from '@/components/physical/self-dialog/index'

export default {
  name: '',
  data () {
    return {
      applyId: 0, // 申请ID
      contentTitle: '审核中心',
      userTotal: 0,
      placeholder: '支持姓名、证件、机构搜索',
      currentPage: 1, // 当前页
      pageSize: 20, // 每页数据
      org_code: 0, // 机构代码
      dialogInput: '',
      dialogInputDisable: true,
      show: false,
      dialogOptions: {},
      org_list: [
        { org_code: '45066', org_name: '测试机构1', icon: 'el-icon-first-aid-kit' },
        { org_code: '45067', org_name: '测试机构2', icon: 'el-icon-first-aid-kit' },
        { org_code: '45068', org_name: '测试机构3', icon: 'el-icon-first-aid-kit' },
        { org_code: '45069', org_name: '测试机构4', icon: 'el-icon-first-aid-kit' },
        { org_code: '45065', org_name: '测试机构5', icon: 'el-icon-first-aid-kit' },
        { org_code: '45063', org_name: '测试机构6', icon: 'el-icon-first-aid-kit' }
      ],
      tableData: []
    }
  },
  mounted () {
    this.get_apply_list()
  },
  methods: {
    /**
     * 刷新
     * */
    refreshClicked () {
      let timestamp = (new Date()).valueOf() // 获取时间戳
      this.get_apply_list(timestamp)
    },
    /**
     * 监听弹窗的输入框
     * */
    inputChange (value) {
      console.log(this.dialogInput)
      this.dialogInputDisable = value === ''
    },
    dialogClicked () {
      // eslint-disable-next-line no-unused-vars
      let userId = this.$store.state.BaseStore.user.user_id
      // eslint-disable-next-line no-unused-vars
      this.$get('/update-apply-status', {
        Id: this.applyId,
        apply_status: -1,
        operator_id: userId,
        apply_reason: this.dialogInput
      }).then(res => {
        this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
        if (res.data.status === 200) {
          this.dialogOptions = {
            DialogShow: false
          }
        }
      })
    },
    dropdownCallback (event) {
      this.applyId = event.data.id
      if (event.id === 1) {
        // eslint-disable-next-line no-template-curly-in-string
        this.confirmTip(`是否同意${event.data.name}的申请?`).then(res => {
          let userId = this.$store.state.BaseStore.user.user_id
          let params = {
            Id: this.applyId,
            apply_status: 1,
            operator_id: userId
          }
          this.getRequest('/update-apply-status', params).then(res => {
            this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
          })
        })
          .catch(() => {
            console.log('拒绝')
          })
      } else if (event.id === -1) {
        this.show = true
        this.dialogOptions = {
          dialogTitle: '说明拒绝原因',
          dialogPlaceholder: '请输入拒绝原因',
          DialogShow: true
        }
      }
    },
    search (text) { // 搜索
      this.currentPage = 1
      this.pageSize = 20
      this.$get('/searchApply', {
        searchText: text,
        page: this.currentPage,
        limit: this.pageSize
      }).then(res => {
        console.log(res.data)
      })
    },
    get_apply_list (timestamp = 0) { // 查询申请列表
      this.org_code = this.$store.state.BaseStore.user.org_id
      // eslint-disable-next-line no-unused-vars
      let params = {}
      if (timestamp === 0) {
        params = {
          org_code: this.org_code,
          page: this.currentPage,
          limit: this.pageSize
        }
      } else {
        params = {
          org_code: this.org_code,
          page: this.currentPage,
          limit: this.pageSize,
          timestamp: timestamp
        }
      }
      this.$get('/applyList', params).then(res => {
        console.log(res)
        if (res.data.status === 200) {
          this.userTotal = res.data.result.total
          this.tableData = handle_apply_data(res.data.result.lt)
        }
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.get_apply_list()
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.get_apply_list()
    },
    rowDoubleClicked (row, column, event) { // 双击某行
      console.log(row, column, event)
    },
    handleClick (row) { // 右侧操作按钮
      let userId = this.$store.state.BaseStore.user.user_id
      let params = {
        Id: row.id,
        apply_status: 0,
        operator_id: userId
      }
      this.getRequest('/update-apply-status', params).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: res.data.status === 200 ? 'success' : 'error'
        })
      })
    },
    toBack () {
      this.$router.go(-1)
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    goBack () {
      this.$router.go(-1)
    },
    /**
     *信息弹窗提示
     * */
    messageTip (msg, type = 'success') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
    /**
     * 弹窗提示确认
     */
    confirmTip (msg) {
      return this.$confirm(`${msg}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    /**
     * 二次封装请求
     */
    getRequest (url, data) {
      return this.$get('/update-apply-status', data)
    }
  },
  components: {
    pageHeader,
    searchInput,
    // eslint-disable-next-line vue/no-unused-components
    selfDialog
  }
}
</script>
<style>

</style>
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.notice-table {
  width: 62.5rem;
}

</style>
