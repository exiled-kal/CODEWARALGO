function solution(numbers) {
  numbers.sort((a, b) => b - a);
  if ([...new Set(numbers)].length !== 1 && numbers[1] !== 0) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        numbers[i] = numbers[i] - numbers[i + 1];
      }
    }
    return solution(numbers);
  }
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(solution(numbers));
