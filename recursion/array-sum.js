// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) return 0
  console.log('.')
  console.log(array)
  if (Array.isArray(array[0])) {
    console.log('>>> ' + array[0])
    arraySum(array[0])
  }

  console.log('..')
  console.log(array)
  return array[0] + arraySum(array.slice(1, array.length))
};

console.log(arraySum([1,[2]]))