/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-14 15:01:31 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-14 15:09:57
 */
<template>
  <div class="company-infor">
    <el-row>
      <el-col :span="8">公司简称</el-col><el-col :span="16">上海加缪物联网科技有限公司</el-col>
      <el-col :span="8">主营品牌</el-col><el-col :span="16"></el-col>
      <el-col :span="8">经营模式</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司简介</el-col><el-col :span="16"></el-col>
      <el-col :span="8">主营方向</el-col><el-col :span="16"></el-col>
      <el-col :span="8">主营产品</el-col><el-col :span="16"></el-col>
      <el-col :span="8">产品描述</el-col><el-col :span="16"></el-col>
      <el-col :span="8">经营范围</el-col><el-col :span="16"></el-col>
      <el-col :span="8">公司网址</el-col><el-col :span="16"></el-col>
      <el-col :span="8">邮政编码</el-col><el-col :span="16"></el-col>
      <el-col :span="8">邮箱</el-col><el-col :span="16"></el-col>
      <el-col :span="8">手机</el-col><el-col :span="16"></el-col>
      <el-col :span="8">联系人电话</el-col><el-col :span="16"></el-col>
      <el-col :span="8">联系人英文名</el-col><el-col :span="16"></el-col>
      <el-col :span="8">性别</el-col><el-col :span="16"></el-col>
      <el-col :span="8">部门</el-col><el-col :span="16"></el-col>
      <el-col :span="8">职位</el-col><el-col :span="16"></el-col>
      <el-col :span="8">学历</el-col><el-col :span="16"></el-col>
      <el-col :span="8">身份证号码</el-col><el-col :span="16"></el-col>
      <el-col :span="8">生日</el-col><el-col :span="16"></el-col>
      <el-col :span="8">电话</el-col><el-col :span="16"></el-col>
      <el-col :span="8">传真</el-col><el-col :span="16"></el-col>
      <el-col :span="8">QQ</el-col><el-col :span="16"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'companyInfor',
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
.company-infor{
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
