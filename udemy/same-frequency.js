function sameFrequency(num1, num2) {
  const arr1 = num1.toString().split('')
  const arr2 = num2.toString().split('')

  const freqCount1 = {}
  const freqCount2 = {}

  for (const num of arr1) {
    freqCount1[num] = (freqCount1[num] || 0) + 1
  }

  for (const num of arr2) {
    freqCount2[num] = (freqCount2[num] || 0) + 1
  }

  for (const key in freqCount1) {
    if ((!(key in freqCount2)) || (freqCount1[key] !== freqCount2[key])) {
      return false
    }
  }
  return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))