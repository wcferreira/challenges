/** 
 * Write a function called same, which accepts two arrays. The function should 
 * return true if every value in the array has its corresponding value squared 
 * in the second array. The frequency of values must be the same.
 * Examples:
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1, 2, 3], [1, 9])    // false
 * same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
*/

function same(arr1, arr2) {
  const freqCounter1 = {}
  const freqCounter2 = {}

  for (const element of arr1) {
    freqCounter1[element] = (freqCounter1[element] || 0) + 1
  }

  const arr2Aux = arr2.map(item => Math.sqrt(item))
  for (const element of arr2Aux) {
    freqCounter2[element] = (freqCounter2[element] || 0) + 1
  }

  for (const key in freqCounter1) {
    if ((!(key in freqCounter2)) || (freqCounter1[key] !== freqCounter2[key])) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 3], [1, 9]))