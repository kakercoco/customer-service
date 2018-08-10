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
        <li v-for="(item, index) in 31 " :key="index">
          <div :class="{today: index ===25, 'active': index === 10}">
            <h4>{{index+1}}</h4>
            <p v-if="index<26">
              <span>更换客服</span>
              <span>指派跟进</span>
              <span>合同洽谈</span>
              <span>下次跟进</span>
            </p>
          </div>
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
    overflow: auto;
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
      cursor: pointer;
      &:hover{
        color: #6699ff;
      }
    }
  }
  .week{
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    span{
      float: left;
      height: 100%;
      text-align: center;
      width: 14.25%;
      font-weight: bold;
      color: #868686;
    }
  }
  .month{
    padding: 0 10px;
    li{
      width: 14.25%;
      height: 120px;
      float: left;
      padding: 0 5px;
      margin-bottom: 15px;
      div{
        box-shadow: 0 0 10px #6699ff;
        height: 100%;
        text-align: center;
        &.today{
          background-color: #ff9900;
          h4{
            background-color: #ff9900;
          }
        }
        &.active{
          background-color: #5986df;
          h4{
            background-color: #5986df;
          }
        }
        h4{
          background-color: #6699ff;
          height: 35px;
          line-height: 35px;
          color: #fff;
          font-size: 30px;
        }
        p{
          span{
            width: 60px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border: 1px solid #eee;
            border-radius: 3px;
            cursor: pointer;
            box-shadow: 0 0 5px #ddd;
            display: inline-block;
            margin-top: 10px;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
