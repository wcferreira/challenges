/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (Math.abs(dividend) === Math.abs(divisor)) {
      const out1 = (1 * Math.sign(dividend)) 
      const out2 = (1 * Math.sign(divisor))
      return out1 * out2
    }

    let output = 0
    for (let i = 1; i <= Math.abs(dividend); i++) {
      const result = Math.abs(divisor) * i
      if (result > Math.abs(dividend)) {
        output = i - 1
        break
      }
    }
    return output * Math.sign(divisor) * Math.sign(dividend)
};

//console.log(divide(1, 1))
//console.log(divide(-1, 1))
//console.log(divide(1, -1))
//console.log(divide(-1, -1))
console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(-2147483648, -1))