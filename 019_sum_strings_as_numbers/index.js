/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) {
  const digitsA = a.replace(/^[0]+/g, '').split('').reverse()
  const digitsB = b.replace(/^[0]+/g, '').split('').reverse()

  let result = ''
  let longer = Math.max(digitsA.length, digitsB.length);
  let carry = false;

  for (let i = 0; i < longer; i++) {
    let sum
    if (digitsA[i] && digitsB[i]) {
      sum = parseInt(digitsA[i], 10) + parseInt(digitsB[i], 10);

    } else if (digitsA[i] && !digitsB[i]) {
      sum = parseInt(digitsA[i], 10);

    } else if (!digitsA[i] && digitsB[i]) {
      sum = parseInt(digitsB[i], 10);
    }

    if (carry) {
        sum += 1;
        carry = false;
    }
    if(sum >= 10) {
      carry = true;
      result += sum.toString()[1];
    }else {
      result += sum.toString();
    }
  }
  result = result.split('').reverse().join('');

  if(carry) {
    result = '1' + result;
  }
  return result;
}
