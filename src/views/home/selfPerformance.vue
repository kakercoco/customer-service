/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-10 17:28:46 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-10 18:36:44
 */
<template>
  <div class="self-performance">
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selfPerformance",
  data() {
    return {
      input: '',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
.self-performance {
  height: 100%;
  overflow: auto;
  padding: 10px;
}
</style>
