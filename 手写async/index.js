function asyncToGenerator(generatorFunc) {
  return function () { // 返回一个新函数
    const gen = generatorFunc.apply(this, arguments) // 调用generator函数，生成迭代器
    return new Promise((resolve, reject) => {
      function step (key, arg) {  // 定义一个step函数，用来一步步的跨过yield的障碍
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const {value, done} = generatorResult
        if(done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err=> step('throw', err))
        }
      }
      step('next')
    })
  }
}

function uniqueOccurrences(arr) {
  let uniqueArr = [...new Set(arr)]
  let countArr = []
  for (let i = 0; i < uniqueArr.length; i++) {
    countArr.push(arr.filter(item => item == uniqueArr[i]).length)
    console.log(countArr)
  }
  console.log(new Set(countArr))
  console.log(new Set(countArr).size)
  return countArr.length == new Set(countArr).size
};

// 测试
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 2])); // false