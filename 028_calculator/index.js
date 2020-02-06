/*
Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
*/

const Calculator = function() {
  this.evaluate = string => {
    if (!string.match(/^\d+( [\+\-\/\*] \d+)*$/)) return null
    
    ops = string.split(' ')
    sums = []
    for (let i = 0; i < ops.length; i++) {
      if (ops[i] === '*') {
        const op1 = sums.pop()
        sums.push(Number(op1) * Number(ops[i + 1]))
        i++
      } else if (ops[i] === '/') {
        if (Number(ops[i + 1]) === 0) {
          return 'Error: division by zero'
        }
        const op1 = sums.pop()
        sums.push(Number(op1) / Number(ops[i + 1]))
        i++
      } else {
        sums.push(ops[i])
      }
    }
    
    let result = Number(sums[0])
    for (let i = 1; i < sums.length; i += 2) {
      if (sums[i] === '+') {
        result += Number(sums[i + 1])
      } else {
        result -= Number(sums[i + 1])
      }
    }

    return result
  }
}
