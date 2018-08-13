<template>
  <div class="config">
    <el-table :data="configTableData" style="width: 100%" >
      <el-table-column prop="name" align="center" label="分类">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="任务名称">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="发送方式">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="触发节点开始">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="任务结束">
      </el-table-column> 
      <el-table-column prop="num"  align="center" label="时间限制">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="任务">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="提醒">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="提醒对象">
      </el-table-column> 
      <el-table-column prop="name" align="center" label="操作" width="250">
        <template slot-scope="scoped">
          <el-button size="small" type="primary" @click="emailDialog = true">设置邮件</el-button>
          <el-button size="small" type="primary" @click="taskDialog = true">任务知识</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="设置邮件" :visible.sync="emailDialog" class="email-dialog">
      <div class="remind-type">
        <p>
          <span>提醒类型</span>
          <el-button type="infor" size="small">邮件</el-button>
          <el-button type="primary" size="medium" class="fr">保存</el-button>
          <el-button type="primary" size="medium" class="fr">停用</el-button>
        </p>
        <el-table :data="emailTableDate">
          <el-table-column property="name" label="模板编号"></el-table-column>
          <el-table-column property="name" label="模板类型"></el-table-column>
          <el-table-column property="name" label="模板名称"></el-table-column>
          <el-table-column property="name" label="使用邮箱"></el-table-column>
          <el-table-column property="name" label="创建人"></el-table-column>
          <el-table-column property="name" label="创建时间"></el-table-column>
        </el-table>
      </div>
      <div class="send-type">
        <span>发送方式</span>
        <el-radio v-model="sendStyle" label="1">系统发送</el-radio>
        <el-radio v-model="sendStyle" label="2">人工发送</el-radio>
      </div>
      <div class="emial-template">
        <p><span>邮件模板</span><i>个人邮箱的发件人是负责客服</i></p>
        <el-table :data="emailTableDate">
          <el-table-column property="name" label="">
            <template slot-scope="scoped">
              <el-radio v-model="selectedRadio" :label="scoped.row.radio"></el-radio>
            </template>
          </el-table-column>
          <el-table-column property="name" label="模板编号"></el-table-column>
          <el-table-column property="name" label="模板类型"></el-table-column>
          <el-table-column property="name" label="模板名称"></el-table-column>
          <el-table-column property="name" label="使用邮箱"></el-table-column>
          <el-table-column property="name" label="创建人"></el-table-column>
          <el-table-column property="name" label="创建时间"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <el-dialog title="任务知识" :visible.sync="taskDialog" class="task-dialog" width="500px">
      <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
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
      <span slot="footer">
        <el-button type="danger">停用</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'config',
  data() {
    return {
      emailDialog: false, // 设置邮件弹框
      taskDialog: false, // 任务知识弹框
      selectedRadio: '', // 选中的邮件模板
      sendStyle: '', // 发送邮件方式
      fileList: [],
      configTableData: [{
        name: '上海一组',
        value: 1000,
        num: 100
      }],
      emailTableDate: [{
        name: 'A001',
        radio: '1'
      }, {
        name: 'A002',
        radio: '2'
      }]
    }
  },
  methods: {
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
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.config{

}
.email-dialog{
  .remind-type{
    &>p{
      height: 40px;
      span{
        margin-right: 20px;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .send-type{
    span{
      margin-right: 20px;
      font-size: 20px;
      font-weight: bold;
    }
    margin: 20px 0;
  }
  .emial-template{
    p{
      span{
        margin-right: 20px;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
.task-dialog{
  .file-list{
    em{
      color: #999;
    }
    a{
      color: #409EFF;
    }
  }
  .upload-demo{
    margin-top: 10px;
  }
}
</style>
