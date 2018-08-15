function generateMonthData(date) {
  var monthData = []
  var index = 1
  date.setDate(index)
  // 当月第一天星期几
  var weekFirstDay = date.getDay()
  // 当月最后一天号数
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  // 填充上个月
  monthData[0] = []
  // 上个月最后一天
  const lastMonthDate = new Date(date.getFullYear(), date.getMonth(), 0)
  // 上个月最后一天日期
  var lastMonthLastDate = lastMonthDate.getDate()
  // 补全上个月
  var first = 1
  while (first <= weekFirstDay) {
    monthData[0][weekFirstDay - first] = new MyDate(lastMonthDate.getFullYear(), lastMonthDate.getMonth() + 1, lastMonthLastDate--, weekFirstDay - first, 1, true)
    first++
  }
  var weekNum = 1
  while (index <= lastDay) {
    while (weekFirstDay < 7 && index <= lastDay) {
      monthData[weekNum - 1][weekFirstDay++] = new MyDate(date.getFullYear(), date.getMonth() + 1, index++, weekFirstDay - 1, weekNum, true)
    }
    if (index <= lastDay) {
      monthData[weekNum] = []
      weekFirstDay = 0
      weekNum++
    }
  }
  // 补全下个月
  date.setMonth(date.getMonth() + 1)
  index = 1
  var lastLength = monthData[weekNum - 1].length
  while (lastLength < 7) {
    monthData[weekNum - 1][lastLength] = new MyDate(date.getFullYear(), date.getMonth() + 1, index++, lastLength, weekNum, false)
    lastLength++
  }
  return monthData
}

class MyDate {
  constructor(year, month, date, day, weekNum, isCurrentMonth) {
    this.year = year
    this.month = month
    this.date = date
    this.day = day
    this.weekNum = weekNum
    this.isCurrentMonth = isCurrentMonth
  }
}
export default generateMonthData
