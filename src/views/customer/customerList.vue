/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-06 17:40:59 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-14 16:10:08
 */
<template>
  <div class="customer-list">
    <div>
      <p class="search">
        <el-select v-model="selectedValue" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="searchKey" placeholder="请输入内容"></el-input>
        <el-button type="primary">搜索</el-button>
        <el-button type="primary" class="fr" @click="taskDialog = true">任务知识</el-button>
      </p>
      <el-tabs type="border-card">
        <el-tab-pane label="客户信息">
          <el-table :data="inforData" style="width: 100%;">
            <el-table-column prop="name" align="center" label="客户编号"></el-table-column>
            <el-table-column prop="name" align="center" label="公司名称"></el-table-column>
            <el-table-column prop="name" align="center" label="投诉标识"></el-table-column>
            <el-table-column prop="name" align="center" label="客户等级"></el-table-column>
            <el-table-column prop="name" align="center" label="负责客服"></el-table-column>
            <el-table-column prop="name" align="center" label="负责商务"></el-table-column>
            <el-table-column prop="name" align="center" label="操作" width="300">
              <template slot-scope="scoped">
                <el-button type="primary" size="mini" @click="GoToCustomerInfor">查看详情</el-button>
                <el-button type="primary" size="mini">分配客户</el-button>
                <el-button type="primary" size="mini" @click="feedbackDialog = true">投诉标识</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="服务概况">
          <el-table :data="serviceData" style="width: 100%;">
            <el-table-column prop="name" align="center" label="客户编号"></el-table-column>
            <el-table-column prop="name" align="center" label="公司名称"></el-table-column>
            <el-table-column prop="name" align="center" label="是否激活"></el-table-column>
            <el-table-column prop="name" align="center" label="本案是否成功"></el-table-column>
            <el-table-column prop="name" align="center" label="网站是否上线"></el-table-column>
            <el-table-column prop="name" align="center" label="资料通过审核"></el-table-column>
            <el-table-column prop="name" align="center" label="关键词达标"></el-table-column>
            <el-table-column prop="name" align="center" label="到期还有几天"></el-table-column>
            <el-table-column prop="name" align="center" label="操作" width="300">
              <template slot-scope="scoped">
                <el-button type="primary" size="mini">查看详情</el-button>
                <el-button type="primary" size="mini">分配客户</el-button>
                <el-button type="primary" size="mini" @click="feedbackDialog = true">投诉标识</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog :visible.sync="taskDialog" width="500px" title="任务知识">
      <div class="article">
        富文本
      </div>
      <ul class="file-list">
        <li>
          <span>附件一.doc</span>
          <el-button type="primary" size="mini" class="fr">下载</el-button>
        </li>
        <li>
          <span>附件一.doc</span>
          <el-button type="primary" size="mini" class="fr">下载</el-button>
        </li>
      </ul>
    </el-dialog>
    <el-dialog :visible.sync="feedbackDialog" width="500px" title="投诉内容">
      <div class="article">
        富文本
      </div>
       <el-upload
        class='upload-demo'
        action='https://jsonplaceholder.typicode.com/posts/'
        :on-success='handleSuccess'
        multiple
        :limit='3'
        :show-file-list='false'
        :on-exceed='handleExceed'
        :file-list='fileList'>
        <el-button size='small' type='primary'>上传附件</el-button>
        <div slot='tip' class='el-upload__tip'>支持word、excel、pdf、ppt、zip、rar等文件格式</div>
      </el-upload>
      <ul class='file-list' v-if="fileList.length > 0">
        <li v-for='(item,index) in fileList' :key='index'>
          <span>{{item.name}}</span>
          <a :href='item.url'><el-button type="primary" size="mini" class="fr">下载</el-button></a>
        </li>
      </ul>
      <span slot="footer">
        <el-button type="success">结案</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'customerList',
  data() {
    return {
      searchKey: '',
      selectedValue: '',
      taskDialog: false, // 任务知识弹框
      feedbackDialog: false, // 投诉内容弹框
      fileList: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      inforData: [{
        name: '上海一组'
      }, {
        name: '上海一组'
      }, {
        name: '上海一组'
      }],
      serviceData: [{
        name: '上海一组'
      }, {
        name: '上海一组'
      }]
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.fileList = fileList
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    GoToCustomerInfor() {
      const string = '123'
      const { href } = this.$router.resolve({
        name: 'customerInfor',
        query: {
          'classID': string
        }
      })
      window.open(href, '_blank')
    }
  },
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.customer-list{
  padding: 10px;
  overflow: auto;
  height: 100%;
  .el-input{
    width: 200px;
  }
  .search{
    margin-bottom: 15px;
  }
}
.file-list{
  margin-top: 20px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  li{
    line-height: 35px;
    &>span{
      display: inline-block;
      max-width: 200px;
    }
  }
}
.article{
  width: 100%;
  height: 150px;
  background-color: #eee;
}
.upload-demo{
  margin-top: 20px;
}
</style>
