function persistence(num) {
  //code me
  var count = 0;
  var num = num.toString();

  while (num.length !== 1) {
    var product = num.charAt(0);
    for (var i = 1; i < num.length; i++) {
      product *= num.charAt(i);
    }
    num = product + '';
    count++;
  }
  return count;
}
