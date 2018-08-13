/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-10 17:28:46 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-13 10:31:53
 */
<template>
  <div class="group-performance">
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
      <el-table :data="groupTableData" style="width: 100%" show-summary>
        <el-table-column prop="name" label="组名">
        </el-table-column>
        <el-table-column prop="name" label="客服总监">
        </el-table-column>
        <el-table-column prop="name" label="组长">
        </el-table-column>
        <el-table-column prop="name" label="组员">
        </el-table-column>
        <el-table-column prop="name" label="月指标数">
        </el-table-column>
        <el-table-column prop="num" label="达成数">
        </el-table-column>
        <el-table-column prop="name" label="达成率">
        </el-table-column>
        <el-table-column prop="name" label="月指标数设定">
          <template slot-scope="scoped">
            <el-input v-model="scoped.row.value"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="月通话时长">
        </el-table-column>
        <el-table-column prop="name" label="跟进客户数">
        </el-table-column>
      </el-table>
      <h3>客户详情</h3>
      <el-table :data="groupTableData" style="width: 100%" show-summary>
        <el-table-column prop="name" label="组名">
        </el-table-column>
        <el-table-column prop="name" label="客服总监">
        </el-table-column>
        <el-table-column prop="name" label="组长">
        </el-table-column>
        <el-table-column prop="name" label="组员">
        </el-table-column>
        <el-table-column prop="name" label="月指标数">
        </el-table-column>
        <el-table-column prop="num" label="达成数">
        </el-table-column>
        <el-table-column prop="name" label="达成率">
        </el-table-column>
        <el-table-column prop="name" label="月指标数设定">
          <template slot-scope="scoped">
            <el-input v-model="scoped.row.value"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="月通话时长">
        </el-table-column>
        <el-table-column prop="name" label="跟进客户数">
        </el-table-column>
      </el-table>
    </div>
    <div id="myChart">

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'groupPerformance',
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
      groupTableData: [{
        name: '上海一组',
        value: 1000,
        num: 100
      }, {
        name: '上海一组',
        value: 1000,
        num: 300
      }],
      customerTableData: [{
        name: '上海一组',
        value: 1000,
        num: 100
      }]
    }
  },
  methods: {
    save() {
      console.log(this.groupTableData)
    },
    drawLine(option) {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(document.getElementById('myChart'))
      this.chart.clear()
      // 绘制图表
      this.chart.setOption(
        {
          title: {
            text: '指标数',
            subtext: '达成数'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            name: '2011年'
          }, {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            name: '2012年'
          }]
        }
      )
    }
  },
  mounted() {
    this.drawLine()
  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.group-performance {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
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
  #myChart{
    width: 100%;
    height: 400px;
  }
}
</style>
