function nextBigger(n){
    return +String(n).split('').sort().reverse();
}

console.log(nextBigger(12));

