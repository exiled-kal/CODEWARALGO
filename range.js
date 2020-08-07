function solution(list) {
  var str = [];
  for (i = 0; i < list.length; i++) {
    if (list[i] + 1 !== list[i + 1]) {
      str += list[i].toString() + ',';
    } else if (
      list[i] + 1 === list[i + 1] &&
      list[i + 1] + 1 === list[i + 2] &&
      list[i - 1] + 1 !== list[i]
    ) {
      str += list[i].toString() + '-';
    } else if (str[str.length - 1] === '-' && list[i] + 1 !== list[i + 1]) {
      str += list[i].toString() + ',';
    } else if (list[i] - 1 === list[i - 1] && list[i] + 1 === list[i + 1]) {
    } else if (list[i] - 1 === list[i - 1] && list[i - 1] - 1 === list[i - 2]) {
      str += list[i].toString() + ',';
    } else {
      str += list[i].toString() + ',';
    }
  }
  return str.slice(0, -1);
}

