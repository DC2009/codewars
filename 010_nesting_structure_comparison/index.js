/*
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

For example:

 should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

*/

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) return false
  
  let result = true
  
  for (let i = 0; i < this.length; i++) {
    if (isArray(this[i]) && isArray(other[i])) {
      result = this[i].sameStructureAs(other[i])
    } else if (!isArray(this[i]) && !isArray(other[i])) {
      result = true
    } else {
      result = false
      break
    }
  }
  
  return result
};

// console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] )) // true
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] )) // false
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )) // true
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] )) // false
