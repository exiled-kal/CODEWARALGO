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
let nums = [3,3,]
