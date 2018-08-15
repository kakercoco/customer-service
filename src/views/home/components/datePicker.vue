<template>
  <div id="calendar">
    <!-- 年份 月份 -->
    <h1 class="tac">
      <i class="el-icon-arrow-left" @click="pickPre(currentYear,currentMonth)"></i> 
      <span @click="pickYear(currentYear,currentMonth)">{{ currentYear }} 年 {{ currentMonth }}月 </span> 
      <i class="el-icon-arrow-right" @click="pickNext(currentYear,currentMonth)"></i>
    </h1>
     <!-- 星期 -->
    <p class="week">
      <span>周一</span>
      <span>周二</span>
      <span>周三</span>
      <span>周四</span>
      <span>周五</span>
      <span>周六</span>
      <span>周日</span>
    </p>
    <!-- 日期 -->
    <ul class="month">
      <!--如果不是本月  改变类名加'other-month'-->
      <li v-for="(dayobject, index) in days " :key="index" :class="{ 'other-month': dayobject.day.getMonth()+1 != currentMonth }">
        <!--如果是本月  还需要判断是不是这一天-->
        <div :class="{
          'today': dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate(), 
          'active': index === 10,
          }" 
          @click="remark">
          <h4>{{ dayobject.day.getDate() }}</h4>
          <p v-if="index<26">
            <span>更换客服</span>
            <span>指派跟进</span>
            <span>合同洽谈</span>
            <span>下次跟进</span>
          </p>
        </div>
      </li>
    </ul>
    <el-dialog title="跟进提醒备注" :visible.sync="remarkDialog" width="500px">
        <div class="remark-dialog">
          <h4 class="tar">2018-07-26</h4>
          <div class="message">
            <p>公司名称：<span>上海珍岛信息技术有限公司</span></p>
            <p>客户编号：<span>012221001</span></p>
            <p>任务名称：<span>测试任务</span></p>
          </div>
          <div class="text">
            上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司上海珍岛信息技术有限公司
          </div>
          <div class="file clearfix">
            <div class="file-list">
              <p><span>附件1.doc</span><a>下载</a></p>
              <p><span>附件1.doc</span><a>下载</a></p>
            </div>
            <div class="file-btn">
              <p class="tar">
                <el-button type="primary" size="small">写邮件</el-button>
              </p>
              <p class="tar">
                <el-button type="primary" size="small">已更进</el-button>
              </p>
            </div>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'datePicker',
  data() {
    return {
      remarkDialog: false,
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: []
    }
  },
  methods: {
    remark() {
      this.remarkDialog = true
    },
    initData: function(cur) {
      // var leftcount = 0 // 存放剩余数量
      var date

      if (cur) {
        date = new Date(cur)
      } else {
        var now = new Date()
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1))
        d.setDate(35)
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      }
      this.currentDay = date.getDate()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1

      this.currentWeek = date.getDay() // 1...6,0
      if (this.currentWeek === 0) {
        this.currentWeek = 7
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      )
      this.days.length = 0
      // 今天是周日，放在第一行第7个位置，前面6个
      // 初始化本周
      for (var i = this.currentWeek - 1; i >= 0; i--) {
        const d = new Date(str)
        d.setDate(d.getDate() - i)
        var dayobject = {} // 用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d
        this.days.push(dayobject) // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周
      for (let i = 1; i <= 35 - this.currentWeek; i++) {
        const d = new Date(str)
        d.setDate(d.getDate() + i)
        const dayobject = {}
        dayobject.day = d
        this.days.push(dayobject)
      }
    },
    pickPre: function(year, month) {
      // setDate(0) 上月最后一天
      // setDate(-1) 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1))
      d.setDate(0)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    pickNext: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1))
      d.setDate(35)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    pickYear: function(year, month) {
      alert(year + ',' + month)
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year
      var m = month
      if (m < 10) m = '0' + m
      var d = day
      if (d < 10) d = '0' + d
      return y + '-' + m + '-' + d
    }
  },
  mounted() {
    this.initData(null)
  }
}
</script>

<style  rel='stylesheet/scss' lang='scss' scoped >
h1 {
  color: #868686;
  font-size: 36px;
  i {
    font-weight: bold;
    color: #c6e2ff;
    margin: 0 40px;
    cursor: pointer;
    &:hover {
      color: #6699ff;
    }
  }
}
.week {
  width: 100%;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  span {
    float: left;
    height: 100%;
    text-align: center;
    width: 14.25%;
    font-weight: bold;
    color: #868686;
  }
}
.month {
  padding: 0 10px;
  li {
    width: 14.25%;
    height: 120px;
    float: left;
    padding: 0 5px;
    margin-bottom: 15px;
    div {
      box-shadow: 0 0 10px #6699ff;
      height: 100%;
      text-align: center;
      &.today {
        background-color: #ff9900;
        h4 {
          background-color: #ff9900;
        }
      }
      &.active {
        background-color: #5986df;
        h4 {
          background-color: #5986df;
        }
      }
      h4 {
        background-color: #6699ff;
        height: 35px;
        line-height: 35px;
        color: #fff;
        font-size: 30px;
      }
      p {
        span {
          width: 60px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border: 1px solid #eee;
          border-radius: 3px;
          cursor: pointer;
          box-shadow: 0 0 5px #ddd;
          display: inline-block;
          margin-top: 10px;
          background: #fff;
        }
      }
    }
  }
}
.remark-dialog{
  h4{
    font-size: 16px;
  }
  .message{
    line-height: 30px;
  }
  .text{
    margin-top: 15px;
  }
  .file{
    margin-top: 15px;
    .file-list{
      border: 1px solid #aaa;
      border-radius: 5px;
      padding: 10px;
      width: 50%;
      float: left;
      p{
        height: 35px;
        line-height: 35px;
        span{
          overflow: hidden;
          max-width: 130px;
          font-weight: bold;
          float: left;
        }
        a{
          border: 1px solid #aaa;
          border-radius: 3px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          width: 75px;
          float: right;
        }
      }
    }
    .file-btn{
      float: right;
      width: 50%;
      p{
        margin-top: 10px;
      }
    }
  }
}
</style>
