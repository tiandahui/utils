// function addToTree (arr) {
//   let result = {}
//   if (!Array.isArray(arr) || !arr.length) return result
//   let map = {}
//   arr.forEach(item => {
//     map[item.id] = item
//   })
//   arr.forEach(item => {
//     let parent = map[item.parentId]
//     if (parent) {
//       (parent.children || (parent.children = [])).push(item)
//     } else {
//       result = item
//     }
//   })
//   return result
// }

function deleteMin (str) {
  let map = {}
  for(let i = 0; i< str.length;i++) {
    if (map[str[i]]) {
      map[str[i]]++
    } else {
      map[str[i]]=1
    }
  }
  let arr = Object.values(map).sort()
  let min = arr[0]
  let result
  for (let v in map) {
    if (map[v]=== min ) {
      result = str.split(v).join("")
    }
  }
}

deleteMin('aabbbc')