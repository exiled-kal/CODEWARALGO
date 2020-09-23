function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivotIdx = Math.floor(Math.random() * (endIdx + 1));
  let pivot = arr[pivotIdx];

  while (startIdx < endIdx) {
    while(arr[startIdx] < pivot){
      startIdx++;
    }
    while (arr[endIdx] > pivot){
      endIdx--;
    }
    if (startIdx < endIdx) {
      let temp = arr[startIdx];
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = temp;
    }
  }
  return startIdx;
}

function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
  var runner;
  if (arr.length > 1) {
    runner = arrayPartition(arr, startIdx, endIdx);
    if (startIdx < runner - 1) {
      quickSort(arr, startIdx, runner -1);
    }
    if (runner < endIdx) {
      quickSort(arr, runner, endIdx);
    }
  }
  return arr;
}


console.log(quickSort([1, 5, 2, 8, 3, 4]));
// // // should log [1, 2, 3, 4, 5, 8]

