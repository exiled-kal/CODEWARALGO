// function isPangram(string){
//     let temp = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt[i] == string){
//      temp += 1;
//      return true;
//     }else (string.charAt[i] != string) {
//      return false;
//    }

//   }

function isPangram(string) {
  
  
  for (let i = 0; i < string.length; i++) {
    if (string.charAt[i] == undefined) {
        
      return true;
    }

    if (string.charAt[i] !== letters) {return false;
      
    }
    
  }
}
var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string), true);
var string = 'This is not a pangram.';
console.log(isPangram(string), false);
