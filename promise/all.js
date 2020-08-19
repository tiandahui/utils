// promise.all()可以将多个promise包装成一个新的promise实例，同时，成功和失败的返回值是不同的
// 成功的时候返回的是一个数组
// 失败的时候返回的是最先被reject状态的值

let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promise.reject('失败')

Promsie.all([p1, p2]).then(result => {
  console.log(result) // ['成功了'， 'success']
}).catch(error => {
  console.log(error)
})

Promise.all([p1, p3, p2]).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error) // '失败'
})

// 在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后正常显示，之前均显示loading状态


// 代码模拟
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}

let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})