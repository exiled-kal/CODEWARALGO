function isValidIP(str) {
  let pattern= new RegExp('^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$');
  if(!(patHello)) return false;
  let parts= str.split('.');
  for(let i=0; i<parts.length; i ++){

    if(parts[i]>255) return false;
    if(parts[i].length>1 && parts[i][0]==='0') return false;
  }
  return true;
}

console.log(isValidIP());