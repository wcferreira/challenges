const arr = [10, 5, -1, 8, 3, -4, 15, 22, 2]

const min = arr.reduce((acc, curr) => {
  acc = Math.min(acc, curr)
  return acc
}, 0) 

console.log(`min: ${min}`)