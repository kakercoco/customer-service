/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-13 17:35:20 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-16 19:44:00
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
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="客户信息" name="first">
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
      <el-tab-pane label="合同信息" name="second">
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
      <el-tab-pane label="服务信息" name="third">
        <div class="service-message">
          <p>
            <el-button type="primary" >查看月报</el-button>
            <ul class="tag" @click="tagDialog = true">
              <h5>客户标签:</h5>
              <li>标签1</li>
              <li>标签1</li>
              <li>标签1</li>
            </ul>
          </p>
          <el-dialog title="客户标签" :visible.sync="tagDialog" width="400px">
            <ul class="tag-dialog clearfix">
              <li v-for="(item, index) in 6" :key="index" :class="{active: index< 3}">标签1</li>
            </ul>
            <span slot="footer" class="dialog-footer">
              <el-button @click="tagDialog = false">取 消</el-button>
              <el-button type="primary" @click="tagDialog = false">确 定</el-button>
            </span>
          </el-dialog>
          <div class="my-table">
            <p class="title">
              <span>订单编号：z-545454545454</span>
              <span>订单金额：￥4515454.00</span>
              <span>用户名：士大夫</span>
              <el-button type="primary" size="small">收益总览</el-button>
            </p>
            <el-table :data="serviceTableData" border >
              <el-table-column  prop="date" align="center" label="产品名称"></el-table-column>
              <el-table-column  prop="date" align="center" label="剩余数量"></el-table-column>
              <el-table-column  prop="date" align="center" label="总次数"></el-table-column>
              <el-table-column  prop="date" align="center" label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini">查看进度</el-button>
                </template>
              </el-table-column>
            </el-table>
            <p class="title">
              <span>订单编号：z-545454545454</span>
              <span>订单金额：￥4515454.00</span>
              <span>用户名：士大夫</span>
              <el-button type="primary" size="small">收益总览</el-button>
            </p>
            <el-table :data="serviceTableData" border >
              <el-table-column  prop="date" align="center" label="产品名称"></el-table-column>
              <el-table-column  prop="date" align="center" label="剩余数量"></el-table-column>
              <el-table-column  prop="date" align="center" label="总次数"></el-table-column>
              <el-table-column  prop="date" align="center" label="操作">
                <template slot-scope="scope">
                  <el-button type="primary" size="mini">查看进度</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="my-echart">
            <div id="service-echarts"></div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="维护工单" name="four">
        <p><el-button type="primary" @click="gotoInsertWorkOrder">添加维护工单</el-button></p>
        <el-table :data="workOrderTableData">
          <el-table-column prop="date" label="维护工单编号" align="center"></el-table-column>
          <el-table-column prop="date" label="合同编号" align="center"></el-table-column>
          <el-table-column prop="date" label="客户名称" align="center"></el-table-column>
          <el-table-column prop="date" label="产品" align="center"></el-table-column>
          <el-table-column prop="date" label="维护工单类型" align="center"></el-table-column>
          <el-table-column prop="date" label="优先级" align="center"></el-table-column>
          <el-table-column prop="date" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="date" label="状态" align="center"></el-table-column>
          <el-table-column prop="date" label="操作" align="center" width="300px">
            <template slot-scope="scoped">
              <el-button type="primary" size="mini" @click="maintainOrderDialog = true">查看</el-button>
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="primary" size="mini">撤回</el-button>
              <el-button type="primary" size="mini">催单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="跟进记录" name="five">
        <p>
          <el-button type="primary">指派更进</el-button>
          <el-button type="primary" @click="followRemindDialog = true">下次跟进提醒</el-button>
          <el-button type="primary" @click="followRecordDialog = true">添加跟进记录</el-button>
        </p>
        <el-table :data="followRecordTableData">
          <el-table-column prop="name" label="创建人"></el-table-column>
          <el-table-column prop="name" label="是否客服"></el-table-column>
          <el-table-column prop="name" label="跟进目的"></el-table-column>
          <el-table-column prop="name" label="联系人"></el-table-column>
          <el-table-column prop="name" label="创建人"></el-table-column>
          <el-table-column prop="name" label="跟进内容"></el-table-column>
          <el-table-column prop="name" label="跟进类型"></el-table-column>
          <el-table-column prop="name" label="跟进方式"></el-table-column>
          <el-table-column prop="name" label="创建日期"></el-table-column>
        </el-table>
      </el-tab-pane>
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
    <el-dialog :visible.sync="maintainOrderDialog" title="查看维护工单" class="maintain-order-dialog" width="1000px">
      <el-row>
        <el-col :span="12">
          <el-col :span="8">客户</el-col>
          <el-col :span="16">上海珍岛有限公司</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">负责客服</el-col>
          <el-col :span="16">张三</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">扶着商务</el-col>
          <el-col :span="16">李四</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">合同</el-col>
          <el-col :span="16">z-45454787</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">产品</el-col>
          <el-col :span="16">域名备案</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">维护工单类型</el-col>
          <el-col :span="16">域名转入</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">维护工单状态</el-col>
          <el-col :span="16">已完成</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">优先级</el-col>
          <el-col :span="16">高</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">用户名</el-col>
          <el-col :span="16">zhendao56565</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">域名</el-col>
          <el-col :span="16">wwww.sa.com;www.sads.com</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">执行人</el-col>
          <el-col :span="16">账务</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">执行开始时间</el-col>
          <el-col :span="16">2018-12-12</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">执行结束时间</el-col>
          <el-col :span="16">2018-12-12</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">执行情况说明</el-col>
          <el-col :span="16">萨拉实打实的理解阿斯兰的感觉阿斯顿</el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">备注</el-col>
          <el-col :span="16">萨拉实打实的理解阿斯兰的感觉阿斯顿</el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-col :span="8">内容</el-col>
          <el-col :span="16">萨拉实打实的理解阿斯兰的感觉阿斯顿</el-col>
        </el-col>
        <el-col :span="24">
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
        </ul>
        </el-col>
        <el-col :span="24">
          <el-col :span="16">
            <ul class="file-list">
              <li>
                <span>附件1.doc</span>
                <a href=""><el-button type="primary" size="mini" class="fr">下载</el-button></a>
              </li>
              <li>
                <span>附件1.doc</span>
                <a href=""><el-button type="primary" size="mini" class="fr">下载</el-button></a>
              </li>
            </ul>
          </el-col>
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog :visible.sync="followRecordDialog" title="添加跟进记录">
      <el-form ref="form" :model="followRecordForm" label-width="120px">
        <el-form-item label="跟进目的：">
          <el-select v-model="followRecordForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-select v-model="followRecordForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跟进类型：">
          <el-select v-model="followRecordForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跟进方式：">
          <el-select v-model="followRecordForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跟进内容：">
          <el-col :span="12">
            <el-input type="textarea"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="followRemindDialog" title="下次跟进提醒" class="follow-remind-dialog">
      <el-row>
        <el-col :span="4">
          提醒日期
        </el-col>
        <el-col :span="20">
          <el-date-picker v-model="followRemindDate" type="date" placeholder="选择日期"></el-date-picker>
        </el-col>
        <el-col :span="4">
          提醒备注
        </el-col>
        <el-col :span="15">
          <div class="remind-editor">
            富文本
          </div>
        </el-col>
        <el-col :span="24">
          <upload-file :fileList="fileList" @success="uploadSuccess" @remove="removeFile" ></upload-file>
        </el-col>
      </el-row>
      <span slot="footer">
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts'
import uploadFile from '@/components/uploadFile/uploadFile'
export default {
  name: 'customerInfor',
  components: {
    uploadFile
  },
  data() {
    return {
      activeName: 'five',
      feedbackDialog: false, // 投诉dialog
      getAccountDialog: false, // 获取客服账号dialog
      compactPassDialog: false, // 合同是否通过dialog
      compactApplyDialog: false, // 合同调取申请dialog
      compactOrderDialog: false, // 查看合同订单dialog
      maintainOrderDialog: false, // 查看维护工单dialog
      followRecordDialog: false, // 添加跟进记录dialog
      followRemindDialog: false, // 下次跟进提醒dialog
      compactOrderNOteStatus: false, // 合同订单备注编辑状态
      compactQueations: '', // 合同未通过的问题描述
      compactApply: '', // 合同申请原因说明
      compactOrderNOtes: '', // 合同订单备注
      tagDialog: false, // 客户标签dialog
      followRemindDate: '', // 下次跟进提醒日期
      fileList: [],
      domainTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      compactTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      serviceTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      workOrderTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      followRecordTableData: [{
        name: '180.12.125.56',
        date: '2018-12-12'
      }],
      followRecordForm: {
        region: ''
      }
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
    gotoInsertWorkOrder() {
      this.$router.push({
        path: '/customer/maintainOrderInsert'
      })
    },
    changeOrderNotes() {
      this.compactOrderNOteStatus = true
    },
    uploadSuccess(fileList) {
      this.fileList = fileList
    },
    removeFile(val) {
      this.fileList.splice(val, 1)
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(document.getElementById('service-echarts'))
      this.chart.clear()
      // 绘制图表
      this.chart.setOption(
        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      )
    }
  },
  mounted() {
    console.log(this.$route)
    this.drawLine()
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
.service-message{
  &>p{
    margin-bottom: 20px;
  }
  .my-table{
    width: 50%;
    float: left;
    .title{
      background-color: #eee;
      color: #666;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      font-size: 14px;
      span{
        margin-right: 10px;
      }
    }
    .el-table{
      margin-bottom: 20px;
    }
  }
  .my-echart{
    float: right;
    width: 50%;
    #service-echarts{
      width: 100%;
      height: 300px;
    }
  }
  .tag {
    float: right;
    height: 40px;
    border: 1px solid #ddd;
    line-height: 40px;
    border-radius: 5px;
    padding: 0 10px;
    cursor: pointer;
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
}
.maintain-order-dialog{
  .el-col{
    margin-bottom: 10px;
  }
  .el-col-8{
    font-size: 16px;
  }
}
.follow-remind-dialog{
  .el-col-4{
    font-size: 16px;
    line-height: 40px;
  }
  .el-col{
    margin-bottom: 10px;
  }
  .remind-editor{
    background-color: #eee;
    height: 150px;
  }
}
</style>
