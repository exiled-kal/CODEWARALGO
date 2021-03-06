/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
  let valuedict1 = {};
  let valuedict2 = {};
  let newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    let pointer1 = arr1[i];
    if (pointer1.hasOwnProperty(i)) {
        pointer1[i]++;
    } else {
        pointer1[i] = 1;
        pointer1[i]++;
    }
    for (let j = 0; i < arr2.length; j++) {
      let pointer2 = arr[j];
      if (pointer2.hasOwnProperty(j)) {
        pointer2++;
      } else {
        pointer2[i] = 1;
        pointer2++;
      }
    }
  }
}

console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
