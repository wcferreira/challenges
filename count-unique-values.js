/**
 * Implement a function called countUniqueValues, which accepts a sorted array, 
 * and counts the unique values in the array. There can be negative numbers in 
 * the array, but it will always be sorted.
 * Examples:
 * countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
 * countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 */
function countUniqueValues(arr) {
  if (!arr.length) {
    return 0
  }

  let first = 0
  let second = 1
  let sum = 1
  while (second < arr.length) {
    if (arr[first] === arr[second]) {
      second++
    } else {
      first = second
      second++
      sum++
    }
  }
  return sum
}
console.log(countUniqueValues([]))
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))