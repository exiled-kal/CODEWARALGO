/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
    let frequency1 = 0;
    let frequency2 = 0;
    let newarr = [];
    for(let i = 0; i<arr1.length, i++){
        for(let j = 0, j<arr2.length, j++){
            let pointer1 = arr1[i];
            let pointer2 = arr2[j];
            if (pointer1 === pointer2){
                frequency1++;
                fequency2++;
                if(frequency1 > frequency2){
                    newarr.push
                }
            }
        }
    }
    while(newarr.length < arr1.length + arr2.length){
        if (pointer1<pointer2){
            newarr.push(pointer1);
        }
        else {newarr.push(pointer2);}
    }

console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
