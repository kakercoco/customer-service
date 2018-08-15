/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-13 17:35:20 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-15 14:24:44
 */
<template>
  <div class="customer-infor">
    <p class="customer-infor-btn">
      <el-button type="primary" @click="feedbackDialog = true">投诉标识：投诉中</el-button>
      <el-button type="primary" @click="gotoCustomerDetail">客户详细信息</el-button>
      <el-button type="primary" @click="gotoCompanyAttestation">公司认证</el-button>
      <el-button type="primary" @click="gotoCompanyInfor">公司资料</el-button>
      <el-button type="primary" @click="getAccountDialog = true">领取客服账号</el-button>
    </p>
    <el-tabs type="border-card">
      <el-tab-pane label="客户信息">
        <el-row :gutter="20">
          <el-col :span="6"><div class="customer-infor-li"><span>客户编号：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>公司名称：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>保护模式：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>客户类型：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>客户等级：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>负责商务：</span><i>阿萨德</i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>联系人：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>职位：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>性别：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>决策权：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>邮箱：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>公司座机：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>官网地址：</span><i></i></div></el-col>
          <el-col :span="6"><div class="customer-infor-li"><span>公司地址：</span><i></i></div></el-col>
        </el-row>
        <ul class="customer-infor-contact clearfix">
          <li v-for="(item, index) in 3" :key="index">
            <h3>联系人</h3>
            <p><span>首要联系人：</span><b>王坤</b></p>
            <p><span>性别：</span><b>男</b></p>
            <p><span>手机：</span><b>158978410054</b></p>
            <p><span>办公电话：</span><b>021-121545545</b></p>
            <p><span>职务：</span><b>经理</b></p>
            <p><span>决策权：</span><b>决策人</b></p>
            <p><span>邮箱：</span><b>614170417@qq.com</b></p>
          </li>
          <li>
            <i class="el-icon-plus add-contact"></i>
          </li>
        </ul>
        <div class="contact-kefu">
          <ul>
            <li>
              <h4>负责客服</h4>
              <p><span>手机：</span><b>18754547895</b></p>
              <p><span>邮箱：</span><b>18754547895@qq.com</b></p>
              <p><span>微信：</span><b>18754547895</b></p>
              <p><span>部门：</span><b>研发部</b></p>
            </li>
            <li>
              <h4>负责商务</h4>
              <p><span>手机：</span><b>18754547895</b></p>
              <p><span>邮箱：</span><b>18754547895@qq.com</b></p>
              <p><span>微信：</span><b>18754547895</b></p>
              <p><span>部门：</span><b>研发部</b></p>
            </li>
            <li>
              最近一条客服跟进记录
            </li>
            <li>
              最近一条商务跟进记录
            </li>
          </ul>
          <div class="contact-domain">
            <h4>域名备案信息</h4>
            <el-table :data="domainTableData" style="width:100%;">
              <el-table-column prop="name" label="域名" align="center"></el-table-column>
              <el-table-column prop="date" label="开始时间" align="center"></el-table-column>
              <el-table-column prop="date" label="到期时间" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="合同信息">
        <el-table :data="compactTableData" style="width:100%;">
          <el-table-column prop="name" label="合同编号" align="center"></el-table-column>
          <el-table-column prop="date" label="合同类型" align="center"></el-table-column>
          <el-table-column prop="date" label="合同金额" align="center"></el-table-column>
          <el-table-column prop="date" label="合同生效日" align="center"></el-table-column>
          <el-table-column prop="date" label="合同年限" align="center"></el-table-column>
          <el-table-column prop="date" label="合同状态" align="center"></el-table-column>
          <el-table-column prop="date" label="回款比例" align="center"></el-table-column>
          <el-table-column prop="date" label="发票比例" align="center"></el-table-column>
          <el-table-column prop="date" label="电子合同" align="center" width="400">
            <template slot-scope="scoped">
              <el-button type="primary" size="mini">主合同</el-button>
              <el-button type="primary" size="mini">附加协议</el-button>
              <el-button type="primary" size="mini" @click="compactPassDialog = true">是否通过</el-button>
              <el-button type="primary" size="mini" @click="compactApplyDialog = true">调取申请</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="订单" align="center">
            <template slot-scope="scoped">
              <el-button type="primary" size="mini" @click="compactOrderDialog = true">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="服务信息">
        <div>
           
        </div>
      </el-tab-pane>
      <el-tab-pane label="维护工单">定时任务补偿</el-tab-pane>
      <el-tab-pane label="跟进记录">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-dialog :visible.sync="feedbackDialog" width="500px" title="投诉内容">
      <div class="article">
        富文本
      </div>
       <el-upload
        class='upload-demo'
        action='https://jsonplaceholder.typicode.com/posts/'
        :on-success='handleSuccess'
        multiple
        :limit='3'
        :show-file-list='false'
        :on-exceed='handleExceed'
        :file-list='fileList'>
        <el-button size='small' type='primary'>上传附件</el-button>
        <div slot='tip' class='el-upload__tip'>支持word、excel、pdf、ppt、zip、rar等文件格式</div>
      </el-upload>
      <ul class='file-list' v-if="fileList.length > 0">
        <li v-for='(item,index) in fileList' :key='index'>
          <span>{{item.name}}</span>
          <a :href='item.url'><el-button type="primary" size="mini" class="fr">下载</el-button></a>
        </li>
      </ul>
      <span slot="footer">
        <el-button type="success">结案</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="getAccountDialog" width="500px" title="领取客服账号">
      <div class="get-account">
        <p>
          <span>用户名</span>
          <i>sdfs645646asd</i>
          <el-button type="primary" class="fr" @click="copyText('sdfs645646asd')">复制用户名</el-button>
        </p>
        <p>
          <span>密码</span>
          <i>sdfs645646asd</i>
          <el-button type="primary" class="fr" @click="copyText('123456')">复制密码</el-button>
        </p>
        <textarea id="input"></textarea>
      </div>
      <span slot="footer">
        <el-button type="primary">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="compactPassDialog" width="500px" title="是否通过">
      <el-row>
        <el-col :span="5">问题描述：</el-col>
        <el-col :span="16"><el-input type="textarea" v-model="compactQueations" :maxlength="20"></el-input></el-col>
      </el-row>
      <span slot="footer">
        <el-button type="danger">打回</el-button>
        <el-button type="primary">通过</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="compactApplyDialog" width="500px" title="电子合同调取申请">
      <p>该电子合同已超出客服可查看时间范围，如需调取查看，需再次提交申请。</p>
      <el-row>
        <el-col :span="5">原因说明：</el-col>
        <el-col :span="16"><el-input type="textarea" v-model="compactApply" :maxlength="200"></el-input></el-col>
      </el-row>
      <span slot="footer">
        <el-button @click="compactApplyDialog = false">取消</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="compactOrderDialog" width="500px" title="订单详细">
      <div class="compact-order-dialog clearfix">
        <ul>
          <li><span>用户名：</span>水电费455</li>
          <li><span>注册手机：</span>水电费455</li>
          <li><span>订单编号：</span>水电费455</li>
          <li><span>订单类型：</span>水电费455</li>
          <li><span>订单金额：</span>水电费455</li>
          <li><span>下单时间：</span>水电费455</li>
          <li><span>激活码：</span>水电费455</li>
          <li><span>激活状态：</span>水电费455</li>
          <li><span>激活时间：</span>水电费455</li>
          <li><span>到期日期：</span>水电费455</li>
        </ul>
        <el-row v-if="compactOrderNOteStatus">
          <el-col :span="24">备注：</el-col>
          <el-col :span="24"><el-input type="textarea" v-model="compactOrderNOtes"></el-input></el-col>
          <el-col :span="24"><el-button type="primary" @click="compactOrderNOteStatus = false">保存</el-button></el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="24" >
            {{compactOrderNOtes}}
          </el-col>
        </el-row>
        <p>
          <el-button type="primary" @click="changeOrderNotes">编辑备注</el-button>
          <el-button type="primary" @click="changeOrderNotes">添加备注</el-button>
          <el-button type="primary">升级续费</el-button>
        </p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'customerInfor',
  data() {
    return {
      feedbackDialog: false, // 投诉dialog
      getAccountDialog: false, // 获取客服账号dialog
      compactPassDialog: false, // 合同是否通过dialog
      compactApplyDialog: false, // 合同调取申请dialog
      compactOrderDialog: false, // 查看合同订单dialog
      compactOrderNOteStatus: false, // 合同订单备注编辑状态
      compactQueations: '', // 合同未通过的问题描述
      compactApply: '', // 合同申请原因说明
      compactOrderNOtes: '', // 合同订单备注
      fileList: [],
      domainTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      compactTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }]
    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.fileList = fileList
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    copyText(text) {
      var input = document.getElementById('input')
      input.value = text // 修改文本框的内容
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
      this.$message({
        type: 'success',
        message: input.value
      })
    },
    gotoCustomerDetail() {
      this.$router.push({
        path: '/customer/customerInforDetail',
        query: {
          name: 'name'
        }
      })
    },
    gotoCompanyAttestation() {
      this.$router.push({
        path: '/customer/companyAttestation',
        query: {
          name: 'name'
        }
      })
    },
    gotoCompanyInfor() {
      this.$router.push({
        path: '/customer/companyInfor',
        query: {
          name: 'name'
        }
      })
    },
    changeOrderNotes() {
      this.compactOrderNOteStatus = true
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.customer-infor{
  padding: 10px;
  height: 100%;
  overflow: auto;
  .customer-infor-btn{
    margin-bottom: 20px;
  }
  .customer-infor-li{
    height: 30px;
    line-height: 30px;
    overflow: hidden;
  }
  .customer-infor-contact{
    margin-top: 20px;
    li{
      width: 25%;
      float: left;
      height: 220px;
      border: 1px solid #eee;
      h3{
        font-size: 16px;
        border-bottom: 1px solid #eee;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        margin-bottom: 10px;
      }
      p{
        font-size: 14px;
        line-height: 25px;
        padding: 0 10px;
        height: 25px;
        overflow: hidden;
      }
      .add-contact{
        font-size: 100px;
        font-weight: bold;
        color: #666;
        display: block;
        text-align: center;
        line-height: 220px;
        cursor: pointer;
      }
    }
  }
  .contact-kefu{
    margin-top: 20px;
    height: 300px;
    ul{
      width: 60%;
      float: left;
      height: 100%;
      li{
        float: left;
        width: 50%;
        height: 50%;
        border: 1px solid #eee;
        h4{
          height: 30px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
          padding: 0 10px;
          margin-bottom: 10px;
          font-size: 16px;
        }
        p{
          height: 25px;
          line-height: 25px;
          padding: 0 10px;
          overflow: hidden;
          font-size: 14px;
        }
      }
    }
    .contact-domain{
      width: 40%;
      float: left;
      height: 100%;
      h4{
        height: 30px;
        line-height: 30px;
        border: 1px solid #eee;
        border-left: none;
        padding: 0 10px;
        margin-bottom: 10px;
        font-size: 16px;
      }
    }
  }
}
.file-list{
  margin-top: 20px;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  li{
    line-height: 35px;
    &>span{
      display: inline-block;
      max-width: 200px;
    }
  }
}
.article{
  width: 100%;
  height: 150px;
  background-color: #eee;
}
.upload-demo{
  margin-top: 20px;
}
.get-account{
  p{
    height: 50px;
    line-height: 50px;
    span{
      display: inline-block;
      font-size: 16px;
      width: 80px;
      margin-right: 20px;
    }
  }
  #input{
    opacity: 0;
    height: 0;
    display: block;
    width: 0;
  }
}
.compact-order-dialog{
  ul{
    width: 60%;
    float: left;
    margin-bottom: 10px;
    li{
      line-height: 30px;
      span{
        width: 80px;
        display: inline-block;
      }
    }
  }
  .el-row{
    width: 40%;
    float: left;
    .el-col{
      margin-bottom: 10px;
    }
  }
  &>p{
    clear: both;
  }
}
</style>
