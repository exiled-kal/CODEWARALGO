function nextBigger(n){
    return +String(n).split('').sort().reverse().join('');
}