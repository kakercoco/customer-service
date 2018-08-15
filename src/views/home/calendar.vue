/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-09 17:56:10 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-15 13:39:54
 */
<template>
  <div class="calendar">
    <p class="top"></p>
    <div class="left">
     <date-picker></date-picker>
    </div>
    <div class="right">
      <h3>2018-07-26</h3>
      <p><span>客户名称</span><span>操作</span></p>
      <ul>
        <li>
          <span>上海珍岛信息技术有限公司</span>
          <span><a>更换客服</a></span>
        </li>
        <li>
          <span>上海珍岛信息技术有限公司</span>
          <span><a>指派跟进</a></span>
        </li>
        <li>
          <span>上海珍岛信息技术有限公司</span>
          <span><a>续费</a></span>
        </li>
        <li>
          <span>上海珍岛信息技术有限公司</span>
          <span><a>工单跟进</a></span>
        </li>
        <li>
          <span>上海珍岛信息技术有限公司</span>
          <span><a>发送邮件</a></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import datePicker from './components/datePicker'

export default {
  name: 'calendar',
  components: {
    datePicker
  },
  data() {
    return {
      remarkDialog: false // 跟进备注提醒dialog
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
  overflow: auto;
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
    h3{
      background-color: #6699ff;
      color: #fff;
      font-size: 20px;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
    p{
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
      background-color: #e4e4e4;
      color: #666;
      span{
        display: inline-block;
        text-align: center;
        &:first-child{
          width: calc(100% - 140px);
          text-align: left;
          padding-left: 30px;
        }
        &:last-child{
          width: 140px;
        }
      }
    }
    ul{
      padding: 10px;
      overflow: auto;
      height: calc(100% - 100px);
    }
    li{
      height: 60px;
      span{
        display: inline-block;
        height: 100%;
        line-height: 60px;
        &:first-child{
          width: calc(100% - 140px);
          overflow: hidden;
          font-size: 16px;
          color: #666;
        }
        &:last-child{
          width: 140px;
          text-align: center;
          float: right;
          a{
            width: 140px;
            height: 40px;
            background-color: #6699ff;
            color: #fff;
            display: inline-block;
            border-radius: 5px;
            line-height: 40px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
