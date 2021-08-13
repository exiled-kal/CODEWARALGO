// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result. If not possible, return the empty string.

// const reorganizeString = function (s) {
//   let map = new Map();
//   let res = [];

//   for (let ch of s) {
//     map.set(ch, map.get(ch) + 1 || 1);
//   }

//   let arr = [...map.entries()].sort((a, b) => b[1] - a[1]);

// //   if ((arr.length == 1) & (arr[0][1] > 1)) return "";

//   while (arr[0][1] > 0) {
//     res.push(arr[0][0]);
//     arr[0][1]--;
//     if (arr[1][1]-- > 0) {
//       res.push(arr[1][0]);
//       arr.sort((a, b) => b[1] - a[1]); //sorting arr is O(26) which is equal to O(1) since the max size of the alphabet is 26
//     } else if (arr[0][1] > 0) return "empty string";
//   }

//   return res.join("");
// };
// const s = "aaab";

function reorganizeString(s) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if ((s.length == 1) & (s[0][1] > 1)) {
      return "";
    }
    while(s[0][1]>0) {
        res.push(s[0][0]);
        s[0][1]--;
        if (s[1][1]-- > 0) {
            res.push(s[1][0]);
            s.sort((a,b) => b[1] - a[1])
    } else if(s[0][1] > 0) {
        return ''
    }
  }
}

console.log(reorganizeString("aab"));
