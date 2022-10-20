function uniqueOccurrences(arr) {
  const uniqueArr = [...new Set(arr)]
  const countArr = []
  for (let i =0; i < uniqueArr.length; i++) {
    countArr.push(arr.filter(item => item === uniqueArr[i]).length)
  }
  return countArr.length === new Set(countArr).size
}

// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 2])); // false

console.log(a);
a();
var a = 3;
function a() {
  console.log(10);
};
console.log(a);
a = 6;
a(); 