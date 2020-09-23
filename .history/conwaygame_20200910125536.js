// Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

// The rules of the game are:

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.
// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)


function getGeneration(cells, generations) {
  var newArr = Array.from(cells);
  for (var j = 0; j < generations; j++) {
    var solArr = [];
    for (var h = 0; h < cells.length; h++) {
      var miniArr = [];
      for (var i = 0; i < cells[h].length; i++) {
        var topLeft = 0;
        var top = 0;
        var topRight = 0;
        var left = 0;
        var right = 0;
        var bottomLeft = 0;
        var bottom = 0;
        var bottomRight = 0;
        if (i - 1 >= 0) {
          left = newArr[h][i - 1];
          if (h - 1 >= 0) {
            topLeft = newArr[h - 1][i - 1];
            top = newArr[h - 1][i];
          }
          if (h + 1 < cells.length) {
            bottomLeft = newArr[h + 1][i - 1];
            bottom = newArr[h + 1][i];
          }
        }
        if (i + 1 < cells.length) {
          right = newArr[h][i + 1];
          if (h - 1 >= 0) {
            topRight = newArr[h - 1][i + 1];
            top = newArr[h - 1][i];
          }
          if (h + 1 < cells.length) {
            bottomRight = newArr[h + 1][i + 1];
            bottom = newArr[h + 1][i];
          }
        }
        if (newArr[h][i] > 0) {
          if (
            topLeft +
              top +
              topRight +
              left +
              right +
              bottomLeft +
              bottom +
              bottomRight >
              3 ||
            topLeft +
              top +
              topRight +
              left +
              right +
              bottomLeft +
              bottom +
              bottomRight <
              2
          ) {
            cells[h].splice(i,1,0);
            miniArr.push(0);
          } else {
            miniArr.push(1);
          }
        } else {
          if (
            topLeft +
              top +
              topRight +
              left +
              right +
              bottomLeft +
              bottom +
              bottomRight ===
            3
          ) {
            // cells[h].splice(i,1,1);
            miniArr.push(1);
          } else {
            miniArr.push(0);
          }
        }
      }
      solArr.push(miniArr);
    }
    newArr = solArr;
  }
  return newArr;
}

console.log(getGeneration(
  [
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],
  2
);
