function isSymmetryNum (start, end) {
  for (let i = start; i <= end; i++) {
    let num = +(i.toString().split('').reverse().join(''))
    if (num === i && i > 10) {
      console.log(i)
    }
  }
}
isSymmetryNum(1, 10000)