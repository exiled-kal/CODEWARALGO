function narcissistic(value) {
  debugger;
  var i = 0;
  var num = 0;
  var exponent = value.toString().length;
  for (i;i < value.toString().length; i ++){
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

narcissistic(153);
