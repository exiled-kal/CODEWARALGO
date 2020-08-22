function formatDuration(seconds) {
  let num = '';

  for (let i = 0; i < num.length; i++) {
    if (seconds[i] == 1) {
      return 1 second;
    }
  }
  return newFormat;
}

console.log(formatDuration(1));
