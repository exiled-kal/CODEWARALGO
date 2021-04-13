const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
      //check if the number is multiple of 3 and 
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
  }
};
