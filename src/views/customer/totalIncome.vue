 /* * @Author: kaker.xutianxing * @Date: 2018-05-25 19:09:53 * @Last Modified by: kaker.xutianxing * @Last Modified time:
2018-05-26 17:15:09 */
<template>
  <div class="incomeData">
    <div class="top">
      <img src="@/assets/img/u112.png" alt="" class="logo">
      <div class="count">
        <h5>zhendao</h5>
        <ul>
          <li>
            <span>在线天数：
              <i style="font-weight:bold">360</i> 天</span>
            <p>
              <el-button type="primary" size="medium" style="float:left;" :disabled="true" title="功能开发中，敬请期待">查看月报</el-button>
            </p>
          </li>
          <li>
            <span>累计有效操作</span>
            <p>
              <span>0</span>
            </p>
          </li>
          <li>
            <span>关键词在线数</span>
            <p>
              <span>0</span>
            </p>
          </li>
          <li>
            <span>最近30天流量统计</span>
            <p>
              <span>0</span>
            </p>
          </li>
          <li>
            <span>曝光收益</span>
            <p>
              <span>0</span>
            </p>
          </li>
          <li>
            <span>访客留言</span>
            <p>
              <span>0</span>
            </p>
          </li>
          <li>
            <span>发布状况</span>
            <p>
              <span>0</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="rate">
      <h5>收益评级</h5>
      <div class="left" id="radar" >
      </div>
      <div class="right">
        <ul>
          <li>
            <p>
              <span>官网收益评级：</span>
              <el-rate v-model="levelData.siteLevel" disabled></el-rate>
            </p>
            <p class="two detail">
              <el-progress :show-text="false" color="#3399FF" :stroke-width="30" :percentage="80"></el-progress>
              <a>提升</a>
              <span>当前评分80分</span>
              <i v-if="80<100">80</i>
            </p>
          </li>
          <li>
            <p>
              <span>口碑收益评级：</span>
              <el-rate v-model="levelData.praiseLevel" disabled></el-rate>
            </p>
            <p class="one detail">
              <el-progress :show-text="false" color="#FF9933" :stroke-width="30" :percentage="90"></el-progress>
              <a>提升</a>
              <span>当前评分90分</span>
              <i v-if="90<100">90</i>
            </p>
          </li>
          <li>
            <p>
              <span>流量收益评级：</span>
              <el-rate v-model="levelData.flowLevel" disabled></el-rate>
            </p>
            <p class="one detail">
              <el-progress :show-text="false" color="#33CC00" :stroke-width="30" :percentage="80"></el-progress>
              <a>提升</a>
              <span>当前评分80分</span>
              <i v-if="80<100">80</i>
            </p>
          </li>
          <li>
            <p>
              <span>推广收益评级：</span>
              <el-rate v-model="levelData.pushLevel" disabled></el-rate>
            </p>
            <p class="one detail">
              <el-progress :show-text="false" color="#8e71c7" :stroke-width="30" :percentage="80"></el-progress>
              <a >提升</a>
              <span>当前评分80分</span>
              <i v-if="80<100">80</i>
            </p>
          </li>
        </ul>
        <el-dialog title="优化提示" :visible.sync="dialogVisible" width="650px" :before-close="handleClose">
          <div class="tip" v-if="alertItem==1">
            <ul>
              <li>
                <span>智能SEO</span>
                <p>由T云和珍岛云提供SEO智能优化资源，对用户选择的关键词进行辅助优化，当然您的网站更新不能停哦！</p>
                <el-button type="primary" class="fr gobutton" size="small" >前往提升</el-button>
              </li>
              <li>
                <span class="blue">
                  官网更新
                </span>
                <p>每周更新两次您的官网，产品、新闻、案例都可以，一定要注意设置页面关键词的规范。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small">前往提升</el-button>
              </li>
            </ul>
          </div>
          <div class="tip" v-if="alertItem==2">
            <ul>
              <li>
                <span>官网更新</span>
                <p>每周更新两次您的官网，产品、新闻、案例都可以，一定要注意设置页面关键词的规范。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small">前往提升</el-button>
              </li>
              <li>
                <span class="blue" style="padding:10px">
                  新媒体营销
                </span>
                <p>优质新闻源、电子地图标注、搜索引擎客服电话认证、百度百科，要排名有排名要面子有面子。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small" >前往提升</el-button>
              </li>
              <li>
                <span>商机发布</span>
                <p>商机发布也可以让优质信息满足企业口碑的需求。</p>

                <el-button type="primary" class="fr gobutton gotop" size="small" >前往提升</el-button>
              </li>
            </ul>
          </div>
          <div class="tip" v-if="alertItem==3">
            <ul>
              <li>
                <span>官网更新</span>
                <p>每周更新两次您的官网，产品、新闻、案例都可以，一定要注意设置页面关键词的规范。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small" >前往提升</el-button>
              </li>
              <li>
                <span class="blue" style="padding:10px">再营销投放</span>
                <p>让离开官网的访客再回来？优酷、新浪、腾讯凤凰牵头的近百家图片广告位，引导访客再回来。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small">前往提升</el-button>
              </li>
              <li>
                <span>智能SEO</span>
                <p>由T云和珍岛云提供SEO智能优化资源，对用户选择的关键词进行辅助优化，当然您的网站更新不能停哦！</p>
                <el-button type="primary" class="fr gobutton" size="small">前往提升</el-button>
              </li>
              <li>
                <span class="blue">智能商铺</span>
                <p>这是您的第二官网，依托于B2B平台权重更高，多多更新，排名流量会更好，商机发布即可同步智能商铺。</p>
                <el-button type="primary" class="fr gobutton" size="small">前往提升</el-button>
              </li>
            </ul>
          </div>

          <div class="tip" v-if="alertItem==4">
            <ul>
              <li>
                <span>商机发布</span>
                <p>一个月准备好10条商情是最低标准，没事就发一条，设置好了关键词，效果随之就来了。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small">前往提升</el-button>
              </li>
              <li>
                <span class="blue">联盟新闻</span>
                <p>联盟新闻发布的是优质资源，每天都有限额，效果当然也是很好的，注意设置的关键词。</p>
                <el-button type="primary" class="fr gobutton gotop" size="small">前往提升</el-button>
              </li>
            </ul>
          </div>

        </el-dialog>
      </div>
    </div>
    <div class="onLIne">
      <div class="left fl">
        <h5>官网关键词上线统计</h5>
        <div>
          <p>日最高值： 100
            <span class="fr">累计值： 100</span>
          </p>
          <p class="line-center">
            <span>100</span>
            <i>在线关键词</i>
          </p>
          <div id="onLineCount"></div>
        </div>
      </div>
      <div class="right fr">
        <h5>官网关键词上线趋势统计</h5>
        <div id="onLineTrend"></div>
      </div>
    </div>
    <div class="onLIne">
      <div class="left fl">
        <h5>推广关键词上线统计</h5>
        <div >
          <p>日最高值： 100
            <span class="fr">累计值： 100</span>
          </p>
          <p class="line-center">
            <span>100</span>
            <i>在线关键词</i>
          </p>
          <div id="popularizeCount"></div>
        </div>
      </div>
      <div class="right fr">
        <h5>推广关键词上线趋势统计</h5>
        <div id="popularizeTrend" ></div>
      </div>
    </div>
    <div class="onLIne">
      <div class="left fr">
        <h5>流量统计</h5>
        <div>
          <p>日最高值： 100
            <span class="fr">昨日增长： 100</span>
          </p>
          <p class="line-center">
            <span>100</span>
            <i>近30天流量</i>
          </p>
          <div id="flowCount"></div>
        </div>

      </div>
      <div class="right fl">
        <h5>流量趋势统计</h5>
        <div id="flowTrend"></div>
      </div>
    </div>
    <!--<div class="sort-table">
      <h5>搜索词排行榜（TOP10）</h5>
      <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="关键字" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="关键字" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="关键字" align="center">
        </el-table-column>
        <el-table-column prop="address" label="平均停留时间（S）" align="center">
        </el-table-column>
        <el-table-column prop="address" label="跳出率" align="center">
        </el-table-column>
      </el-table>
    </div>-->
    <div class="company-table">
      <h5>企业口碑</h5>
      <div class="left fl">
        <p class="line-center">
          <span>是梵蒂冈</span>
          <i>企业曝光量</i>
        </p>
        <div id="company-canvas"></div>
        <h3>企业曝光量</h3>
        <p>指企业通过T云发布的产品或公司信息在网络上被展现的次数。</p>
        <h3>口碑</h3>
        <p>是指客户搜索会员产品或公司时所看到的内容，等同于网络社会对会员产品或公司的评价。</p>
      </div>
      <div class="right fr" id="praise">
        <el-table :data="praiseData" style="width: 100%" :height="450">
          <el-table-column prop="TypeName" label="口碑" width="180" align="center">
          </el-table-column>
          <el-table-column label="口碑指数" width="180" align="center">
            <template slot-scope="scoped">
              <el-rate v-model="scoped.row.LevelVal" disabled></el-rate>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="查看" align="center">
            <template slot-scope="scoped">
              <div class="make">
                <i class="el-icon-view" title="查看"></i>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'incomeData',
  data() {
    return {
      dialogVisible: false,
      levelData: {
        siteLevel: 5,
        praiseLevel: 4,
        flowLevel: 3,
        pushLevel: 2
      },
      alertItem: 1,
      praiseData: [{
        TypeName: 'sdf',
        LevelVal: 5
      }],
      tableRowClassName: [{
        TypeName: 'sdf',
        LevelVal: 5
      }]
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    drawEcharts(dom, option) {
      const domEchart = echarts.init(document.getElementById(dom))
      domEchart.setOption(option)
    }
  },
  mounted() {
    const option1 = {
      color: ['#f93', '#3c6', '#39f', '#d48265'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position: function(pt) {
          return [pt[0] + 20, pt[1] - 20]
        }
      },
      legend: {
        orient: 'vertical',
        x: 'center',
        y: 'bottom',
        data: ['百度搜索', '搜狗搜索', '360搜索']
      },
      series: [
        {
          name: '搜索引擎',
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '40%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'inside', // 标签的位置
              textStyle: {
                fontSize: 12 // 文字的字体大小
              },
              formatter: '{d}%'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: '百度搜索' },
            { value: 310, name: '搜狗搜索' },
            { value: 234, name: '360搜索' }]
        }
      ]
    }
    const option2 = {
      radar: [{
        indicator: [{
          text: '流量',
          max: 6
        },
        {
          text: '官网',
          max: 6
        },
        {
          text: '口碑',
          max: 6
        },
        {
          text: '推广',
          max: 6
        }
        ],
        radius: 120,
        startAngle: 45,
        splitNumber: 6,
        shape: 'circle',
        name: {
          formatter: '{value}',
          textStyle: {
            color: '#333',
            fontWeight: 'bold'
          }
        },
        splitArea: {
          areaStyle: {
            color: 'rgba(255, 255, 255, 1)',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(51, 153, 255, 1)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgb(94, 94, 94)'
          }
        }
      }],
      series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        },
        data: [{
          value: 20,
          symbolSize: 5,
          lineStyle: {
            normal: {
              type: 'solid',
              color: '#f93'
            }
          },
          label: {
            normal: {
              show: true,
              formatter: function(params) {
                return params.value + '星 '
              },
              color: '#f93'
            }
          },
          areaStyle: {
            normal: {
              color: 'rgba(51, 153, 255, 0.4)'
            }
          }
        }]
      }]
    }
    const option3 = {
      color: ['#8e71c7', '#f93', '#3c6', '#39f'],
      legend: {
        top: 12,
        data: ['关键词总数', '百度', '搜狗', '360']
      },
      grid: {
        left: '10%',
        right: '4%',
        bottom: '10%'
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#2eb2eb',
        axisPointer: {
          lineStyle: {
            width: 2,
            color: '#85c2fe'
          }
        }
      },
      series: [{
        name: '关键词总数',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '百度',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '搜狗',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '360',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      }]
    }
    this.drawEcharts('onLineCount', option1)
    this.drawEcharts('radar', option2)
    this.drawEcharts('popularizeCount', option1)
    this.drawEcharts('onLineTrend', option3)
    this.drawEcharts('popularizeTrend', option3)
    this.drawEcharts('flowTrend', option3)
    this.drawEcharts('flowCount', option1)
    this.drawEcharts('company-canvas', option1)
  }
}
</script>

<style scoped>
.gotop {
  margin-top: 24px;
}

.gobutton {
  margin-right: 15px;
}

#praise >>> td {
  height: 40px;
}

.incomeData >>> .module_alert {
  padding: 0;
}

.incomeData {
  padding: 10px;
  overflow: auto;
  height: 100%;
}

.incomeData .top {
  width: 100%;
  height: 130px;
  background-color: #fff;
  position: relative;
  padding-left: 108px;
}

.incomeData .top .logo {
  position: absolute;
  top: 25px;
  left: 20px;
  width: 78px;
  height: 78px;
  border-radius: 78px;
}

.incomeData .count h5 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
  height: 40px;
}

.incomeData .count li {
  float: left;
  width: 13%;
  text-align: center;
}

.count li:first-child {
  width: 22%;
}

.count li:first-child span {
  text-align: left;
}

.count li p {
  border-top: 1px dashed #999;
  padding: 15px 0;
  text-align: center;
}

.count li p span {
  font-size: 24px;
  color: #f90;
}

.count li p a {
  width: 130px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #eee;
  background-color: #409eff;
  border-radius: 5px;
  text-align: center;
  float: left;
}

.count li > span {
  height: 25px;
  color: #5e5e5e;
  display: block;
}

.count li > span i {
  color: #f60;
}

.incomeData .rate {
  width: 100%;
  height: 400px;
  margin-top: 10px;
  background: #fff;
  position: relative;
}

.incomeData .rate h5 {
  height: 40px;
  background-color: #446eaf;
  color: #fff;
  padding: 0 20px;
  line-height: 40px;
  font-size: 16px;
}

.incomeData .rate #radar {
  width: 400px;
  height: 360px;
  float: left;
}

.incomeData .rate > p {
  position: absolute;
  bottom: 10px;
  width: 400px;
  text-align: center;
}

.incomeData .rate .right {
  float: left;
  width: 590px;
  padding: 30px 20px 10px;
}

.incomeData .rate .right li {
  margin-bottom: 20px;
}

.incomeData .rate .right p {
  height: 30px;
}

.incomeData .rate .right p > span {
  float: left;
  font-size: 14px;
}

.incomeData .rate .right p >>> .el-progress {
  width: 500px;
  float: left;
}

.incomeData .rate .right p:last-child {
  line-height: 30px;
  text-align: right;
}

.incomeData .rate .right p:last-child a {
  background-color: #409eff;
  color: #fff;
  height: 20px;
  width: 40px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
}

.incomeData .rate .right .detail {
  position: relative;
}

.incomeData .rate .right .detail > span {
  position: absolute;
  bottom: 0;
  left: 100px;
  color: #fff;
  font-size: 12px;
}

.incomeData .rate .right .detail > i {
  position: absolute;
  bottom: 0;
  right: 100px;
  color: #fff;
}

.incomeData .rate .right >>> .el-progress-bar__outer {
  background-color: #a1a1a1;
}

.incomeData .rate .right .two >>> .el-progress-bar__inner {
  background-color: #f93;
}

.incomeData .rate .right .three >>> .el-progress-bar__inner {
  background-color: #3c0;
}

.incomeData .rate .right .four >>> .el-progress-bar__inner {
  background-color: #c6f;
}

.incomeData .rate .tip li {
  height: 90px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  position: relative;
}

.incomeData .rate .tip li span {
  width: 57px;
  height: 57px;
  border-radius: 57px;
  background-color: #f93;
  position: absolute;
  padding: 14px;
  line-height: 15px;
  text-align: center;
  color: #fff;
  left: 10px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.incomeData .rate .tip li span.blue {
  background-color: #0cf;
}

.incomeData .rate .tip li p {
  padding-left: 80px;
  height: auto;
  padding-top: 10px;
}

.incomeData .rate >>> .el-dialog {
  height: auto;
}

.incomeData .rate >>> .el-dialog__body {
  padding: 10px 10px 0px;
  min-height: 300px;
  overflow-y: auto;
}

.incomeData .rate >>> .el-dialog__footer {
  background-color: #fff;
}

.incomeData .rate .tip li a {
  margin-right: 15px;
  width: 80px;
  text-align: center;
  height: 25px;
  line-height: 26px;
  background-color: #39f;
  border-radius: 5px;
  color: #fff;
}

.incomeData .onLIne {
  margin-top: 10px;
  overflow: hidden;
}

.incomeData .onLIne .left,
.incomeData .onLIne .right {
  height: 350px;
  background-color: #fff;
}

.incomeData .onLIne .left h5,
.incomeData .onLIne .right h5 {
  height: 40px;
  background-color: #446eaf;
  color: #fff;
  padding: 0 20px;
  line-height: 40px;
  font-size: 16px;
}

.incomeData .onLIne .left {
  width: 300px;
  position: relative;
}

.incomeData .onLIne .left .line-center {
  position: absolute;
  top: 160px;
  left: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  text-align: center;
}

.incomeData .onLIne .left .line-center span {
  display: block;
  font-size: 18px;
  font-weight: bold;
}

.incomeData .onLIne .right {
  width: calc(100% - 320px);
}

.incomeData .onLIne .left p {
  padding: 10px 20px;
}

#onLineCount,
#popularizeCount,
#flowCount {
  width: 100%;
  height: 270px;
}

#onLineTrend,
#popularizeTrend,
#flowTrend {
  width: 100%;
  height: 310px;
}

.incomeData .sort-table,
.incomeData .company-table {
  margin-top: 10px;
}

.incomeData .sort-table h5,
.incomeData .company-table h5 {
  height: 40px;
  background-color: #446eaf;
  color: #fff;
  padding: 0 20px;
  line-height: 40px;
  font-size: 16px;
}

.incomeData .sort-table >>> .el-table .warning-row {
  background: #ecf5ff;
}

.incomeData .company-table .left {
  width: 300px;
  position: relative;
  background-color: #fff;
  height: 450px;
}

.incomeData .company-table .left p {
  padding: 0 20px;
}

.incomeData .company-table .left .line-center {
  position: absolute;
  top: 80px;
  left: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  text-align: center;
}

.incomeData .company-table .left .line-center span {
  display: block;
  font-size: 18px;
  font-weight: bold;
}

#company-canvas {
  width: 100%;
  height: 250px;
}

.incomeData .company-table .left h3 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  padding: 0 20px;
  margin-bottom: 10px;
}

.incomeData .company-table .left h3:last-of-type {
  margin-top: 30px;
}

.incomeData .company-table .right {
  width: 680px;
  height: 450px;
}
</style>
