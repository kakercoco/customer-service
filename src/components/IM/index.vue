/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-08 09:08:18 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-08 10:33:37
 */
<template>
  <div class="user-im" v-if="open">
    <div class="title">
      <span>在线沟通</span>
      <i class="el-icon-close" @click="closeChat"></i>
      <i class="el-icon-plus"></i>
      <i class="el-icon-minus"></i>
    </div>
    <div class="user-im-list">
      <ul>
        <p><span>会话开始</span></p>
        <p><span>2018-06-25    09:12:25</span></p>
        <p><span>查看更多信息</span></p>
        <li class="left clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍岛云客服官网，您可以点击想要咨询的问题，或在对话框中直接输入问题向我提问哦~</p>
          </div>
        </li>
        <li class="right clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍岛云客服官网，</p>
          </div>
        </li>
        <li class="left clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍提问哦~</p>
          </div>
        </li>
        <li class="right clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，</p>
          </div>
        </li>
        <li class="right clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，</p>
          </div>
        </li>
        <li class="right clearfix">
          <img src="@/assets/img/u112.png" alt="">
          <div>
            <h6>小帅</h6>
            <p>亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，亲爱哒，欢迎来到珍岛云客服官网，</p>
          </div>
        </li>
      </ul>
      <div class="input">
        <div class="sort">
          <svg-icon icon-class="text"></svg-icon>
          <svg-icon icon-class="file"></svg-icon>
          <svg-icon icon-class="image"></svg-icon>
          <svg-icon icon-class="link"></svg-icon>
        </div>
        <div class="content">
          <el-input resize="none" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
          </el-input>
          <p class="tar">
            <el-button size="small" @click="closeChat">关闭</el-button>
            <el-button type="primary" size="small">发送</el-button>
          </p>
        </div>
      </div>
    </div>
    <div class="user-im-bio">
      <h5>公司简介</h5>
      <p>珍岛集团成立于2005年，秉承"整合数字资源,技术驱动营销"的理念,专注于数字营销人工智能服务领域平台型创新与整合。珍岛 “SaaS化智能营销服务云平台”则为企业用户提供了一站式、全方位、按需所取的数字营销工具、资源与服务。“平台化智能”则是对传统数字营销服务模型的全面革新，“数据驱动决策，服务众企共享”的“桌面化工作台”模式，大大降低企业数字营销的实践成本，同时也满足了众多企业个性化智能应用的实际所需。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userIM',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    closeChat() {
      this.$emit('close', false)
    }
  },
  mounted() {

  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.user-im{
  position: fixed;
  top: 150px;
  left: calc(50% - 420px);
  width: 950px;
  height: 730px;
  box-shadow: 0 0 10px #999;
  z-index: 9999;
  .title{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #6699ff;
    span{
      color: #fff;
    }
    i{
      color: #fff;
      float: right;
      height: 100%;
      line-height: 40px;
      font-size: 20px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .user-im-list{
    width: 750px;
    float: left;
    height: 690px;
    ul{
      height: 540px;
      overflow: auto;
      padding: 20px;
      & > p{
        margin-top: 10px;
        text-align: center;
        span{
          background-color: #f2f2f2;
          line-height: 26px;
          height: 25px;
          display: inline-block;
          padding: 0 10px;
          border-radius: 2px;
          color: #999;
          font-size: 12px;
        }
      }
    }
    li{
      margin-top: 10px;
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
      }
      div{
        width: 70%;
        h6{
          line-height: 30px;
        }
        p{
          background-color: #fff;
          padding: 10px;
          background-color: #f2f2f2;
          max-width: 100%;
          display: inline-block;
          border-radius: 3px;
          font-size: 13px;
          position: relative;
          &::after{
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f2f2f2;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
      }
      &.left{
        img{
          float: left;
          margin-right: 20px;
        }
        div{
          float: left;
          p{
            &::after{
              top: 10px;
              left: -5px;
            }
          }
        }
      }
      &.right{
        img{
          float: right;
          margin-left: 20px;
        }
        div{
          text-align: right;
          float: right;
          p{
            text-align: left;
            &::after{
              top: 10px;
              right: -5px;
            }
          }
        }
      }
    }
    .input{
      height: 150px;
      .sort{
        height: 30px;
        background-color: #ebeef3;
        padding: 5px 10px;
        svg{
          width: 20px;
          height: 20px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      .content{
        padding: 10px;
        & /deep/ textarea{
          border: none;
        }
        p{
          margin-top: 10px;
        }
      }
    }
  }
  .user-im-bio{
    width: 200px;
    height: 690px;
    float: right;
    background-color: #e4e4e4;
    padding: 30px 20px;
    h5{
      line-height: 25px;
      text-align: center;
    }
    p{
      font-size: 12px;
      color: #333;
      line-height: 20px;
    }
  }
}
</style>
