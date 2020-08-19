function alphabetPosition(text) {
  var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (i = 0; i < text.length; i++) {
    if (alphabet[i] == text.charAt[i]) break;
  }
  if (alphabet[i] !== text.chaAt[i]) {
  }
  return text;
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('The narwhal bacons at midnight.'));
