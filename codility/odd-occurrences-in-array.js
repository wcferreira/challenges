function solution(A) {
  A.sort()
  let first = 0
  let second = 1
  while (second < A.length) {
    if (A[first] === A[second]) {
      first += 2
      second += 2
    } else {
      let temp = A[first]
      A[first] = A[second]
      A[second] = temp
      first++
      second++
    }
  }
  console.log(A)
}
 

// const arr = [9, 3, 9, 3, 9, 7, 9]
const arr = [5, 2, 2, 2, 2, 3, 5]

solution(arr)