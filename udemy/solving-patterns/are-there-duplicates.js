function areThereDuplicates(...args) {
  const freqCount = {}
  for (const element of args) {
    freqCount[element] = (freqCount[element] || 0) + 1
  }
   
  for (const key in freqCount) {
    if (freqCount[key] > 1) {
      return true
    }
  }
  return false
}


console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
