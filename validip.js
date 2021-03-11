function isValidIP(str) {
  let res = true;
  let arr = str.split('.');
  
  for(let n in arr){
    if((arr[n].length > 1 && arr[n].charAt(0) == '0') || (arr[n].trim() !== arr[n]))
      res = false;
    if(arr.length !== 4 || parseInt(arr[n]) > 255 || isNaN(arr[n]/2))
      res = false;
  }
    return res;
  }


  console.log(isValidIP("0.0.0.0"), true);
  console.log(isValidIP('1e0.1e1.1e2.2e2'), false);