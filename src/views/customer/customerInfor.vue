/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-13 17:35:20 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-13 18:39:39
 */
<template>
  <div class="customer-infor">
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
        <div>

        </div>
      </el-tab-pane>
      <el-tab-pane label="合同信息">配置管理</el-tab-pane>
      <el-tab-pane label="服务信息">角色管理</el-tab-pane>
      <el-tab-pane label="维护工单">定时任务补偿</el-tab-pane>
      <el-tab-pane label="跟进记录">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'customerInfor',
  data() {
    return {

    }
  },
  methods: {
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
  .customer-infor-li{
    height: 30px;
    line-height: 30px;
    overflow: hidden;
  }
}
</style>
