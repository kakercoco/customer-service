/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-14 14:39:50 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-14 14:53:11
 */
<template>
  <div class="attestation">
    <el-row>
      <el-col :span="8">公司名称</el-col><el-col :span="16">上海加缪物联网科技有限公司</el-col>
      <el-col :span="8">主营行业</el-col><el-col :span="16"></el-col>
      <el-col :span="8">企业类型</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司logo</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司所在地</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司地址</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司成立时间</el-col><el-col :span="16"></el-col>
      <el-col :span="8">法人姓名</el-col><el-col :span="16"></el-col>
      <el-col :span="8">法人身份证照片</el-col><el-col :span="16"></el-col>
      <el-col :span="8">法人性别</el-col><el-col :span="16"></el-col>
      <el-col :span="8">雇员人数</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司资产</el-col><el-col :span="16"></el-col>
      <el-col :span="8">注册资金</el-col><el-col :span="16"></el-col>
      <el-col :span="8">年营业额</el-col><el-col :span="16"></el-col>
      <el-col :span="8">营业执照</el-col><el-col :span="16"></el-col>
      <el-col :span="8">营业执照号码</el-col><el-col :span="16"></el-col>
      <el-col :span="8">证书年限</el-col><el-col :span="16"></el-col>
      <el-col :span="8">登记机关</el-col><el-col :span="16"></el-col>
      <el-col :span="8">其他资质证书</el-col><el-col :span="16"></el-col>
      <el-col :span="8">其他资质证书号码</el-col><el-col :span="16"></el-col>
      <el-col :span="8">其他资质证书年限</el-col><el-col :span="16"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'companyAttestation',
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
.attestation{
  padding: 10px;
  overflow: auto;
  height: 100%;
  .el-col-8{
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    padding: 0 30px;
  }
  .el-col{
    height: 50px;
    line-height: 50px;
  }
}
</style>
