function pigIt(str) {
  let result = [];
  for (let i = 0; i < str.length / 2; i++) {
    result = str[str.length - i - 1];
    str[str.length - i - 1] = str[i];
    str[i] = result + '' + 'ay';
  }
  return ("")
}
