// 防抖
// 多次执行，只执行最后一次
function debounce (func, wait) {
  let  timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func(...args), wait)
  }
}

// 节流
// 固定时间内，只执行一次
// function throttle (func, wait) {
//   let context, args
//   let previous = 0
//   return function () {
//     let now = +new Date()
//     context = this
//     args = arguments
//     if (now - previous > wait) {
//       func.apply(context, args)
//       previous = now
//     }
//   }
// }
// 首次触发
function throttle (func, wait) {
  let context, args
  let previous = 0
  return function () {
    let now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      func.apply(tontext, args)
      previous = now
    }
  }
}
// 第一次和最后一次
function throttle1 (func, wait, op= {}) {
  let timer = null
  let previous = 0
  return function () {
    let now = +new Date()
    if (now - previous > wait) {
      if (pre === 0 && !op.bengin) {
        pre = now
        return
      }
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      func()
      pre = now
    } else if (!timer && op.end) {
      timer = setTimeout(() => {
        func()
        timer = null
      }, wait)
    }
  }
}