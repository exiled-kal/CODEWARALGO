function parseInt(String) {
  let key = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
  let seperator = /[\s-]+/;
  let parse = string.split(seperator);
  let numerate = parse.filter((x) => key[x]).map((x) => key[x]);
  let calculate = 0;
  let holder = 0;
  for (let i = 0; i < numerate.length; i++) {
    if (numerate[i] == 1000 || numerate[i] == 1000000) {
      holder *= numerate[i];
      calculate += holder;
      holder = 0;
    } else if (numerate[i] == 100) {
      holder *= numerate[i];
    } else {
      holder += numerate[i];
    }
  }
  calculate += holder;
  return calculate;
}

console.log(parseInt('one'));
