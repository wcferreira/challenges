const bubleSort = arr => {
  let swapCounter = -1
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    swapCounter = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapCounter++
      }
    }
    if (swapCounter === 0) {
      break
    }
  }
  console.log(arr)
}

bubleSort([5, 2, 1, 3, 6, 4])
bubleSort([23, 42, 4, 16, 8, 15])