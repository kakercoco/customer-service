//author:xutianxing
<template>
  <div class="total">
      <div class="total-title">
          <p class="fl">已在线<span>169</span>天</p>
          <div class="total-right">
            <el-row :gutter="0">
                <el-col :span="4"><p>累计有效操作</p><p>2355</p></el-col>
                <el-col :span="4"><p>关键词在线数</p><p>0</p></el-col>
                <el-col :span="4"><p>最近30天流量统计</p><p>2355</p></el-col>
                <el-col :span="4"><p>曝光收益</p><p>1</p></el-col>
                <el-col :span="4"><p>客户询盘</p><p>4</p></el-col>
                <el-col :span="4"><p>发布状况</p><p>2355</p></el-col>
            </el-row>
          </div>
      </div>
      <div class="total-wrap">
          <ul>
              <li>
                  <p class="total-li-title">
                      <span>关键词统计（全部）</span><i>历史最高：532 </i><i>累计：557</i>
                      <a>更多</a>
                  </p>
                  <div class="total-li-progress" v-show="firstLi==1">
                        <el-progress type="circle" :percentage="80" :width=140 :stroke-width=10 status="success" :show-text="false"></el-progress>
                        <p>在线数量<span>80</span></p>
                  </div>
                  <div class="total-li-progress" v-show="firstLi==2">
                        <el-progress type="circle" :percentage="20" :width=140 :stroke-width=10 status="success" :show-text="false"></el-progress>
                        <p>在线数量<span>20</span></p>
                  </div>
                  <div class="total-li-line" v-if="userStatus==1">
                      <p class="red"></p>
                      <p></p>
                      <p></p>
                      <span>差</span>
                      <div>远低于T云平均水平，撸起袖子加油干吧</div>
                  </div>
                  <div class="total-li-line" v-if="userStatus==2">
                      <p class="warning"></p>
                      <p class="warning"></p>
                      <p></p>
                      <span>好</span>
                      <div>远低于T云平均水平，撸起袖子加油干吧</div>
                  </div>
                  <div class="total-li-line" v-if="userStatus==3">
                      <p class="success"></p>
                      <p class="success"></p>
                      <p class="success"></p>
                      <span>优秀</span>
                      <div>远低于T云平均水平，撸起袖子加油干吧</div>
                  </div>
                  <p class="total-li-btn">
                      <a :class="{selected:firstLi==1}" @click="firstTab(1,1)">按来源划分</a> |
                      <a :class="{selected:firstLi==2}" @click="firstTab(2,2)">按搜索引擎划分</a>
                  </p>
              </li>
              <li>
                  <p class="total-li-title">
                      <span>流量统计（最近30天）</span>
                      <a>更多</a>
                  </p>
                  <div class="total-li-pv fl">
                      <h3>流量比较</h3>
                      <p>上周：0</p>
                      <p>本周：0</p>
                  </div>
                  <div class="total-li-progress" v-show="secendLi==1">
                        <el-progress type="circle" :percentage="80" :width=140 :stroke-width=10 status="success" :show-text="false"></el-progress>
                        <p style="left:191px;">在线数量<span>80</span></p>
                        <div class="progress-pv"><span></span><i>直接访问 100.00% </i></div>
                  </div>
                  <div class="total-li-progress" v-show="secendLi==2">
                        <el-progress type="circle" :percentage="60" :width=140 :stroke-width=10 status="success" :show-text="false"></el-progress>
                        <p style="left:191px;">在线数量<span>80</span></p>
                        <div class="progress-pv"><span></span><i>网站 100.00%</i></div>
                  </div>
                  <p class="total-li-btn">
                      <a :class="{selected:secendLi==1}" @click="secendTab(1)">按来源划分</a> |
                      <a :class="{selected:secendLi==2}" @click="secendTab(2)">按应用划分</a>
                  </p>
              </li>
              <li>
                  <p class="total-li-title">
                      <span>发布状况（近十周）</span><i>商机数：16</i><i>  发布量：376</i>
                      <a>更多</a>
                  </p>
                  <div id="myChart" style="width: 490px;height: 220px;" v-show="thirdLi==1"></div>
                  <div id="myChart2" style="width: 490px;height: 220px;" v-show="thirdLi==2"></div>
                  <p class="total-li-btn">
                      <a :class="{selected:thirdLi==1}" @click="thirdTab(1)">按商机数划分</a> |
                      <a :class="{selected:thirdLi==2}" @click="thirdTab(2)">按发布量划分</a>
                  </p>
              </li>
              <li>
                  <p class="total-li-title">
                      <span>浏览排行榜（Top6）</span>
                      <a>更多</a>
                  </p>
                    <ul class="total-last-li" v-show="fourLi==1">
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                        <li>
                           <span> http://www.nmgcb.com.cn/pinfo/company-14320-showinfo-2469099.htmlny-14320-showinfo-2469099.html</span><i>1</i>
                        </li>
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                        <li>
                           <span> http://www.nmgcb.com.cn/pinfo/company-14320-showinfo-2469099.htmlny-14320-showinfo-2469099.html</span><i>1</i>
                        </li>
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                        <li>
                           <span> http://www.nmgcb.com.cn/pinfo/company-14320-showinfo-2469099.htmlny-14320-showinfo-2469099.html</span><i>1</i>
                        </li>
                        <li>
                            <span> http://www.nmgcb.com.cn/pinfo/.html </span><i>1</i>
                        </li>
                    </ul>
                    <div id="myChart3" style="width: 490px;height: 220px;" v-show="fourLi==2"></div>
                  <p class="total-li-btn">
                      <a :class="{selected:fourLi==1}" @click="fourTab(1)">按来源划分</a> |
                      <a :class="{selected:fourLi==2}" @click="fourTab(2)">按地区划分</a>
                  </p>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'total',
  data() {
    return {
      userStatus: 1, // 用户在线状态的显示效果
      firstLi: 1, // 第一个li的tab
      secendLi: 1, // 第二个li的tab
      thirdLi: 1, // 第三个li的tab
      fourLi: 1 // 第四个li的tab
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    firstTab(val, lv) {
      this.firstLi = val
      this.userStatus = lv
    },
    secendTab(val) {
      this.secendLi = val
    },
    thirdTab(val) {
      this.thirdLi = val
      const myChart2 = echarts.init(document.getElementById('myChart2'))
      myChart2.setOption({
        color: '#666',
        xAxis: {
          type: 'category',
          data: [
            '第1周',
            '第2周',
            '第3周',
            '第4周',
            '第5周',
            '第6周',
            '第7周',
            '第8周',
            '第9周',
            '第10周'
          ]
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: [10, 0, 5, 1, 0, 0, 13, 0, 8, 1],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            barWidth: '20px'
          }
        ],
        grid: {
          left: '5%',
          right: '3%',
          top: 40,
          bottom: 40
        }
      })
    },
    fourTab(val) {
      this.fourLi = val
      const myChart3 = echarts.init(document.getElementById('myChart3'))
      myChart3.setOption({
        color: '#bcedb9',
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['广州', '深圳', '上海']
        },
        series: [
          {
            data: [3, 1, 5],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#666'
              }
            },
            barWidth: '40px'
          }
        ],
        grid: {
          left: '10%',
          right: '10%',
          top: 40,
          bottom: 40
        }
      })
    },
    drawLine() {
      const myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        color: '#666',
        xAxis: {
          type: 'category',
          data: [
            '第1周',
            '第2周',
            '第3周',
            '第4周',
            '第5周',
            '第6周',
            '第7周',
            '第8周',
            '第9周',
            '第10周'
          ]
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: [0, 0, 3, 1, 0, 0, 13, 0, 9, 1],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            barWidth: '20px'
          }
        ],
        grid: {
          left: '5%',
          right: '3%',
          top: 40,
          bottom: 40
        }
      })
    }
  }
}
</script>
<style scoped>
.total {
  height: 700px;
  background-color: #fff;
}
.total-title {
  height: 100px;
  padding: 0 20px;
}
.total-title > p {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  border: 1px solid #00c27b;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  margin-top: 12.5px;
}
.total-title > p span {
  color: #f00;
  font-size: 16px;
}
.total-right {
  width: 850px;
  height: 100px;
  float: right;
  text-align: center;
}
.total-right .el-col-4 {
  height: 100px;
  padding-top: 30px;
}
.total-right p {
  font-size: 14px;
}
.total-right p:nth-of-type(2) {
  font-size: 16px;
}
.total-wrap > ul {
  height: 600px;
  width: 100%;
}
.total-wrap > ul > li {
  height: 300px;
  float: left;
  width: 50%;
  padding: 10px;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  position: relative;
}
.total-li-title span {
  height: 25px;
  line-height: 25px;
  background-color: #00c27b;
  display: inline-block;
  padding: 0 10px;
  color: #fff;
}
.total-li-title i {
  color: #333;
  font-weight: bold;
  margin-left: 15px;
}
.total-li-title a {
  float: right;
  border: 1px solid #eee;
  border-radius: 3px;
  color: #5d9cec;
  padding: 3px 5px;
  font-weight: bold;
}
.total-li-progress {
  padding: 10px 10px 10px 80px;
  position: relative;
}
.total-li-progress p {
  position: absolute;
  top: 60px;
  left: 120px;
  text-align: center;
  font-size: 14px;
}
.total-li-progress p span {
  display: block;
}
.total-li-line {
  padding: 0px 10px 10px 80px;
  height: 50px;
  line-height: 30px;
}
.total-li-line div {
  display: none;
  width: 250px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: #fbfbfb;
  border: 1px solid #ddd;
  margin-left: -50px;
}
.total-li-line:hover div {
  display: block;
}
.total-li-line p {
  width: 40px;
  height: 8px;
  border-radius: 8px;
  background-color: #ebebeb;
  float: left;
  margin-right: 3px;
  margin-top: 10px;
}
.total-li-line .red {
  background: #f00;
}
.total-li-line .warning {
  background: #5d9cec;
}
.total-li-line .success {
  background: #00c27b;
}
.total-li-btn {
  text-align: center;
  margin-top: 15px;
  clear: both;
  position: absolute;
  width: 490px;
  height: 25px;
  bottom: 20px;
}
.total-li-btn a {
  color: #5d9cec;
  font-size: 14px;
  transition: all 1s;
}
.total-li-btn a:hover {
  color: #00c27b;
}
.total-li-btn .selected {
  color: #00c27b;
}
.total-li-pv {
  width: 150px;
  height: 150px;
  text-align: center;
  padding: 20px 0;
  margin-top: 30px;
}
.total-li-pv h3 {
  font-size: 16px;
}
.total-li-pv p {
  margin-top: 10px;
}
.total-li-progress .progress-pv {
  position: absolute;
  left: 300px;
  top: 55px;
}
.progress-pv span {
  width: 15px;
  height: 8px;
  background-color: #00c27b;
  border-radius: 8px;
  display: inline-block;
}
.total-last-li {
  height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 15px;
  padding: 10px;
}
.total-last-li li {
  height: 30px;
  padding: 5px 0;
  border-bottom: 1px dashed #ddd;
}
.total-last-li li span {
  display: inline-block;
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.total-last-li li i {
  float: right;
  width: 20%;
  line-height: 20px;
  text-align: center;
}
</style>
