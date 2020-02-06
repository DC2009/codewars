/*
Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array(in Rust: Vec<Vec<u32>>) , ie:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]

Rules for validation

    Data structure dimension: NxN where N > 0 and √N == integer
    Rows may only contain integers: 1..N (N included)
    Columns may only contain integers: 1..N (N included)
    'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)

Note: the matrix may include non-integer elements.
*/

var Sudoku = function(data) 
{
  const isSquare = (n) => n > 0 && Math.sqrt(n) % 1 === 0

  const sequenceN = [...Array(data.length + 1).keys()].slice(1).join('')
  
  const checkArraySequence = (arr) => [...arr].sort((a, b) => a - b).join('') === sequenceN
  
  const getColumn = (matrix, column) => matrix.map(row => row[column])
  
  const getBlock = (matrix, idx, size) => {
    const result = []
    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        result.push(matrix[i][j])
      }
    }
    return result
  }
  
  return {
    isValid: function() {
      if (!isSquare(data.length)) return false

      if (!data.every(row => checkArraySequence(row))) return false
      
      if (!data.every((row, idx) => checkArraySequence(getColumn(data, idx)))) return false
      
      const sqrt = Math.sqrt(data.length)
      for (let i = 0; i < sqrt; i++) {
        if (!checkArraySequence(getBlock(data, 0, sqrt))) return false
      }
      
      return true;
    }
  };
};
