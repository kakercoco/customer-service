/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-16 19:54:06 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-16 20:15:03
 */
<template>
  <div class="maintain-order">
    <p>
      <el-select v-model="selected" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="searchkey"></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary">查看超时</el-button>
      <el-button type="primary">添加维护工单</el-button>
    </p>
    <div>
      <el-table :data="maintainOrderTableData">
        <el-table-column prop="name" align="center" label="维护工单编号"></el-table-column>
        <el-table-column prop="name" align="center" label="合同编号"></el-table-column>
        <el-table-column prop="name" align="center" label="客户名称"></el-table-column>
        <el-table-column prop="name" align="center" label="产品"></el-table-column>
        <el-table-column prop="name" align="center" label="维护工单类型"></el-table-column>
        <el-table-column prop="name" align="center" label="优先级"></el-table-column>
        <el-table-column prop="name" align="center" label="创建时间"></el-table-column>
        <el-table-column prop="name" align="center" label="状态"></el-table-column>
        <el-table-column prop="name" align="center" label="操作" width="300px">
          <template slot-scope="scoped">
            <el-button size="mini" type="primary">查看</el-button>
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="primary">撤回</el-button>
            <el-button size="mini" type="primary">催单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'maintainOrder',
  data() {
    return {
      searchkey: '',
      selected: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      maintainOrderTableData: [{
        name: '2018-15-02'
      }, {
        name: '2018-15-02'
      }]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.maintain-order{
  padding: 10px;
  overflow: auto;
  height: 100%;
  &>p{
    margin-bottom: 10px;
    & /deep/ .el-input{
      width: 200px;
      margin-right: 10px;
    }
  }
}
</style>