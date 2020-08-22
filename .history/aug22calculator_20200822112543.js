function formatDuration(seconds) {
  let newSeconds = '';

  for (let i = 0; i < seconds.length; i++) {
    if (seconds[i] == 1) {
      return '1 second';
    }
  }
  return newSeconds;
}

console.log(formatDuration(1));
