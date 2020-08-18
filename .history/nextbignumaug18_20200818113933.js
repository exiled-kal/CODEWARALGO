function nextBigger(n){
    return +String(n).split('').sort().join().join('');
}

console.log(nextBigger(12));
console.log('--------------');

console.log(nextBigger(513));


console.log(nextBigger(144));