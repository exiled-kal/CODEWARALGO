// const fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     //check if the number is multiple of 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } //check if the number is multiple of 3
//     else if (i % 3 === 0) {
//       console.log('fizz');
//     } //check if the number is multple of 5
//     else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(15);

// function reverseString(str) {
// const strArr = str.split('')
// str.reverse()
// return strArr.join('');
//
//
/////////////////////////
//   let revString = '';
//   for (let i = 0; i <= str.length - 1; i++) {
//     revString = str[i] + revString;
//   }
//   return revString;

////////////
///this is more es6
//   let revString = '';
//   for (let char of str) {
//     revString = char + revString;
//   }
//   return revString;

/////////
//   let revString = '';
//   str.split('').forEach((char) => (revString = char + revString));
//   return revString;
// }

// console.log(reverseString('hello'));

// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');

//   return revString === str;
// }
// console.log(isPalindrome('hello'));

///////////////////////////

// function reverseInt(int) {
//   const revString = int.toString().split('').reverse().join('');

//   return parseInt(revString) * Math.sign(int);
// }

// console.log(reverseInt(-521));
//////////////////////////////

// function capitalizeLetters(str) {
//   const strArr = str.toLowerCase().split(' ');
//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(' ');
///////////
// }

// console.log(capitalizeLetters('i love javaScript'));

function reverseInt(int) {
  const revString = int.toString.split('').reverse().join('');

  return parseInt(revString);
}

console.log(reverseInt(124));
