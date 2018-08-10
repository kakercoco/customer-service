/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-07 09:36:29 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-09 17:23:43
 */
<template>
  <div class="IM">
    <div class="IM-left">
      <div class="contact-list">
        <div class="title">
          <img src="@/assets/img/u112.png" alt="">
          <h4>王帅帅</h4>
          <span>在线</span>
        </div>
        <div class="list">
          <p class="tabs">
            <span class="active">当前对话</span>
            <span>最近对话</span>
            <span>等待接入(5)</span>
          </p>
          <ul>
            <li v-for="(item, index) in 7" :key="index" :class="{active:index === 2}">
              <em v-if="index === 0">隐身</em>
              <i v-if="index !== 2">5</i>
              <img src="@/assets/img/u112.png" alt="">
              <div>
                <h6 class="from">微信 王帅帅
                  <time class="fr">10:50</time>
                </h6>
                <p>我公司网站突然打不开，怎么回事啊?</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact-question">
        <p>
          <span class="fr">收起
            <i class="el-icon-arrow-up"></i>
          </span>
          <em>常用语</em>
        </p>
        <div class="keywords-input">
          <el-input placeholder="请输入内容" v-model="keywords" prefix-icon="el-icon-search">
            <el-button slot="append" type="primary">搜索</el-button>
          </el-input>
        </div>
        <div class="question-tree">
          <p>注册登录问题</p>
          <el-tree :data="questionTree" @node-click="handleNodeClick"></el-tree>
        </div>
      </div>
    </div>
    <div class="IM-middle">
      <div class="IM-main">
        <div class="title">
          <h5 class="fl">王帅帅
            <span>（微信）</span>
          </h5>
          <p class="fr">IP:200.215.189.154 地理位置：湖北省武汉市</p>
        </div>
        <ul>
          <li class="left clearfix">
            <img src="@/assets/img/u112.png" alt="">
            <div>
              <h6>王帅帅 17:33:28</h6>
              <p> 我公司网站打不开，怎么回事啊？</p>
            </div>
          </li>
          <p>
            <span>2018-07-21 17:30:01</span>
          </p>
          <li class="right clearfix">
            <img src="@/assets/img/u112.png" alt="">
            <div>
              <h6>王帅帅 17:33:28</h6>
              <p> 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接......啊？</p>
            </div>
          </li>
          <li class="left clearfix">
            <img src="@/assets/img/u112.png" alt="">
            <div>
              <h6>王帅帅 17:33:28</h6>
              <p> 我公司网站打不开，怎么回事啊？</p>
            </div>
          </li>
          <p>
            <span>2018-07-21 17:30:01</span>
          </p>
          <li class="right clearfix">
            <img src="@/assets/img/u112.png" alt="">
            <div>
              <h6>王帅帅 17:33:28</h6>
              <p> 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接...... 先检查一下网络是否连接......啊？</p>
            </div>
          </li>
        </ul>
        <div class="IM-input">
          <div class="sort">
            <svg-icon icon-class="text"></svg-icon>
            <svg-icon icon-class="file"></svg-icon>
            <svg-icon icon-class="image"></svg-icon>
            <svg-icon icon-class="link"></svg-icon>
            <el-button type="primary" class="fr" size="small">记录问题</el-button>
          </div>
          <div class="content">
            <el-input resize="none" type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
            </el-input>
            <p class="tar">
              <el-button type="primary" size="small" @click="pushChat()">发送</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="IM-right">
      <p class="btn">
        <el-button type="primary" size="small">接入</el-button>
        <el-button type="primary" size="small">请求协助</el-button>
        <el-button type="primary" size="small" @click="dialogSetting = true">设置状态</el-button>
      </p>
      <el-dialog title="设置"  :visible.sync="dialogSetting"  width="560px"  :before-close="settingClose">
        <el-form :model="settingForm" class="setting-from" :rules="settingFormRules">
          <el-form-item label="客服名称：" :label-width="formLabelWidth" prop="name">
            <el-input v-model="settingForm.name" auto-complete="off" placeholder="请输入客服名称"></el-input>
          </el-form-item>
          <el-form-item label="头像：" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">支持jpg，jpeg，png，大小不超过100KB</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer">
          <el-button @click="settingClose">取 消</el-button>
          <el-button type="primary" @click="dialogSetting = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="list">
        <div class="keywords-input">
          <el-input placeholder="请输入内容" v-model="keywords" prefix-icon="el-icon-search">
            <el-button slot="append" type="primary">搜索</el-button>
          </el-input>
        </div>
        <div class="tabs">
          <p class="tab">
            <span class="active">客户信息</span>
            <span>订单信息</span>
            <span>跟进记录</span>
          </p>
          <el-button type="primary" class="fr">更多</el-button>
        </div>
        <ul>
          <li>
            <span> 客户标识：</span>金牌客户</li>
          <li>
            <span> 公司名称：</span>珍岛信息技术（上海）有限公司</li>
          <li>
            <span> 公司地址：</span>上海市虹口区水电路682号天虹商务大厦6F/7F/16F/17F</li>
          <li>
            <span> 行业： </span>零售/批发</li>
        </ul>
        <ul>
          <li>
            <span>受理商务：</span>张芳</li>
          <li>
            <span>商务手机：</span>13012345678</li>
          <li>
            <span>商务邮箱：</span>4523655@qq.com</li>
          <li>
            <span>商务微信：</span>123466222</li>
          <li>
            <span>所在部门：</span>商务部</li>
        </ul>
        <ul>
          <li>
            <span>受理客服：</span>唐芳芳</li>
          <li>
            <span>客服手机：</span>13012345678</li>
          <li>
            <span>客服邮箱：</span>4523655@qq.com</li>
          <li>
            <span>客服微信：</span>123466222</li>
          <li>
            <span>所在部门：</span>客服部</li>
        </ul>
        <ul>
          <li>联系人1： 杨世双</li>
          <li>手机： 18918178001</li>
          <li>邮箱： young.yang@71360.com</li>
          <li>QQ： </li>
          <li>微信：</li>
        </ul>
        <ul>
          <li>联系人1： 杨帅</li>
          <li>手机： 18918178001</li>
          <li>邮箱： young.yang@71360.com</li>
          <li>QQ： </li>
          <li>微信：</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IM',
  data() {
    return {
      keywords: '', // 常用语关键词
      textarea: '', // 文本内容
      dialogSetting: false, // 设置状态dialog
      formLabelWidth: '100px',
      imageUrl: '', // 用户头像
      settingForm: {
        name: ''
      },
      settingFormRules: {
        name: [
          { required: true, message: '请输入客服名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      },
      websock: null,
      questionTree: [
        {
          label: '登录失败',
          children: [
            {
              label: '1.查看网络连接.......'
            },
            {
              label: '2.可以尝试关闭浏览器......'
            }
          ]
        },
        {
          label: '登录失败',
          children: [
            {
              label: '1.收不到手机验证码，可选择语音.......'
            },
            {
              label: '2.手机号占用........'
            },
            {
              label: '3.手机号占用........'
            },
            {
              label: '4.手机号占用........'
            },
            {
              label: '2.手机号占用........'
            },
            {
              label: '3.手机号占用........'
            },
            {
              label: '4.手机号占用........'
            },
            {
              label: '2.手机号占用........'
            },
            {
              label: '3.手机号占用........'
            },
            {
              label: '4.手机号占用........'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    settingClose() {
      this.dialogSetting = false
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    pushChat() {
      var speaktoDto = {
        "dialogId": '38',
        "content": this.textarea
      }
      const wm = this.Global.socketCmd("SpeakToDialog", speaktoDto)
      window.webSocket.send(wm)
    }
  },
  mounted() {
    // window.webSocket.send('123')
    window.webSocket.joinDialog()
  },
  destroyed() {
    // this.websock.close() // 离开路由之后断开websocket连接
  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.IM {
  height: 100%;
  .IM-left {
    width: 380px;
    height: 100%;
    float: left;
  }
  .IM-middle {
    width: calc(100% - 810px);
    height: 100%;
    float: left;
    padding: 10px;
    padding-bottom: 0;
    background-color: #f2f2f2;
  }
  .IM-right {
    width: 430px;
    height: 100%;
    float: right;
    .btn {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px dashed #eee;
      padding: 0 20px;
    }
    .keywords-input {
      padding: 10px;
    }
    .tabs {
      height: 40px;
      .el-button {
        margin-right: 10px;
      }
      .tab {
        width: 330px;
        float: left;
        line-height: 40px;
        background-color: #d7d7d7;
        span {
          float: left;
          width: 33.33%;
          height: 100%;
          text-align: center;
          font-size: 13px;
          cursor: pointer;
          &.active {
            background-color: #6699ff;
            color: #fff;
          }
        }
      }
    }
    ul {
      padding: 10px 20px;
    }
    li {
      line-height: 30px;
      font-size: 13px;
      color: #777;
    }
    .list {
      height: calc(100% - 40px);
      overflow: auto;
    }
    .setting-from{
      .el-input{
        width: 300px;
      }
      & /deep/ .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 124px;
        height: 124px;
        line-height: 124px;
        text-align: center;
      }
      .avatar {
        width: 124px;
        height: 124px;
        display: block;
      }
    }
  }
  .contact-list {
    .title {
      height: 120px;
      padding: 20px;
      img {
        float: left;
        width: 80px;
        height: 80px;
        border-radius: 5px;
        overflow: hidden;
      }
      h4 {
        float: left;
        width: 250px;
        margin-left: 10px;
        font-size: 18px;
        margin-top: 20px;
        color: #777;
      }
      span {
        float: left;
        width: 250px;
        font-size: 12px;
        margin-top: 10px;
        margin-left: 10px;
        padding-left: 10px;
        color: #999;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          background-color: #33cc33;
          position: absolute;
          top: 2px;
          left: 0;
        }
      }
    }
    .list {
      .tabs {
        height: 40px;
        line-height: 40px;
        background-color: #d7d7d7;
        span {
          float: left;
          width: 33.33%;
          height: 100%;
          text-align: center;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          &.active {
            background-color: #6699ff;
            color: #fff;
          }
        }
      }
      ul {
        height: 360px;
        overflow: auto;
      }
      li {
        height: 60px;
        padding: 0 10px;
        position: relative;
        &.active {
          background-color: #99ccff;
        }
        em {
          position: absolute;
          width: 45px;
          height: 20px;
          background-color: #ff9933;
          top: 0;
          left: 0;
          color: #fff;
          z-index: 2;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
        }
        i {
          position: absolute;
          width: 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 50%;
          background-color: #ff9933;
          color: #fff;
          bottom: 10px;
          right: 60px;
          font-size: 12px;
          text-align: center;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 3px;
          overflow: hidden;
          position: absolute;
          top: 5px;
          left: 10px;
        }
        div {
          padding: 5px 0;
          padding-left: 60px;
          border-bottom: 1px dashed #ccc;
          h6 {
            font-size: 14px;
            font-weight: normal;
            line-height: 25px;
          }
          p {
            font-size: 12px;
            color: #5e5e5e;
            line-height: 25px;
            height: 25px;
            overflow: hidden;
          }
        }
      }
    }
  }
  .contact-question {
    height: calc(100% - 520px);
    & > p {
      height: 40px;
      line-height: 40px;
      background-color: #e4e4e4;
      color: #666;
      font-size: 14px;
      font-weight: bold;
      em {
        display: block;
        width: 100px;
        margin: 0 auto;
        text-align: center;
      }
      span {
        color: #5584ff;
        margin-right: 10px;
        font-weight: normal;
        cursor: pointer;
      }
    }
    .keywords-input {
      padding: 10px;
      border-bottom: 1px dashed #ccc;
    }
    .question-tree {
      padding: 10px 30px;
      height: calc(100% - 100px);
      overflow: auto;
      p {
        font-size: 14px;
      }
    }
  }
  .IM-main {
    background-color: #fff;
    height: 100%;
    .title {
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border-bottom: 1px dashed #eee;
      h5 {
        font-size: 14px;
        color: #555;
      }
      span {
        color: #999;
        font-size: 12px;
        font-weight: normal;
      }
      p {
        font-size: 12px;
        color: #999;
      }
    }
    ul {
      padding: 15px;
      height: calc(100% - 290px);
      overflow: auto;
      clear: both;
      & > p {
        margin-top: 10px;
        text-align: center;
        span {
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
    li {
      margin-top: 30px;
      img {
        width: 64px;
        height: 64px;
        border-radius: 5px;
        overflow: hidden;
      }
      div {
        width: 70%;
        h6 {
          font-size: 12px;
          color: #868686;
          line-height: 20px;
          font-weight: normal;
          margin-bottom: 5px;
        }
        p {
          padding: 10px;
          background-color: #e4e4e4;
          display: inline-block;
          max-width: 100%;
          font-size: 12px;
          color: #797979;
          border-radius: 5px;
          text-align: left;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #e4e4e4;
            transform: rotate(45deg);
          }
        }
      }
      &.left {
        img {
          float: left;
          margin-right: 20px;
        }
        div {
          float: left;
          p {
            &::after {
              top: 10px;
              left: -5px;
            }
          }
        }
      }
      &.right {
        h6 {
          text-align: right;
        }
        img {
          float: right;
          margin-left: 20px;
        }
        div {
          text-align: right;
          float: right;
          p {
            &::after {
              top: 10px;
              right: -5px;
            }
          }
        }
      }
    }
    .IM-input {
      height: 250px;
      .sort {
        height: 40px;
        background-color: #ebeef3;
        padding: 5px 15px;
        svg {
          width: 25px;
          height: 25px;
          cursor: pointer;
          margin-right: 15px;
        }
      }
      .content {
        padding: 10px;
        p {
          margin-top: 10px;
        }
      }
      & /deep/ .el-textarea {
        textarea {
          // border: none;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
