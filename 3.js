
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    if (n == 0) 
    return 0;
    if (n % 9 == 0) 
    return 9;
    return n % 9;
}



console.log(digital_root(16), 7);
console.log(digital_root(456), 6);