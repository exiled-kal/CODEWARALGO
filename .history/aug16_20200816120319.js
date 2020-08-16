// function getInstructionsMatrix(code) {
//     return code.split('\n').map(function(elem) {return elem.split('');});  
//   }
  
//   function interpret(code) {
//     var instructions = getInstructionsMatrix(code);
//     var xPointer = 0;
//     var yPointer = 0;
//     var currentInstruction;
//     var stack = [];
//     var direction = '>';
//     var output = "";
    
//     var moveRight = function() {
//       if (xPointer < instructions[yPointer].length - 1) {
//           xPointer++;
//       } else {
//         yPointer++;
//         xPointer = 0;
//       }
//     }
    
//     var moveLeft = function() {
//       if (xPointer > 0) {
//         xPointer--;
//       } else {
//         yPointer++;
//         xPointer = instructions[yPointer].length - 1;
//       }
//     }
    
//     var moveDown = function() {
//       if (yPointer < instructions.length - 1) {
//         yPointer++;
//       } else {
//         yPointer = 0;
//         xPointer++;
//       }
//     }
    
//     var moveUp = function() {
//       if (yPointer > 0) {
//         yPointer--;
//       } else {
//         yPointer = instructions.length - 1;
//         xPointer = xPointer++;
//       }
//     } 
    
//     var moveToNext = function() { movements[direction](); }
    
//     var executeAndMove = function(f) {
//       return function() {
//         f && f();
//         moveToNext();
//       };
//     }
    
//     var push = function(elem) { stack.push(elem); }
    
//     var pop = function() { return stack.pop(); }
    
//     var processNumber = function(n) { return function(){ push(n); }; }
    
//     var processPlus = function() {push(pop() + pop()); }
    
//     var processMinus = function() {
//       var a = pop();
//       var b = pop();
//       push(b-a);
//     }
    
//     var processTimes = function() { push(pop() * pop()); }
    
//     var processDivision = function() {
//       var a = pop();
//       var b = pop();
//       push(a ? Math.floor(b/a) : 0);
//     }
    
//     var processModulo = function() {
//       var a = pop();
//       var b = pop();
//       push(a ? b % a : 0);
//     }
    
//     var processNegation = function() { push(pop() ? 0 : 1); }
    
//     var processGreaterThan = function() {
//       var a = pop();
//       var b = pop();
//       push(b > a ? 1 : 0);
//     }
    
//     var processUnderscore = function() { direction = pop() ? '<' : '>'; }
    
//     var processPipe = function() { direction = pop() ? '^' : 'v'; }
    
//     var processStringMode = function() {
//       moveToNext();
//       while (instructions[yPointer][xPointer] !== '"') {
//         push(instructions[yPointer][xPointer].charCodeAt(0));
//         moveToNext();
//       }
//     }
    
//     var processDuplicateValue = function() { push(stack.length ? stack[stack.length - 1] : 0); }
    
//     var processSwap = function() {
//       if (stack.length === 1) {
//         push(0);
//       } else {
//         var a = pop();
//         var b = pop();
//         push(a);
//         push(b);
//       }
//     }
    
//     var processInteger = function() { output += pop(); }
    
//     var processAscii = function() { output += String.fromCharCode(pop()); }
    
//     var processPut = function() {
//       var y = pop();
//       var x = pop();
//       var v = pop();
//       instructions[y][x] = String.fromCharCode(v);
//     }
    
//     var processGet = function() {
//       var y = pop();
//       var x = pop();
//       push(instructions[y][x].charCodeAt(0));
//     }
      
//     var randomDirection = function() {
//       var directions = ['>','<','^','v'];
//       return directions[Math.floor(Math.random() * directions.length)];
//     }
    
//     var changeDirection = function(d) {
//       return function() {
//         direction = (d === '?') ? randomDirection() : d;
//       }
//     }
    
//     var movements = {
//       '>' : moveRight,      
//       '<' : moveLeft,
//       'v' : moveDown,
//       '^' : moveUp   
//     }
    
//     var dispatcher = {
//       '+' : executeAndMove(processPlus),
//       '-' : executeAndMove(processMinus),
//       '*' : executeAndMove(processTimes),
//       '/' : executeAndMove(processDivision),
//       '%' : executeAndMove(processModulo),
//       '!' : executeAndMove(processNegation),
//       '`' : executeAndMove(processGreaterThan),
//       '_' : executeAndMove(processUnderscore),
//       '|' : executeAndMove(processPipe),
//       '"' : executeAndMove(processStringMode),
//       ':' : executeAndMove(processDuplicateValue),
//       '\\' : executeAndMove(processSwap),
//       '$' : executeAndMove(pop),
//       '.' : executeAndMove(processInteger),
//       ',' : executeAndMove(processAscii),
//       '#' : executeAndMove(moveToNext),
//       'p' : executeAndMove(processPut),
//       'g' : executeAndMove(processGet),
//       ' ' : executeAndMove()
//     };  
//     [0,1,2,3,4,5,6,7,8,9].forEach(function(elem){ dispatcher[elem] = executeAndMove(processNumber(elem));});
//     ['<','>','v','^','?'].forEach(function(elem){ dispatcher[elem] = executeAndMove(changeDirection(elem));});
    
//     while (instructions[yPointer][xPointer] !== '@') {
//       currentInstruction = instructions[yPointer][xPointer];
//       dispatcher[currentInstruction]();
//     }
    
//     return output;
//   }



function interpret(code) {
  code = code.split('\n').map(row => row.split(''));
  var output = "", stack = [], i = 0, j = 0, ch = code[0][0], dirs = [[0,1],[0,-1],[-1,0],[1,0]], dir = dirs[0];
  var next = () => {
    i = (i+dir[0]+code.length)%code.length;
    j = (j+dir[1]+code[i].length)%code[i].length;
    return code[i][j];
  };
  while(ch !== '@'){
    if (/[0-9]/.test(ch)) stack.push(+ch);
    if (/[\+\-\*%]/.test(ch)) {var a = stack.pop(), b = stack.pop(); stack.push(eval('b'+ch+'a'))};
    if ('/' == ch) {var a = stack.pop(), b = stack.pop(); stack.push(a ? b/a>>0 : 0)};
    if ('!' == ch) stack.push(stack.pop() ? 0 : 1);
    if ('`' == ch) {var a = stack.pop(), b = stack.pop(); stack.push(b > a ? 1 : 0)};
    if ('>' == ch) dir = [0, 1];
    if ('<' == ch) dir = [0,-1];
    if ('^' == ch) dir = [-1,0];
    if ('v' == ch) dir = [ 1,0];
    if ('?' == ch) dir = dirs[Math.random()*4>>0];
    if ('_' == ch) dir = stack.pop() == 0 ? [0, 1] : [0,-1];
    if ('|' == ch) dir = stack.pop() == 0 ? [1, 0] : [-1,0];
    if (':' == ch) {var a = stack.pop()||0; stack.push(a, a)};
    if ('\\' == ch) {var a = stack.pop(), b = stack.pop()||0; stack.push(a, b)};
    if ('$' == ch) stack.pop();
    if ('.' == ch) output += stack.pop();
    if (',' == ch) output += String.fromCharCode(stack.pop());
    if ('p' == ch) {var y = stack.pop(), x = stack.pop(); code[y][x] = String.fromCharCode(stack.pop()); }
    if ('g' == ch) {var y = stack.pop(), x = stack.pop(); stack.push(code[y][x].charCodeAt(0)); }
    
    if ('"' == ch) while((ch = next()) !== '"') stack.push(ch.charCodeAt(0));
    if ('#' == ch) ch = next();
    ch = next();    
  }
  return output;
}
console.log(interpret('>987v>.v\nv456<  :\n>321 ^ _@'), '123456789');