//takes a num and finds the next biggest num composed of the same digits.

function nextBigger(num) {
    let newNum = 0;
    let otherNum = 0;
    let indicator = 0;
    while (num > newNum) {
      if (indicator === 0) {
        otherNum = num;
        indicator++;
        continue;
      }
  
      if (
        String(num)
          .split("")
          .sort()
          .join("") ===
        String(otherNum)
          .split("")
          .sort()
          .join("")
      ) {
        if (otherNum > num) {
          newNum = otherNum;
        }
      }
  
      otherNum++;
    }
  
    return newNum;
  }
console.log(nextBigger(12));
console.log('--------------');

console.log(nextBigger(513));
