/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-10 10:49:44 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-10 13:38:19
 */
<template>
  <div class="service-infor">
    <div class="title">
      <p>
        <span>客户信息</span>
        <span>合同列表</span>
        <span class="active">服务信息</span>
        <span>维护工单</span>
        <span>跟进记录</span>
      </p>
      <el-button type="primary">查看月报</el-button>
      <ul class="tag" @click="tagDialog = true">
        <h5>客户标签:</h5>
        <li>标签1</li>
        <li>标签1</li>
        <li>标签1</li>
      </ul>
    </div>
    <el-dialog title="收货地址" :visible.sync="tagDialog" width="400px">
      <ul class="tag-dialog clearfix">
        <li v-for="(item, index) in 6" :key="index" :class="{active: index< 3}">标签1</li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button @click="tagDialog = false">取 消</el-button>
        <el-button type="primary" @click="tagDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="order clearfix" >
      <div class="order-table" :class="{show: chartStatus}">
        <div class="header">
          <span>订单编号：Z-54548886648999</span>
          <span>订单金额：￥36000.00</span>
          <span>用户名：Z-54548886</span>
          <span>
            <el-button type="primary" size="small">收益总览</el-button>
          </span>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="产品明细">
          </el-table-column>
          <el-table-column prop="name" label="总次数">
          </el-table-column>
          <el-table-column prop="address" label="剩余次数">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scoped">
              <el-button type="text" @click="showProgress">查看进度<i class="el-icon--right" :class="{'el-icon-arrow-down':!chartStatus, 'el-icon-arrow-up': chartStatus}"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="order-chart" v-if="chartStatus">
        <h5>查看进度（官网）</h5>
        <div class="my-charts" id="myChart"></div>
      </div>
    </div>
    <div class="order clearfix" >
      <div class="order-table" :class="{show: chartStatus}">
        <div class="header">
          <span>订单编号：Z-54548886648999</span>
          <span>订单金额：￥36000.00</span>
          <span>用户名：Z-54548886</span>
          <span>
            <el-button type="primary" size="small">收益总览</el-button>
          </span>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="产品明细">
          </el-table-column>
          <el-table-column prop="name" label="总次数">
          </el-table-column>
          <el-table-column prop="address" label="剩余次数">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scoped">
              <el-button type="text" @click="showProgress">查看进度<i class="el-icon--right" :class="{'el-icon-arrow-down':!chartStatus, 'el-icon-arrow-up': chartStatus}"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="order-chart" v-if="chartStatus">
        <h5>查看进度（官网）</h5>
        <div class="my-charts" id="myChart2"></div>
      </div>
    </div>
    <div class="order clearfix" >
      <div class="order-table" :class="{show: chartStatus}">
        <div class="header">
          <span>订单编号：Z-54548886648999</span>
          <span>订单金额：￥36000.00</span>
          <span>用户名：Z-54548886</span>
          <span>
            <el-button type="primary" size="small">收益总览</el-button>
          </span>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="产品明细">
          </el-table-column>
          <el-table-column prop="name" label="总次数">
          </el-table-column>
          <el-table-column prop="address" label="剩余次数">
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scoped">
              <el-button type="text" @click="showProgress">查看进度<i class="el-icon--right" :class="{'el-icon-arrow-down':!chartStatus, 'el-icon-arrow-up': chartStatus}"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="order-chart" v-if="chartStatus">
        <h5>查看进度（官网）</h5>
        <div class="my-charts" id="myChart3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'serviceInfor',
  data() {
    return {
      chartStatus: false,
      tagDialog: false, // 客户标签dialog
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
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
      ]
    }
  },
  methods: {
    drawLine(option) {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(document.getElementById('myChart'))
      this.chart.clear()
      // 绘制图表
      this.chart.setOption(
        {
          xAxis: {
            type: 'category',
            data: ['2018-07-07', '2018-07-07', '2018-07-07', '2018-07-07', '2018-07-07', '2018-07-07', '2018-07-07']
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            right: '3%'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      )
    },
    showProgress() {
      this.chartStatus = !this.chartStatus
      if (this.chartStatus) {
        this.$nextTick(() => {
          this.drawLine()
        })
      }
    }
  },
  mounted() {
  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.service-infor {
  height: 100%;
  padding-top: 10px;
  overflow: auto;
  background-color: #f2f2f2;
  .title {
    height: 70px;
    line-height: 70px;
    padding: 0 10px;
    background-color: #fff;
    span {
      width: 100px;
      height: 40px;
      background-color: #d7d7d7;
      color: #666;
      line-height: 40px;
      text-align: center;
      float: left;
      margin-top: 15px;
      margin-right: 1px;
      cursor: pointer;
      &.active {
        background: #6699ff;
        color: #fff;
      }
    }
    .el-button {
      margin-left: 20px;
    }
    .tag {
      float: right;
      height: 40px;
      border: 1px solid #ddd;
      line-height: 40px;
      margin-top: 15px;
      border-radius: 5px;
      padding: 0 10px;
      h5 {
        float: left;
        height: 100%;
        font-size: 14px;
        color: #666;
      }
      li {
        float: left;
        width: 70px;
        height: 100%;
        text-align: center;
        font-size: 14px;
      }
    }
  }
  .tag-dialog{
    height: 200px;
    li{
      width: 110px;
      height: 40px;
      border-radius: 40px;
      border: 1px solid #eee;
      line-height: 40px;
      text-align: center;
      font-size: 13px;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      &.active{
        background-color: #6699ff;
        color: #fff;
      }
    }
  }
  .order{
    margin-bottom: 15px;
    padding: 10px;
    background: #fff;
  }
  .order-table{
    width: 100%;
    float: left;
    &.show{
      width: 50%;
    }
    .header{
      height: 40px;
      line-height: 40px;
      background-color: #c9c9c9;
      span{
        width: 25%;
        float: left;
        padding-left: 10px;
        color: #fff;
      }
    }
  }
  .order-chart{
    width: 49%;
    float: left;
    height: 100%;
    margin-left: 1%;
    h5{
      height: 40px;
      line-height: 40px;
      background-color: #6699ff;
      color: #fff;
      font-size: 13px;
      padding: 0 15px;
    }
    .my-charts{
      height: 300px;
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
