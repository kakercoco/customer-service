/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-17 14:06:18 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-17 14:50:22
 */
<template>
  <div class="service-table">
    <el-table :data="serviceTableData">
      <el-table-column prop="name" align="center" label=""></el-table-column>
      <el-table-column prop="name" align="center" label="服务"></el-table-column>
      <el-table-column prop="name" align="center" label="服务步骤"></el-table-column>
      <el-table-column prop="name" align="center" label="判断开始节点"></el-table-column>
      <el-table-column prop="name" align="center" label="判断完成节点"></el-table-column>
      <el-table-column prop="name" align="center" label="超时时限"></el-table-column>
      <el-table-column prop="name" align="center" label="剩余次数"></el-table-column>
      <el-table-column prop="name" align="center" label="总次数"></el-table-column>
      <el-table-column prop="name" align="center" label="按周展示" ></el-table-column>
      <el-table-column prop="name" align="center" label="T云服务编号"></el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceTable',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 10,
      serviceTableData: [{
        name: 'kaker'
      }, {
        name: 'kaker'
      }]
    }
  },
  methods: {
    sizeChange() {

    },
    currentChange() {

    }
  },
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.service-table {
  overflow: auto;
  height: 100%;
  padding: 10px;
}
</style>