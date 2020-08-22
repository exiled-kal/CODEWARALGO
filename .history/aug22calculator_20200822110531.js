const Calculator = function() {
    this.evaluate = string => {
        let a = '',

        for(let i = 0; i < string.length; i++) {
            if( string[i] == 127) {
                return 127;
            }
        }
    }
}

var calculate = new Calculator()
console.log(calculate.evaluate('127'));