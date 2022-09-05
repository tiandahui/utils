let saleOffice = {}
saleOffice.clientList = []
saleOffice.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}

saleOffice.trigger = function () {
  const key = Array.prototype.shift.call(arguments)
  const fns = this.clientList[key]
  if (!fns || fns.length === 0) {
    return false
  }
  for (var i = 0; i < fns.length; i++) {
    fns[i].apply(this, arguments)
  }
}


console.log(saleOffice)
saleOffice.listen('squareMeter88', function (price) {
  console.log('价格:', price)
})

saleOffice.listen('squareMeter110', function (price) {
  console.log('价格:', price)
})

saleOffice.trigger('squareMeter88', 88)
saleOffice.trigger('squareMeter110', 110)