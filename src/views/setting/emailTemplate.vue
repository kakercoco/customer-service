/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-09 09:29:58 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-09 16:33:18
 */
<template>
  <div class='email-template'>
    <div class='email-content'>
      <el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='100px' class='demo-ruleForm'>
        <el-row>
          <el-col :span='12'>
            <el-form-item label='模板类型：' prop='templateType'>
              <el-select v-model='ruleForm.templateType' placeholder='请选择活动区域'>
                <el-option label='区域一' value='shanghai'></el-option>
                <el-option label='区域二' value='beijing'></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span='12'>
            <el-form-item label='模板名称：' prop='templateName'>
              <el-input v-model='ruleForm.templateName'></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label='使用邮箱：' prop='emailType'>
          <el-radio-group v-model='ruleForm.emailType'>
            <el-radio label='系统邮箱'></el-radio>
            <el-radio label='个人邮箱'></el-radio>
          </el-radio-group>
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
          <quill-editor v-model='ruleForm.emailContent'
              ref='myQuillEditor'
              class='editer'
              :options='editorOption' @ready='onEditorReady($event)'>
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-upload
            class='upload-demo'
            action='https://jsonplaceholder.typicode.com/posts/'
            :on-preview='handlePreview'
            :on-remove='handleRemove'
            :before-remove='beforeRemove'
            :on-success='handleSuccess'
            multiple
            :limit='3'
            :show-file-list='false'
            :on-exceed='handleExceed'
            :file-list='fileList'>
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
          <el-button type='primary' @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class='email-collapse'>
      <el-collapse v-model='activeName' accordion>
        <el-collapse-item title='收件人/抄送人' name='1'>
          <ul class='email-list'>
            <li>
              <p>我</p>
              <p>Me</p>
            </li>
            <li>
              <p>我的上级</p>
              <p>Myleded</p>
            </li>
            <li>
              <p>我的总监</p>
              <p>Mydeplead</p>
            </li>
            <li>
              <p>商务</p>
              <p>Sales</p>
            </li>
            <li>
              <p>商务上级</p>
              <p>Sales lead</p>
            </li>
            <li>
              <p>上海珍岛信息技术</p>
              <p>Company name</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title='我的联系方式' name='2'>
          <ul class='my-contart'>
            <li>姓名/Name：      Sara</li>
            <li>工号/Code：       2018</li>
            <li>电话/Tell：         13012345678</li>
            <li>邮箱/E-mail：     123456@qq.com</li>
            <li>QQ/qq：             1236542322</li>
            <li>客服热线/Company tell： 021-00000000</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title='合同' name='3'>
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title='产品激活信息' name='4'>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
        <el-collapse-item title='测试站信息' name='5'>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器

export default {
  name: 'emailTemplate',
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {},
      fileList: [],
      activeName: '1', // 折叠面板
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
        templateName: [
          { required: true, message: '请输入模板名称', trigger: 'blur' }
        ],
        emailReceiver: [
          { required: true, message: '请输入收件人邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        emailCopy: [
          { required: true, message: '请输入抄送人邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        emailTitle: [
          { required: true, message: '请输入邮件标题', trigger: 'blur' }
        ],
        templateType: [
          { required: true, message: '请选择模板类型', trigger: 'change' }
        ],
        emailType: [
          { required: true, message: '请选择使用邮箱', trigger: 'change' }
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
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {}
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.email-template {
  height: 100%;
  padding-top: 10px;
  background-color: #f2f2f2;
  .email-content {
    width: 70%;
    float: left;
    height: 100%;
    overflow: auto;
    padding: 10px;
    background-color: #fff;
    .file-list{
      em{
        color: #999;
      }
      a{
        color: #409EFF;
      }
    }
  }
  .el-form-item{
    & /deep/ .quill-editor{
      line-height: initial;
      .ql-container{
        height: 300px;
      }
    }
  }
  .email-collapse{
    background-color: #fff;
    padding: 10px;
    width: 29%;
    float: right;
    height: 100%;
    margin-left: 1%;
    overflow: auto;
    .email-list{
      li{
        width: 48%;
        height: 50px;
        border-radius: 50px;
        border: 1px solid #eee;
        text-align: center;
        padding: 10px 0;
        float: left;
        margin: 10px 1%;
        cursor: pointer;
        p{
          line-height: 15px;
          color: #666;
        }
      }
    }
    .my-contart{
      li{
        line-height: 35px;
        font-size: 13px;
      }
    }
  }
}
</style>
