function clone(obj) {
  let num
  switch (typeof obj) {
    case 'undefined':
      break
    case 'number':
      num = obj - 0
      break
    case 'string':
      num = obj + ''
      break
    case 'object':
      if (obj === null) {
        num = null
        break
      }
        if (Object.prototype.toString.call(obj).slice(8, -1) === 'Array') {
          num = []
          for (let i = 0; i < obj.length; i++) {
            num.push(clone(obj[i]))
          }
        } else {
          num = {}
          for (let k in obj) {
            num[k] = clone(obj[k])
          }
        }
      break
      default: 
      num = obj
      break
  }
  return num
}
const a = {
  'b': 1,
  'c': [2, {name: 'aaa'}, undefined, null, '222']
}
console.log(clone(a))