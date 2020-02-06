/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  const comments = input.split('\n');
  for (let i in markers) {
    for (let j in comments) {
      let idx = comments[j].indexOf(markers[i]);
      if (idx > -1) {
        comments[j] = comments[j].substring(0, idx).trim();
      } 
    }
  }
  return comments.join('\n');
};
