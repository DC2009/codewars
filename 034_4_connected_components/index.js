/*
Image processing is a broad term that tends to be used to group algorithms that work on bidimensional arrays. This definition is often generalized for more dimensions, but we are going to keep it simple for this kata.

A binary image is an image that only has two possible colors on each pixel (normally, white and black). Here is an example with 4x10 pixels:

+----------+
| *** ** * |
| ****** **|
| ** *   * |
|    *     |
+----------+

With this representation, the asterisks are counted as "set" pixels (white) and the spaces are counted as "empty" pixels (black).

We also say that pixels are 4-connected when they are exactly to the left, right, up or down to each other. We do not count diagonally connected pixels because that is called 8-connectivity. A 4-connected component is a set of 4-connected points that are all either set or empty. The example above has two white and four black 4-connected components.

Finally, you task is to make an algorithm that counts the number of white 4-connected components in an image given as a string in the format above (including the borders). The correct answer for the example above would be 2.

Note that the input image's dimensions are unbounded!

Tip: do not worry about coordinates or labeling. This kata is devised to be given short and elegant solutions, not efficient ones. Also, the correct string format is guaranteed.
*/

function connectedComponents(image) {
  const connector = '*'
  const arr = image.replace(/\+|\-|\|/g, '').split('\n').filter(e => e.length > 1).map(e => e.split(''))
  const queue = []
  let cnt = 0
  const mark = (x, y) => {
    arr[x][y] = cnt
    queue.push({ 'x': x, 'y': y})
  }
  
  if (arr.length < 2) return cnt

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === connector) {
        mark(i, j)
        while (queue.length > 0) {
          let e = queue.pop()
          if (e.x > 0 && arr[e.x - 1][e.y] === connector ) {
            mark(e.x - 1, e.y)
          } 
          if (e.y > 0 && arr[e.x][e.y - 1] === connector) {
            mark(e.x, e.y - 1)
          } 
          if (e.x < arr.length -1 && arr[e.x + 1][e.y] === connector) {
            mark(e.x + 1, e.y)
          } 
          if (e.y < arr[e.x].length -1 && arr[e.x][e.y + 1] === connector) {
            mark(e.x, e.y + 1)
          }
        }
        cnt++
      } 
    }
  }

  return cnt
}
