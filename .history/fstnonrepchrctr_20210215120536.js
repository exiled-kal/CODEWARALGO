function firstNotRepeatingCharacter(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    let chr = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log('----------------******--------------');
console.log(
  firstNotRepeatingCharacter('abcdefghijklmnopqrstuvwxyziflskecznslkjfabec')
);

// def firstNotRepeatingCharacter(s):
//     for i in list(s):
//         if list(s).count(i) == 1:
//             return i
//     return '_'
