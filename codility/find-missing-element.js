function solution(A) {
  A.sort()
  let first = 0
  let second = 1
  let missing = undefined
  while (second < A.length) {
    const diff = A[second] - A[first]
    if (diff > 1) {
      missing =  A[first] + 1
      break
    } else {
      first++
      second++
    }
  }
  return missing

}

const arr = [2, 3, 1, 5]
console.log(solution(arr))