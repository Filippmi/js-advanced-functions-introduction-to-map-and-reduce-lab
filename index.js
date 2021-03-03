// Your code here
let mapToNegativize = function(array) {
  return array.map(x => x * -1)
}

let mapToNoChange = function(array) {
  return array.map(x => x)
}

let mapToDouble = function(array) {
  return array.map(x => x * 2)
}

let mapToSquare = function(array) {
  return array.map(x => x * x)
}

let reduceToTotal = function(src, acc) {
  return src.reduce((start, src) => start + src, acc)
}


// function reduceToTotal(src, startingPoint=0) {
//   let total = startingPoint
//   for (let i = 0; i < src.length; i++ ) {
//     total = total + src[i]
//   }
//   return total
// }