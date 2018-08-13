/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-13 15:35:05 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-13 15:44:41
 */
<template>
  <div class="draft-box">
    <el-table :data="draftTableDate">
      <el-table-column property="name" align="center" label="邮件标题"></el-table-column>
      <el-table-column property="name" align="center" label="收件人"></el-table-column>
      <el-table-column property="name" align="center" label="抄送"></el-table-column>
      <el-table-column property="name" align="center" label="使用邮箱"></el-table-column>
      <el-table-column property="name" align="center" label="创建时间"></el-table-column>
      <el-table-column property="name" align="center" label="操作">
        <template slot-scope="scoped">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small" @click="removeDraft">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'draftBox',
  data() {
    return {
      draftTableDate: [{
        name: 'A001'
      }, {
        name: 'A001'
      }, {
        name: 'A001'
      }, {
        name: 'A001'
      }, {
        name: 'A001'
      }]
    }
  },
  methods: {
    removeDraft() {
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
.draft-box{
  padding: 10px;
  overflow: auto;
  height: 100%;
}
</style>
