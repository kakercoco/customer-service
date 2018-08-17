/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-17 10:38:03 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-17 11:38:07
 */
<template>
  <div class="compact-approve">
    <el-table :data="compactTableData" style="width:100%;">
      <el-table-column prop="name" label="合同编号" align="center"></el-table-column>
      <el-table-column prop="date" label="合同类型" align="center"></el-table-column>
      <el-table-column prop="date" label="合同金额" align="center"></el-table-column>
      <el-table-column prop="date" label="合同年限" align="center"></el-table-column>
      <el-table-column prop="date" label="负责客服" align="center"></el-table-column>
      <el-table-column prop="date" label="调取申请人" align="center"></el-table-column>
      <el-table-column prop="date" label="调取申请时间" align="center"></el-table-column>
      <el-table-column prop="date" label="调取申请说明" align="center">
        <template slot-scope="scoped">
          <el-button type="primary" size="mini" @click="compactApplyDialog = true">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="电子合同" align="center" width="400">
        <template slot-scope="scoped">
          <el-button type="primary" size="mini">主合同</el-button>
          <el-button type="primary" size="mini">附加协议</el-button>
          <el-button type="primary" size="mini">同意</el-button>
          <el-button type="primary" size="mini">忽略</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="订单" align="center">
        <template slot-scope="scoped">
          <el-button type="primary" size="mini" @click="compactOrderDialog = true">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
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
    name: 'compactApprove',
    data() {
      return {
        currentPage: 1,
        pageSize: 10,
        total: 10,
        compactQueations: '', // 合同问题描述
        compactApply: '', // 合同调取申请说明
        compactOrderNOteStatus: false, // 合同订单备注状态
        compactOrderNOtes: '', // 合同订单备注内容
        compactApplyDialog: false, // 合同调取申请dialog
        compactOrderDialog: false, // 查看合同订单dialog
        compactTableData: [{
          name: '180.12.125.56',
          date: '2018-12-12'
        }, {
          name: '180.12.125.56',
          date: '2018-12-12'
        }, {
          name: '180.12.125.56',
          date: '2018-12-12'
        }]
      }
    },
    methods: {
      changeOrderNotes() {
        this.compactOrderNOteStatus = true
      },
      sizeChange() {

      },
      currentChange() {

      }
    },
    mounted() {
    }
  }
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.compact-approve{
  overflow: auto;
  height: 100%;
  padding: 10px;
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