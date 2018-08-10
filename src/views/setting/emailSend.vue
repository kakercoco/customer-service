/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-09 16:02:14 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-09 17:50:40
 */
<template>
  <div class='email-send'>
    <div>
      <h5>模板列表</h5>
      <el-table :data='tableData' style='width: 100%' height='250px'>
        <el-table-column type='selection' width='55'>
        </el-table-column>
        <el-table-column prop='date' label='模板编号'>
        </el-table-column>
        <el-table-column prop='name' label='模板名称'>
        </el-table-column>
        <el-table-column prop='address' label='模板类型'>
        </el-table-column>
        <el-table-column prop='address' label='使用邮箱'>
        </el-table-column>
        <el-table-column prop='name' label='创建人'>
        </el-table-column>
        <el-table-column prop='date' label='创建时间'>
        </el-table-column>
      </el-table>
      <p class='tar email-choose-btn'>
        <el-button type='primary' @click='chooseTemplate'>选择模板</el-button>
        <el-button type='primary' @click='chooseCustomerDialog = true'>选择客户</el-button>
      </p>
      <el-dialog title='选择客户' :visible.sync='chooseCustomerDialog'>
        <p class='choose-customer'>
          <el-col :span='18'>
            <el-input placeholder='请输入内容' v-model='chooseInput' class='input-with-select' clearable prefix-icon='el-icon-search'>
              <el-select v-model='chooseSelect' slot='prepend' placeholder='请选择'>
                <el-option label='餐厅名' value='1'></el-option>
                <el-option label='订单号' value='2'></el-option>
                <el-option label='用户电话' value='3'></el-option>
              </el-select>
              <el-button slot='append'>搜索</el-button>
            </el-input>
          </el-col>
        </p>
        <el-table :data='gridData' width='560px' height='400px'>
          <el-table-column type='selection' width='55'></el-table-column>
          <el-table-column property='date' label='编号'></el-table-column>
          <el-table-column property='name' label='公司名称'></el-table-column>
          <el-table-column property='address' label='客户等级'></el-table-column>
          <el-table-column property='name' label='公司座机'></el-table-column>
          <el-table-column property='name' label='负责商务'></el-table-column>
        </el-table>
        <span slot='footer' class='dialog-footer'>
          <el-button @click='chooseCustomerDialog = false'>取 消</el-button>
          <el-button type='primary' @click='chooseCustomerDialog = false'>确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class='email-main'>
      <el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='100px' class='demo-ruleForm'>
        <el-form-item label='发件人：' prop='templateName'>
          <p>Sara &lt;sara.liu@71360.com&gt;</p>
        </el-form-item>
        <el-form-item label='收件人：' prop='emailReceiver'>
          <el-input v-model='ruleForm.emailReceiver'></el-input>
        </el-form-item>
        <el-form-item label='抄送人：' prop='emailCopy'>
          <el-input v-model='ruleForm.emailCopy'></el-input>
        </el-form-item>
        <el-form-item label='邮件标题：' prop='emailTitle'>
          <el-input v-model='ruleForm.emailTitle'></el-input>
        </el-form-item>
        <el-form-item label='邮件正文：' prop='emailContent'>
          <quill-editor v-model='ruleForm.emailContent' ref='myQuillEditor' class='editer' :options='editorOption' @ready='onEditorReady($event)'>
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload class='upload-demo' action='https://jsonplaceholder.typicode.com/posts/' :on-preview='handlePreview' :on-remove='handleRemove' :before-remove='beforeRemove' :on-success='handleSuccess' multiple :limit='3' :show-file-list='false' :on-exceed='handleExceed' :file-list='fileList'>
            <el-button size='small' type='primary'>上传附件</el-button>
            <div slot='tip' class='el-upload__tip'>支持word、excel、pdf、ppt、zip、rar等文件格式</div>
          </el-upload>
          <p v-for='(item,index) in fileList' :key='index' class='file-list'>
            <span>{{item.name}}</span>
            <em>({{(item.size/1024).toFixed(1)}}KB)</em>
            <a href=''>删除</a>
            <a :href='item.url'>下载</a>
          </p>
        </el-form-item>
        <el-form-item class='tar'>
          <el-button @click="resetForm('ruleForm')">存草稿箱</el-button>
          <el-button type='primary' @click="submitForm('ruleForm')">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器

export default {
  name: 'emailSend',
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {}, // 富文本自定义选项
      fileList: [], // 上传附件的列表
      chooseCustomerDialog: false,
      chooseInput: '', // 选择用户的输入框
      chooseSelect: '', // 选择用户的下拉框
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      ruleForm: {
        templateName: '',
        templateType: '',
        emailReceiver: '',
        emailCopy: '',
        emailType: '',
        emailTitle: '',
        emailContent: ''
      },
      rules: {
        emailReceiver: [
          { required: true, message: '请输入收件人邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        emailCopy: [
          { required: true, message: '请输入抄送人邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        emailTitle: [
          { required: true, message: '请输入邮件标题', trigger: 'blur' }
        ],
        emailContent: [
          { required: true, message: '请输入正文内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onEditorReady(editor) {
      // console.log(this.ruleForm)
    },
    chooseTemplate() {
      this.$confirm('选择该模板，当前邮件内容将清空！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
    },
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handleSuccess(response, file, fileList) {
      this.fileList = fileList
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  },
  mounted() {}
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.email-send {
  padding: 10px;
  height: 100%;
  overflow: auto;
  h5 {
    padding: 10px 15px;
    color: #666;
  }
  .email-choose-btn {
    padding: 20px 0;
  }
  .choose-customer {
    .el-select {
      & /deep/ .el-input {
        width: 130px;
      }
    }
  }
  .email-main {
    border-top: 1px solid #eee;
    .file-list {
      em {
        color: #999;
      }
      a {
        color: #409eff;
      }
    }
    .el-form-item {
      & /deep/ .quill-editor {
        line-height: initial;
        .ql-container {
          height: 200px;
        }
      }
    }
  }
}
</style>
