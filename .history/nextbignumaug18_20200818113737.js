function nextBigger(n){
    return +String(n).split('').sort().reverse().join('');
}

console.log(nextBigger(12));
console.log('--------------_@@@@@@@@@_-------------');

console.log(nextBigger(513));
