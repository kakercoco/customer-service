/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-14 10:56:07 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-14 14:16:26
 */
<template>
  <div class="customer-detail">
    <el-card class="box-card">
      <h4>公司基本信息</h4>
      <ul>
        <li><span>公司名称</span><span>上海珍岛有限公司</span></li>
        <li><span>公司编号</span><span>上海公司</span></li>
        <li><span>公司属性</span><span>上海珍岛有限公司</span></li>
        <li><span>保护模式</span><span>上海珍岛有限公司</span></li>
        <li><span>推荐人</span><span>上海珍岛有限公司</span></li>
        <li><span>客户等级</span><span>上海珍岛有限公司</span></li>
        <li><span>负责人</span><span>上海珍岛有限公司</span></li>
        <li><span>信息来源</span><span>上海珍岛有限公司</span></li>
        <li><span>修改时间</span><span>上海珍岛有限公司</span></li>
        <li><span>垫数额</span><span>上海珍岛有限公司</span></li>
        <li><span>团购客户</span><span>上海珍岛有限公司</span></li>
        <li><span>创建时间</span><span>上海珍岛有限公司</span></li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <h4>公司详细信息</h4>
      <ul>
        <li><span>公司座机</span><span>02100-12120</span></li>
        <li><span>公司传真</span><span>上海珍岛有限公司</span></li>
        <li><span>国家名称</span><span>上海珍岛有限公司</span></li>
        <li><span>行业</span><span>上海珍岛有限公司</span></li>
        <li><span>官网地址</span><span>上海珍岛有限公司</span></li>
        <li><span>注册资金</span><span>上海珍岛有限公司</span></li>
        <li><span>公司地址</span><span>上海珍岛有限公司</span></li>
        <li><span>主营业务</span><span>上海珍岛有限公司</span></li>
        <li><span>业务主要推广区域</span><span>上海珍岛有限公司</span></li>
        <li><span>区域划分</span><span>上海珍岛有限公司</span></li>
        <li><span>业务类型</span><span>上海珍岛有限公司</span></li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <h4>首要联系人</h4>
      <ul>
        <li><span>联系人</span><span>上海珍岛有限公司</span></li>
        <li><span>职位</span><span>上海珍岛有限公司</span></li>
        <li><span>性别</span><span>上海珍岛有限公司</span></li>
        <li><span>决策权</span><span>上海珍岛有限公司</span></li>
        <li><span>常用email</span><span>上海珍岛有限公司</span></li>
        <li><span>手机</span><span>上海珍岛有限公司</span></li>
        <li><span>拒绝邮件打扰</span><span>上海珍岛有限公司</span></li>
        <li><span>标记</span><span>上海珍岛有限公司</span></li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'customerInforDetail',
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
.customer-detail{
  padding: 10px;
  height: 100%;
  overflow: auto;
  .el-card{
    margin-bottom: 20px;
  }
  h4{
    background: #eee;
    padding: 0 20px;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  li{
    float: left;
    width: 50%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    span{
      float: left;
      width: 50%;
      &:first-child{
        width: 45%;
        color: #999;
        text-align: right;
        margin-right: 20px;
      }
      &:last-child{
        text-align: left;
      }
    }
  }
}
</style>
