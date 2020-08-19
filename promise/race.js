// promise.race()顾名思义是赛跑的意思，返回参数中获取结果最快的异步请求的结果，不管结果本身成功还是失败
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('失败了')
  }, 500)
})


Promise.race([p1, p2]).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error) // '失败了'
})