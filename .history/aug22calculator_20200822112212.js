function formatDuration(seconds) {
  let newFormat = '';

  for (let i = 0; i < seconds.length; i++) {
    if (seconds[i] == 1) {
      return '1 second';
    }
  }
  return 
}

console.log(formatDuration(1));
