/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-09 17:56:10 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-10 17:23:20
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
          <div :class="{today: index ===25, 'active': index === 10}" @click="remark">
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
      <el-dialog title="跟进提醒备注" :visible.sync="remarkDialog" width="500px">
        <div class="remark-dialog">
          <h4 class="tar">2018-07-26</h4>
          <div class="message">
            <p>公司名称：<span>上海珍岛信息技术有限公司</span></p>
            <p>客户编号：<span>012221001</span></p>
            <p>任务名称：<span>测试任务</span></p>
          </div>
          <div class="text">
            上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司
          </div>
          <div class="file clearfix">
            <div class="file-list">
              <p><span>附件1.doc</span><a>下载</a></p>
              <p><span>附件1.doc</span><a>下载</a></p>
            </div>
            <div class="file-btn">
              <p class="tar">
                <el-button type="primary" size="small">写邮件</el-button>
              </p>
              <p class="tar">
                <el-button type="primary" size="small">已更进</el-button>
              </p>
            </div>
          </div>
        </div>
      </el-dialog>
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
export default {
  name: 'calendar',
  data() {
    return {
      remarkDialog: false // 跟进备注提醒dialog
    }
  },
  methods: {
    remark() {
      this.remarkDialog = true
    }
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
  .remark-dialog{
    h4{
      font-size: 16px;
    }
    .message{
      line-height: 30px;
    }
    .text{
      margin-top: 15px;
    }
    .file{
      margin-top: 15px;
      .file-list{
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 10px;
        width: 50%;
        float: left;
        p{
          height: 35px;
          line-height: 35px;
          span{
            overflow: hidden;
            max-width: 130px;
            font-weight: bold;
            float: left;
          }
          a{
            border: 1px solid #aaa;
            border-radius: 3px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            width: 75px;
            float: right;
          }
        }
      }
      .file-btn{
        float: right;
        width: 50%;
        p{
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
