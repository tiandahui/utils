const chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
const chnUnitSection = ["", "万", "亿", "万亿", "亿亿"]
const chnUnitChar = ["", "十", "百", "千"]
const numToChn = function (num) {
  const index = num.toString().indexOf('.')
  if (index != -1) {
    const str = num.toString().slice(index)
    let a = '点'
    for (let i = 1;i < str.length;  i++) {
      a += chnNumChar[parseInt(str[i])]
    }
  }
}

const sectionToChinese = function (section) {
  let str = '', chnStr = '', zero = false, count = 0
  while(section > 0) {
    const v = section % 10
    if (v==0) {
      if (zero) {
        zero = false
        chnStr = chnNumChar[v] + chnStr
      }
    } else {
      zero = true
      str = chnNumChar[v]
      str += chnUnitChar[count]
      chnStr = str + chnStr
    }
    count++
    section = Math.floor(section / 10)
  }
  return chnStr
}

// 未完待续