const countVowelStrings = function(n) {
    const memo = new Map();
    const run = (idx, len) => {
        if(len === n) return 1;
        if(memo.has(`${idx}-${len}`)) return memo.get(`${idx}-${len}`)
        
        let total = 0, flagCount = 5;
        
        for(let i = idx; i < flagCount; i++) {
            total += run(i, len+1);
        }
        memo.set(`${idx}-${len}`, total);
        return total;
    }
    return run(0, 0);
};

let n = 1;
console.log(countVowelStrings(n));