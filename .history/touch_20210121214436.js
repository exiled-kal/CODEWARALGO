function connectFour(board) {
  board = board.join('|').replace(/,/g, '');
  if (/RRRR/.test(board)) return 'R';
  if (/YYYY/.test(board)) return 'Y';
  if (/R........R........R........R/.test(board)) return 'R';
  if (/Y........Y........Y........Y/.test(board)) return 'Y';
  if (/R.......R.......R.......R/.test(board)) return 'R';
  if (/Y.......Y.......Y.......Y/.test(board)) return 'Y';
  if (/R......R......R......R/.test(board)) return 'R';
  if (/Y......Y......Y......Y/.test(board)) return 'Y';
  if (/-/.test(board)) return 'in progress';
  return 'draw';
}

console.log(connectFour(board), 'R');