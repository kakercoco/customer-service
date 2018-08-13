/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-13 14:01:31 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-13 15:40:53
 */
<template>
  <div class="email-list">
    <el-table :data="emailListTableDate">
      <el-table-column property="name" align="center" label="模板编号"></el-table-column>
      <el-table-column property="name" align="center" label="模板类型"></el-table-column>
      <el-table-column property="name" align="center" label="模板名称"></el-table-column>
      <el-table-column property="name" align="center" label="使用邮箱"></el-table-column>
      <el-table-column property="name" align="center" label="状态"></el-table-column>
      <el-table-column property="name" align="center" label="创建人"></el-table-column>
      <el-table-column property="name" align="center" label="创建时间"></el-table-column>
      <el-table-column property="name" align="center" label="操作" width="300">
        <template slot-scope="scoped" >
          <el-button type="primary" size="small" @click="emailDialog = true">查看</el-button>
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="removeEmail">删除</el-button>
          <el-button type="primary" size="small" v-if="true">启用</el-button>
          <el-button type="danger" size="small" v-else>停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="查看模板" :visible.sync="emailDialog">
      <ul class="email-dialog">
        <li>
          <span>模板类型</span>
          <span>日常维护-协助资料添加</span>
        </li>
        <li>
          <span>模板名称</span>
          <span>2018标准模板</span>
        </li>
        <li>
          <span>使用邮箱</span>
          <span>系统邮箱</span>
        </li>
        <li>
          <span>邮件标题</span>
          <span>【日常维护-协助资料添加】</span>
        </li>
        <li>
          <span>收件人</span>
          <span>kaker</span>
        </li>
        <li>
          <span>抄送</span>
          <span>angel</span>
        </li>
      </ul>
      <div class="email-article">
        <h4>邮件正文</h4>
        <div>
          富文本
        </div>
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
  </div>
</template>

<script>
export default {
  name: 'emailList',
  data() {
    return {
      emailDialog: false,
      emailListTableDate: [{
        name: 'A001',
        radio: '1'
      }, {
        name: 'A001',
        radio: '1'
      }, {
        name: 'A001',
        radio: '1'
      }, {
        name: 'A001',
        radio: '1'
      }, {
        name: 'A001',
        radio: '1'
      }]
    }
  },
  methods: {
    removeEmail() {
      this.$confirm('是否删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.email-list{
  padding: 10px;
  overflow: auto;
  height: 100%;
}
.email-dialog{
  li{
    line-height: 30px;
    span{
      &:first-child{
        font-size: 16px;
        width: 150px;
        display: inline-block;
      }
      &:last-child{
        display: inline-block;
        font-size: 14px;
      }
    }
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
  }
}
.email-article{
  margin-top: 20px;
  h4{
    font-size: 16px;
  }
  div{
    width: 100%;
    height: 150px;
    background-color: #eee;
  }
}
</style>
