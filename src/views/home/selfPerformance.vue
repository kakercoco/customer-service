/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-10 17:28:46 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-13 10:11:18
 */
<template>
  <div class="self-performance">
    <div class="search">
      <el-select v-model="selectedValue" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="searchKey" placeholder="请输入内容"></el-input>
      <el-date-picker v-model="date" type="date" placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
    <div class="performance-table">
      <h3>个人月情况</h3>
      <el-table :data="selfTableData" style="width: 100%">
        <el-table-column prop="name" label="组名">
        </el-table-column>
        <el-table-column prop="name" label="客服总监">
        </el-table-column>
        <el-table-column prop="name" label="组长">
        </el-table-column>
        <el-table-column prop="name" label="组员">
        </el-table-column>
        <el-table-column prop="name" label="月通话时间">
        </el-table-column>
        <el-table-column prop="name" label="通话时长登记">
          <template slot-scope="scoped">
            <el-input v-model="scoped.row.value"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="跟进客户数">
        </el-table-column>
      </el-table>
      <h3>客户详情</h3>
      <el-table :data="customerTableData" style="width: 100%">
        <el-table-column prop="name" label="客户编号">
        </el-table-column>
        <el-table-column prop="name" label="客户名称">
        </el-table-column>
        <el-table-column prop="name" label="合同编号">
        </el-table-column>
        <el-table-column prop="name" label="类型">
        </el-table-column>
        <el-table-column prop="name" label="未收款">
        </el-table-column>
        <el-table-column prop="name" label="到账业绩">
        </el-table-column>
        <el-table-column prop="name" label="到账时间">
        </el-table-column>
        <el-table-column prop="name" label="到账登记">
          <template slot-scope="scoped">
            <el-input v-model="scoped.row.value"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selfPerformance',
  data() {
    return {
      searchKey: '',
      date: '',
      selectedValue: '',
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
      selfTableData: [{
        name: '上海一组',
        value: 1000
      }],
      customerTableData: [{
        name: '上海一组',
        value: 1000
      }]
    }
  },
  methods: {
    save() {
      console.log(this.selfTableData)
    }
  },
  mounted() {}
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.self-performance {
  height: 100%;
  overflow: auto;
  padding: 10px;
  .search{
    height: 50px;
    .el-input{
      width: 200px;
    }
  }
  .performance-table{
    h3{
      color: #666;
      margin: 15px 0;
    }
  }
}
</style>
