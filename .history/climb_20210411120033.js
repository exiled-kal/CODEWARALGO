function climbingStairs(n) {
  let r = [1, 1, 2]; //Initial result set
  if (n <= 2) return r[n];

  for (let step = 3; step < n + 1; step++) {
r.push(r[step - 1] + r[step - 2])
  }
}

let n = 26;
let ways = climbingStairs(n);

console.log(ways);
