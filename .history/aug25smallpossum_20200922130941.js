/*
Description

Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

Example

solution([6, 9, 21]) #-> 9
Solution steps:

[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6] #-> X[2] = 12 - 6
[6, 3, 6] #-> X[1] = 9 - 6
[6, 3, 3] #-> X[2] = 6 - 3
[3, 3, 3] #-> X[1] = 6 - 3
*/

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

console.log(numbers = [
  459280445,
  309958805,
  167618880,
  209295125,
  6503120,
  153941645,
  418203045,
  601250000,
  19050005,
  9244820,
  128333205,
  476250125,
  278018000,
  206466845,
  329244500,
  46467005,
  332813520,
  384800000,
  558739220,
  286255125,
  367678805,
  7813845,
  511113005,
  9545445,
  82311125,
  396430580,
  146726645,
  132816125,
  329244500,
  7813845,
  48494420,
  529006205,
  10796045,
  273133445,
  138528000,
  123927245,
  392534480,
  130565045,
  575086005,
  34632000,
  11450205,
  92390480,
  444684500,
  589285125,
  206466845,
  157614080,
  16568045,
  195346125,
  398385845,
  223725125,
  128333205,
  149112405,
  113249045,
  476250125,
  45139445,
  594056645,
  199480320,
  529006205,
  329244500,
  318652880,
  213573620,
  226668845,
  57780125,
  119598245,
  384800000,
  155160980,
  70324605,
  86820500,
  428292020,
  54836405,
  188552000,
  43184180,
  565716125,
  598847405,
  260319605,
  147917120,
  95240405,
  320406125,
  163831005,
  287916980,
  44482880,
  278018000,
  69504500,
  22628645,
];
solution(numbers);
