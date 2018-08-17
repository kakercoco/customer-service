/*
 * @Author: kaker.xutianxing 
 * @Date: 2018-08-16 20:28:25 
 * @Last Modified by: kaker.xutianxing
 * @Last Modified time: 2018-08-17 11:38:08
 */
<template>
  <div class="dispatch-customer">
    <div>
      <p>
        <el-button type="primary">批量分配</el-button>
        <el-button type="primary">批量指派跟进</el-button>
      </p>
      <el-table :data="serviceTableData">
        <el-table-column prop="name" width="80px">
          <template slot-scope="scoped">
            <el-radio v-model="selectedRadio" :label="scoped.row.radio"></el-radio>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="组名"></el-table-column>
        <el-table-column prop="name" label="客服总监"></el-table-column>
        <el-table-column prop="name" label="组长"></el-table-column>
        <el-table-column prop="name" label="组员"></el-table-column>
        <el-table-column prop="name" label="工龄"></el-table-column>
        <el-table-column prop="name" label="正在跟进的合同数"></el-table-column>
        <el-table-column prop="name" label="正在跟进的客户数"></el-table-column>
      </el-table>
    </div>
    <div>
      <p class="title">
        <el-select v-model="selected" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="searchkey"></el-input>
        <el-button type="primary">搜索</el-button>
        <el-button type="primary" @click="unDispatch">查看待分配客户</el-button>
      </p>
      <el-table :data="customerTableData">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="负责客服"></el-table-column>
        <el-table-column prop="name" label="组名"></el-table-column>
        <el-table-column prop="name" label="组长"></el-table-column>
        <el-table-column prop="name" label="客服总监"></el-table-column>
        <el-table-column prop="name" label="客户编号"></el-table-column>
        <el-table-column prop="name" label="客户公司名称"></el-table-column>
        <el-table-column prop="name" label="投诉标示"></el-table-column>
        <el-table-column prop="name" label="客户登记"></el-table-column>
        <el-table-column prop="name" label="负责商务"></el-table-column>
      </el-table>
      <div class="page">
        <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dispatchCustomer',
  data() {
    return {
      searchkey: '',
      selected: '',
      currentPage: 1,
      pageSize: 10,
      total: 10,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      selectedRadio: '',
      serviceTableData: [
        {
          name: '202-511-22',
          radio: 1
        },
        {
          name: '202-sd-452',
          radio: 2
        }
      ],
      customerTableData: [
        {
          name: '202-511-22',
          radio: 1
        },
        {
          name: '202-sd-452',
          radio: 2
        }
      ]
    }
  },
  methods: {
    unDispatch() {
      this.$message({
        type: 'warning',
        message: '没有找到待分配的客户'
      })
    },
    sizeChange() {

    },
    currentChange() {

    }
  },
  mounted() {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.dispatch-customer {
  height: 100%;
  overflow: auto;
  padding: 10px;
  .title {
    margin: 20px 0;
    & /deep/ .el-input {
      width: 200px;
      margin-right: 10px;
    }
  }
}
</style>