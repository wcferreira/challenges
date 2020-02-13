/**
 * Given two strings, write a function to determine if the second string is an 
 * anagram of the first. An anagram is a word, phrase, or name formed by 
 * rearranging the letters of another, such as cinema, formed from iceman.
 * Examples:
 * validAnagram(‘’, ‘’) // true
 * validAnagram(‘aaz’, ‘zza’) // false
 * validAnagram(‘anagram’, ‘nagaram’) // true
 * validAnagram(‘rat’, ‘car’) // false
 * validAnagram(‘awesome’, ‘awesom’) // false
 * validAnagram(‘qwerty’, ‘qeywrt’) // true
 * validAnagram(‘texttwisttime’, ‘timetwisttext’) // true
 */

 function validAnagram(str1, str2) {
   const freqCounter1 = {}
   const freqCounter2 = {}

   for (const char of str1) {
     freqCounter1[char] = (freqCounter1[char] || 0) + 1
   }

   for (const char of str2) {
     freqCounter2[char] = (freqCounter2[char] || 0) + 1
   }

   for (const key in freqCounter1) {
     if ((!(key in freqCounter2)) || (freqCounter1[key] !== freqCounter2[key])) {
       return false
     }
   }
   return true
 }

 console.log(validAnagram('', ''))
 console.log(validAnagram('aaz', 'zza'))
 console.log(validAnagram('anagram', 'nagaram'))
 console.log(validAnagram('rat', 'car'))
 console.log(validAnagram('awesome', 'awesom'))
 console.log(validAnagram('qwerty', 'qeywrt'))
 console.log(validAnagram('texttwisttime', 'timetwisttext'))