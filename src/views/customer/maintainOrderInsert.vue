/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-16 15:01:39 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-16 16:23:13
 */

<template>
  <div class="maintain-order">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelWidth">
      <el-form-item label="客户">
        <span>黄二</span>
      </el-form-item>
      <el-form-item label="负责客服" >
        <span>黄二</span>
      </el-form-item>
      <el-form-item label="负责商务" >
        <span>黄二</span>
      </el-form-item>
      <el-form-item label="合同" prop="name">
        <el-col :span="8">
          <el-input v-model="ruleForm.name"><el-button slot="append" icon="el-icon-search" @click="compactChooseDialog = true"></el-button></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="维护工单类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="执行人" >
        <span>黄二</span>
      </el-form-item>
      <el-form-item label="内容" >
        <el-col :span="10">
          <el-input type="textarea"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="备注" prop="name">
        <el-col :span="8">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-upload class='upload-demo' action='https://jsonplaceholder.typicode.com/posts/'  :on-success='handleSuccess' multiple :limit='3' :show-file-list='false' :on-exceed='handleExceed' :file-list='fileList'>
          <el-button size='small' type='primary'>上传附件</el-button>
          <div slot='tip' class='el-upload__tip'>支持word、excel、pdf、ppt、zip、rar等文件格式</div>
        </el-upload>
        <div class='file-list' v-if="fileList.length>0">
          <p v-for='(item,index) in fileList' :key='index' >
            <span>{{item.name}}</span>
            <em>({{(item.size/1024).toFixed(1)}}KB)</em>
            <a href=''>删除</a>
            <a :href='item.url'>下载</a>
          </p>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="选择合同" :visible.sync="compactChooseDialog" width="800px">
      <el-table :data="compactTableData">
        <el-table-column label="" width="80px">
            <template slot-scope="scoped">
              <el-radio v-model="selectedRadio" :label="scoped.row.radio"></el-radio>
            </template>
          </el-table-column>
        <el-table-column prop="name" label="合同编号"></el-table-column>
        <el-table-column prop="name" label="客户名称"></el-table-column>
        <el-table-column prop="name" label="合同金额"></el-table-column>
        <el-table-column prop="name" label="合同类型"></el-table-column>
        <el-table-column prop="name" label="新增/续费/升级/另购"></el-table-column>
        <el-table-column prop="name" label="合同状态"></el-table-column>
        <el-table-column prop="name" label="合同签订日期"></el-table-column>
        <el-table-column prop="name" label="合同到期日期"></el-table-column>
      </el-table>
      <span slot="footer">
        <el-button type="primary">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'maintainOrderInsert',
  data() {
    return {
      labelWidth: '120px',
      compactChooseDialog: false, // 合同选择dialog
      compactTableData: [{
        name: 'kaker',
        radio: 1
      }, {
        name: 'angel',
        radio: 2
      }],
      selectedRadio: '', // 选中的合同
      fileList: [],
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    handleSuccess(response, file, fileList) {
      this.fileList = fileList
    }
  },
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.maintain-order{
  padding: 10px;
  overflow: auto;
  height: 100%;
  .file-list {
    margin-top: 20px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    em {
      color: #999;
    }
    a {
      color: #409eff;
    }
  }
}
</style>