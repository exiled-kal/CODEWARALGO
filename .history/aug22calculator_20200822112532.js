function formatDuration(seconds) {
  let newSeconds = '';

  for (let i = 0; i < num.length; i++) {
    if (seconds[i] == 1) {
      return '1 second';
    }
  }
  return num;
}

console.log(formatDuration(1));
