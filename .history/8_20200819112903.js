function expandedForm(num) {
  var num = num.toString();
  let equation = [];
  let multiplier = 1;

  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i];
    digit > 0 && equation.unshift(digit * multiplier);
    multiplier *= 10;
  }

  return equation.join(' + ');
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
