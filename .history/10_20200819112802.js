function pigIt(str) {
    var result = [];
    for (var i =0; i <str.length/2; i++) {
        result = str[str.length - i - 1];
        str[str.length-i-1] = str[i];
        str[i] = result + ' ' + 'ay';
    }
    return (" ");
}


console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));