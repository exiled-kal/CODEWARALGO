function solution(nums) {
    nums.sort((a, b) => b - a);
    if ([...new Set(nums)].length !== 1 && nums[1] !== 0) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
          nums[i] = nums[i] - nums[i + 1];
        }
      }
      return solution(nums);
    }
    return nums.reduce((a, b) => a + b, 0);
  }
  numbers = [459280445, 309958805, 167618880, 209295125, 6503120, 153941645, 418203045, 601250000, 19050005, 9244820, 128333205, 476250125, 278018000, 206466845, 329244500, 46467005, 332813520, 384800000, 558739220, 286255125, 367678805, 7813845, 511113005, 9545445, 82311125, 396430580, 146726645, 132816125, 329244500, 7813845, 48494420, 529006205, 10796045, 273133445, 138528000, 123927245, 392534480, 130565045, 575086005, 34632000, 11450205, 92390480, 444684500, 589285125, 206466845, 157614080, 16568045, 195346125, 398385845, 223725125, 128333205, 149112405, 113249045, 476250125, 45139445, 594056645, 199480320, 529006205, 329244500, 318652880, 213573620, 226668845, 57780125, 119598245, 384800000, 155160980, 70324605, 86820500, 428292020, 54836405, 188552000, 43184180, 565716125, 598847405, 260319605, 147917120, 95240405, 320406125, 163831005, 287916980, 44482880, 278018000, 69504500, 22628645]
  solution(numbers)