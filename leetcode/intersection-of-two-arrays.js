/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set()
  for (i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        set.add(nums1[i])
      }
    }
  }  
  return Array.from(set)
};

/*
const nums1 = [1,2,2,1]
const nums2 = [2,2]
*/
const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2))