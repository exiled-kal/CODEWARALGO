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
    if (pointer11.hasOwnProperty(i)) {
      valuedict1[i]++;
    } else {
      valuedict1[i] = 1;
      valuedict1[i]++;
    }
    for (let j = 0; i < arr2.length; j++) {
      let pointer2 = arr[j];
      if (valuedict2.hasOwnProperty(j)) {
        valuedict2++;
      } else {
        valuedict1[i] = 1;
        valuedict2++;
      }
    }
  }
}

console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
