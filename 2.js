function firstNonRepeatingLetter(s) {
  var arra1 = s.split('');
  var result = '';
  var ltr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ltr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ltr += 1;
      }
    }

    if (ltr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log('have you got the first non repeating letter');
console.log(firstNonRepeatingLetter('a'), 'a');
console.log('have you got the first non repeating letter');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log('have you got the first non repeating letter');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log('have you got the first non repeating letter');
console.log(firstNonRepeatingLetter('sTress'), 'T');