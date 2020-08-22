function formatDuration(seconds) {
  let newFormat = '';

  for (let i = 0; i < seconds.length; i++) {
    if (seconds[i] == 1) {
      return '1 second';
    }
  }
  return newF
}

console.log(formatDuration(1));
