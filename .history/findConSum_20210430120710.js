/**
 * takes in an array of integers
 * and a given sum
 * returns an array of ALL the consecutive integers
 * that make the sum
 * BONUS: what if there are zeros in the input array?
 */

//  function findConsecutiveSums(arr, sum) {
//     var newArr = [];
    
//     for (var i =0; i<arr.length; i++){
//         newSum= 0;
//         j = i;
//         if(arr[i]!==0){
//             while(newSum<sum && j<arr.length){
//                 newSum+=arr[j];
//                 j++;
//             }
//             if (newSum == sum){
//                 newArr.push(arr.slice(i,j));
//             }
//         }
//     }
//     return newArr;
// }
  
function findConsecutiveSums(arr, sum) {
    let newArr = arr.toString().split('')
}

  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  // ]