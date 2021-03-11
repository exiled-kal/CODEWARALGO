function firstNotRepeatingCharacter(s) {
  var arr = s.split('');

  for (var i = 0; i < arr.length; i++) {
    var chr = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return '_';
}

// console.log(firstNotRepeatingCharacter('abacabad'));
console.log(
  firstNotRepeatingCharacter('abcdefghijklmnopqrstuvwxyziflskecznslkjfabe')
);

// def firstNotRepeatingCharacter(s):
//     for i in list(s):
//         if list(s).count(i) == 1:
//             return i
//     return '_'
