


// need some sort of loop through the number starting from m all the way through n
// check if the current number has any divisors.. square the numbers and add them all
// check the square root of number and if it isn't a decimal/float it one! Math.sqrt()
// 1.  while loop! until m == to n
// 2.  for every number check if it has any divisors and store them....
// 3.  loop through the store array and square each one then add them all up.
// 4. check the square root of it and if it has a whole number it counts as one.
// 5. push the number and the sum of the squared divisor in the sqrArr;
// function listSquared(m, n) {
//     var increment = m;
//     var sqrDivisors = [];
//     var result = 0;
//     var SqrArr = [];
//     while(increment <= n) {
//         for (var i = 0; i <= increment; i++) {            
//             if (increment % i === 0) {
//                 sqrDivisors.push(i * i);
//             }
//         }

//         if (sqrDivisors !== 0) {
//           sqrDivisors.forEach(function (current) {
//             result += current;
//           });

//           storeDivisors = [];
//         }

//         if (Number.isInteger(Math.sqrt(result))) {
//             console.log(result, increment)
//             SqrArr.push([increment, result]);
//         }

//         result = 0;
//         increment++;
//     }

    
    
//     return SqrArr;
    

// }

function listSquared(m, n) {
  var arr = [];
  for (var i = m; i <= n; i++) {
    var temp = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) temp += j * j;
    }
    if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
  }
  return arr;
}


console.log(listSquared(1, 250), [
  [1, 1],
  [42, 2500],
  [246, 84100],
]);
console.log(listSquared(42, 250), [
  [42, 2500],
  [246, 84100],
]);
console.log(listSquared(250, 500), [[287, 84100]])