function solution(input) {
  const arr = input.split('').map(e => parseInt(e))
  let first = 0
  let second = 1
  let counter = 0
  let sum = 0

  while (second < arr.length) {
      if (arr[first] === 0) {
          first++
      } else if ((arr[first] === 1) && (arr[second] === 0)) {
          counter++
      } else if ((arr[first] === 1) && (arr[second] === 1)) {
          sum = Math.max(sum, counter)
          counter = 0
          first = second
          console.log(`Sum: ${sum}`)
      }
      second++
  }
  console.log(sum)
  return sum
}

// solution('1000010001')
// solution('1001')
// solution('10100')
// solution('1111')
// solution('100000')
