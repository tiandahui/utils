// 时间格式化方法
function timeFormat(time) {
  let date = new Date(time)
  let yy = time.getFullYear()
  let mm = time.getMonth() + 1
  let dd = time.getDate()
  mm = mm >= 10 ? mm : '0' + mm
  dd = dd >= 10 ? dd : '0' + dd
  date = `${yy}-${mm}-${dd}`
  return date
}