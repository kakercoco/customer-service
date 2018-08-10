/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-09 17:56:10 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-09 18:26:37
 */
<template>
  <div class="calendar">
    <p class="top"></p>
    <div class="left">
      <h1 class="tac"><i class="el-icon-arrow-left"></i>2018年7月   今天是26日<i class="el-icon-arrow-right"></i></h1>
      <p class="week">
        <span>周日</span>
        <span>周一</span>
        <span>周二</span>
        <span>周三</span>
        <span>周四</span>
        <span>周五</span>
        <span>周六</span>
      </p>
      <ul class="month">
        <li v-for="(item, index) in 8 " :key="index">
          <h4>1</h4>
          <el-button size="mini">更换客服</el-button>
          <el-button size="mini">更换客服</el-button>
        </li>
      </ul>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.calendar{
  height: 100%;
  padding-top: 10px;
  background-color: #f2f2f2;
  .left{
    width: 1100px;
    height: 100%;
    float: left;
    background-color: #fff;
  }
  .right{
    width: calc(100% - 1110px);
    height: 100%;
    background-color: #fff;
    margin-left: 10px;
    float: right;
  }
  h1{
    color: #868686;
    font-size: 36px;
    i{
      font-weight: bold;
      color: #c6e2ff;
      margin: 0 40px;
    }
  }
  .week{
    width: 100%;
    height: 35px;
    line-height: 35px;
    span{
      float: left;
      height: 100%;
      text-align: center;
      width: 14.2%;
      font-weight: bold;
      color: #868686;
    }
  }
  .month{
    li{
      width: 140px;
      height: 120px;
      float: left;
      box-shadow: 0 0 10px #6699ff;
      margin-right: 10px;
    }
  }
}
</style>
