// function foo1() {
//   return {
//     bar: 'hello',
//   };
// }

// function foo2() {
//   return
//   {
//       bar: 'hello'
//   }
// }

// console.log(foo1());
// console.log(foo2());

function fibonacci(num) {
  let result = [0, 1];
  for (let i = 2; i <= num; i++) {
    let prevNum1 = result[i - 1];
    let prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  console.log(result[num]);
}
fibonacci(15);
// function foo1() {
//   return {
//     bar: 'hello',
//   };
// }

// function foo2() {
//   return
//   {
//       bar: 'hello'
//   }
// }

// console.log(foo1());
// console.log(foo2());

function fibonacci(num) {
    let result = [0, 1];
    for (let i = 2; i <= num; i++) {
      let prevNum1 = result[i - 1];
      let prevNum2 = result[i - 2];
      result.push(prevNum1 + prevNum2);
    }
    console.log(result[num]);
  }
  fibonacci(15);
  