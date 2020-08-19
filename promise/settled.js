// 返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果
// 有多个彼此不依赖的异步任务完成时或者想知道每个promise的结果时使用
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('suceess')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('失败L')
  }, 2000)
})

Promise.allSettled([p1, p2]).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})

// [
//   { status: 'fulfilled', value: 'suceess' },
//   { status: 'rejected', reason: '失败L' }
// ]