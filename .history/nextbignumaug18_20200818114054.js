function nextBigger(n){
    var ls = ("" + n).split("").reverse()
    if(Number(("" + n).split("").sort().reverse().join('')) == n)
      return -1
    var idx = find_index(n)//[ '1', 1 ]
    var el = find_els(n, idx)//[ '4', 0 ]
    
    ls[idx[1]] = el[0]
    ls[el[1]] = idx[0]
    
    
    var f_l = ls.slice(idx[1]).reverse() 
    var s_l = ls.slice(0, idx[1]).sort()
    return Number(f_l.concat(s_l).join("")) 
  }
 
  
console.log(nextBigger(12));
console.log('--------------');

console.log(nextBigger(513));

