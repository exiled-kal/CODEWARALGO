function prodExceptSelf(nums, m) {
  let s = 0; //Sum
  let p = 1; //Product
  for (let num of nums) {
    s = (p + s * num) % m;
    p = (p * num) % m;
  }
  return s;
}

//Example
let nums = [3, 3, 9, 5, 5,4, 2, 8, 5, 9]; //Input Array
let m = 17; //Mod Value

console.log(prodExceptSelf(nums, m));
