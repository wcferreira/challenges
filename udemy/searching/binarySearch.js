function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (target === arr[middle]) {
      return middle
    } else if (target > arr[middle]) {
      left = middle + 1
    } else {
      middle - 1
    }
  }
  return -1
}

console.log(binarySearch([2, 5, 8, 9, 11, 12, 15, 22, 35], 15))