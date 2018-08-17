/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-17 14:38:59 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-17 15:17:31
 */
<template>
  <div class="maintain-order-type">
    <p>
      <el-button type="primary" @click="orderTypeDialog = true">添加维护工单类型</el-button>
    </p>
    <el-table :data="orderTypeTableData">
      <el-table-column align="center" label="产品" prop="name"></el-table-column>
      <el-table-column align="center" label="维护工单类型" prop="name"></el-table-column>
      <el-table-column align="center" label="执行人" prop="name"></el-table-column>
      <el-table-column align="center" label="优先级" prop="name"></el-table-column>
      <el-table-column align="center" label="超时时间" prop="name"></el-table-column>
      <el-table-column align="center" label="状态" prop="name"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scoped">
          <el-button type="primary" size="mini" @click="orderTypeDialog = true">编辑</el-button>
          <el-button type="primary" size="mini" v-if="true">启用</el-button>
          <el-button type="primary" size="mini" v-else>停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <el-dialog :visible.sync="orderTypeDialog" title="设置维护工单类型">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="ruleForm">
        <el-form-item label="产品" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="维护工单类型" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="执行人" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="优先级" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="超时时间（天数）" prop="day">
          <el-input v-model="ruleForm.day"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button type="primary" @click="save">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'maintainOrderType',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 10,
      orderTypeDialog: false,
      orderTypeTableData: [
        {
          name: '2018-512-5'
        },
        {
          name: '网站维护'
        }
      ],
      ruleForm: {
        name: '',
        region: '',
        day: ''
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    sizeChange() {},
    currentChange() {},
    save() {
      this.orderTypeDialog = false
    }
  },
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.maintain-order-type {
  & > p {
    margin-bottom: 20px;
  }
  overflow: auto;
  padding: 10px;
  height: 100%;
  .ruleForm {
    .el-input {
      width: 200px;
    }
  }
}
</style>