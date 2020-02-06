/*
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
Example

For s = "abc", the result should be "bac". The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".
Input/Output

    [input] string s

    unique letters (2 <= length <= 26)

    [output] a string

    middle permutation.
*/

function middlePermutation(s) {
  let arr = s.split('').sort()
  let result = []
  let firstIndex = Math.ceil(s.length / 2)
  
  result.push(arr.splice(firstIndex - 1, 1)[0])
  
  if(s.length % 2){
    result.push(arr.splice(firstIndex - 2, 1)[0])
  }
  result = result.concat(arr.reverse())
  
  return result.join('')
}