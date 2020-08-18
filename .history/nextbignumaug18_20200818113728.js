function nextBigger(n){
    return +String(n).split('').sort().reverse().join('');
}

console.log(nextBigger(12));
console.log('object');

console.log(nextBigger(513));
