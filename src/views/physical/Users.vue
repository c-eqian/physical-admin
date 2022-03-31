<template>
  <div class="user-box">
    <el-row>
      <el-col :span="12">
        <div class="tool-box">
          <searchInput :placeholder="placeholder" @search="search"></searchInput>
        </div>
      </el-col>
      <el-col>
        <div class="exam-card">

          <el-form class="demo-form-inline">
            <el-form-item label="全部">
              <span>356</span>
            </el-form-item>
            <el-form-item label="已上传">
              <span>356</span>
            </el-form-item>
            <el-form-item label="未上传">
              <span>356</span>
            </el-form-item>
            <el-form-item label="已审核">
              <span>365</span>
            </el-form-item>
            <el-form-item label="已驳回">
              <span>356</span>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-table
      highlight-current-row
      :data="users"
      height="550"
      border
      @selection-change="selectChange"
      style="width: 100%">
      <el-table-column
        sortable
        prop="rid"
        label="体检编号"
        fixed
        align="center"
        min-width="180">
        <template scope="scope">
          <router-link to="">
            {{ scope.row.rid }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        sortable
        prop="date"
        label="体检日期"
        align="center"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phone"
        align="center"
        label="证件号码"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        min-width="150"
        label="体检单位">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        min-width="150"
        label="体检医生">
      </el-table-column>

      <el-table-column
        align="center"
        prop="examStatus"
        label="体检状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.examStatus===1?'success':'primary'">
            {{ scope.row.examStatus === 1 ? "已完成" : "体检中" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="auditStatus"
        label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.auditStatus===1" type="success">
            已审核
          </el-tag>
          <el-tag v-if="scope.row.auditStatus===0" type="primary">
            待审核
          </el-tag>
          <el-tag v-if="scope.row.auditStatus===-1" type="warning">
            未通过
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="uploadStatus"
        label="上传状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.uploadStatus===1" type="success">
            上传成功
          </el-tag>
          <el-tag v-if="scope.row.uploadStatus===0" type="primary">
            待上传
          </el-tag>
          <el-tag v-if="scope.row.uploadStatus===-1" type="warning">
            上传失败
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="remark"
        label="备注">
        <template  slot-scope="scope" v-if="scope.row.uploadStatus===-1">
           <el-button  plain size="mini" type="primary">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="操作" fixed="right"
         align="center"
        width="150">
        <template slot-scope="scope" v-if="scope.row.auditStatus===1">
          <el-button v-if="scope.row.uploadStatus===1"
            size="mini"
            type="success"
            @click="handleDelete(scope.$index, scope.row)">撤销上传
          </el-button>
          <el-button v-if="scope.row.uploadStatus===0"
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">{{scope.row.uploadStatus===-1?'重新上传':'上传体检'}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <el-dialog :title="dialogTitle" width="600px" :visible.sync="userFormVisible" @close="resetForm('userForm')">
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item label="姓名" prop="name" label-width="50px">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="50px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="50px">
          <el-input v-model="user.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" label-width="50px">
          <el-date-picker
            v-model="user.date"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" label-width="50px">
          <el-switch v-model="user.status" active-color="#13ce66"
                     inactive-color="#ff4949"
                     :active-value="1"
                     :inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUser('userForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import searchInput from "@/components/physical/searchInput/searchInput";

export default {
  name: 'User',
  components: {
    searchInput,
  },
  data() {
    return {
      users: [],
      placeholder: '请输入',
      user: {
        id: '',
        date: '',
        name: '',
        phone: '',
        address: '',
        status: 0
      },
      userBackup: Object.assign({}, this.user),
      multipleSelection: [],
      userFormVisible: false,
      dialogTitle: '',
      rowIndex: 9999,
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'},
          {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    search(value) {
      console.log(value)
    },
    getUsers() {
      this.loading = true
      this.$http('/api/users').then((res) => {
        this.users = res.data
        console.log(res)
      }).catch((err) => {
        console.error(err)
      })
    },
    handleEdit(index, row) {
      this.dialogTitle = '编辑'
      this.user = Object.assign({}, row)
      this.userFormVisible = true
      this.rowIndex = index
    },
    submitUser(formName) {
      // 表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let id = this.user.id
          if (id) {
            // id非空-修改
            this.users.splice(this.rowIndex, 1, this.user)
          } else {
            // id为空-新增
            this.user.id = this.users.length + 1
            this.users.unshift(this.user)
          }
          this.userFormVisible = false
          this.$message({
            type: 'success',
            message: id ? '修改成功！' : '新增成功！'
          })
        }
      })
    },
    handleDelete(index, row) {
      this.$confirm(`确定删除用户 【${row.name}】 吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.users.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        console.log('取消删除')
      })
    },
    resetForm(formName) {
      this.$refs[formName].clearValidate()
    },
    mulDelete() {
      let len = this.multipleSelection.length
      if (len === 0) {
        this.$message({
          type: 'warning',
          message: '请至少选择一项！'
        })
      } else {
        this.$confirm(`确定删除选中的 ${len} 个用户吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: `成功删除了${len}条数据！`
          })
        }).catch(() => {
          console.log('取消删除')
        })
      }
    },
    selectChange(val) {
      this.multipleSelection = val
    },
    handleAdd() {
      this.dialogTitle = '新增'
      this.user = Object.assign({}, this.userBackup)
      this.userFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-box {
  width: 100%;

  .exam-card {
    background-color: lightskyblue;
    box-shadow: 4px 4px 5px #999;
    height: 80px;
    //background-color: rgb(245, 247, 250);
    border-radius: 10px;

    .demo-form-inline {
      padding-left: 15px;
      display: flex;
      justify-content: space-between;
    }

    text-align: center;

    /deep/ .el-form-item__content {
      text-align: center;
      line-height: 40px;
      position: relative;
      font-size: 14px;
    }
  }

  .tool-box {
    display: flex;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  /deep/ .el-col-24 {
    width: 50%;
  }

  .el-pagination {
    margin-top: 20px;
  }
}
</style>
