//Recursion fibonacci

const fibonacci = (num) => {
    
  //if number is either 0 or 1 return num
  if (num < 2) {
    return num;
  }
  //recursion here
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(5));
