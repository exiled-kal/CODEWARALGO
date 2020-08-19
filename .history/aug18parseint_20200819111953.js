const wordReps = {
    ninety: 90,    nineteen: 19,    nine: 9,
    eighty: 80,    eighteen: 18,    eight: 8,
    seventy: 70,   seventeen: 17,   seven: 7,
    sixty: 60,     sixteen: 16,     six: 6,
    fifty: 50,     fifteen: 15,     five: 5,
    forty: 40,     fourteen: 14,    four: 4,
    thirty: 30,    thirteen: 13,    three: 3,
    twenty: 20,    twelve: 12,      two: 2,
    ten: 10,       eleven: 11,      one: 1,
                                    zero: 0
  };
  
  function parseInt(string) {
    string = string.toLowerCase();
    string = string.replace(/(\sand\s|[-])/g, " ");
    string = string.replace(/[,]/g, "");
  
    if (string.includes("million")) return 1000000;
  
    const strArr = string.split(" ");
  
    const parsed = strArr => {
      return strArr.reduce((acc, word, i, words) => {
        switch (word) {
          case "thousand":
            return (acc = acc * 1000 + parsed(words.splice(i + 1)));
          case "hundred":
            return (acc *= 100);
          default:
            return (acc += wordReps[word]);
        }
      }, 0);
    };
  
    return parsed(strArr);
  }
  
  
  console.log(const wordReps = {
    ninety: 90,    nineteen: 19,    nine: 9,
    eighty: 80,    eighteen: 18,    eight: 8,
    seventy: 70,   seventeen: 17,   seven: 7,
    sixty: 60,     sixteen: 16,     six: 6,
    fifty: 50,     fifteen: 15,     five: 5,
    forty: 40,     fourteen: 14,    four: 4,
    thirty: 30,    thirteen: 13,    three: 3,
    twenty: 20,    twelve: 12,      two: 2,
    ten: 10,       eleven: 11,      one: 1,
                                    zero: 0
  };
  
  function parseInt(string) {
    string = string.toLowerCase();
    string = string.replace(/(\sand\s|[-])/g, " ");
    string = string.replace(/[,]/g, "");
  
    if (string.includes("million")) return 1000000;
  
    const strArr = string.split(" ");
  
    const parsed = strArr => {
      return strArr.reduce((acc, word, i, words) => {
        switch (word) {
          case "thousand":
            return (acc = acc * 1000 + parsed(words.splice(i + 1)));
          case "hundred":
            return (acc *= 100);
          default:
            return (acc += wordReps[word]);
        }
      }, 0);
    };
  
    return parsed(strArr);
  }
  

  );