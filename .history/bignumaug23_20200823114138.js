function narcissistic(value) {
  
  let num = 0;
  let exponent = value.toString().length;
  for (let i= 0;i < value.toString().length; i ++){
    var digit = Number(value.toString()[i]);
    num = num + Math.pow(digit, exponent);
    }
  if (num == value){
    return true;
  }
  else {
  return false;
  }
}

console.log(narcissistic(153));
