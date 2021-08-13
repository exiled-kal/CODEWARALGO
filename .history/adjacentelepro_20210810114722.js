
function adjacentElementsProduct(inputArray) {
    var arr = [...inputArray];
        var res = [];
        for (var x = 0; x < inputArray.length - 1; x++) {
               res.push(inputArray[x] * arr[x + 1]);
        }
        return res.reduce(function (a,b) {
            return Math.max(a,b);
        });
}
}



console.log(adjacentElementsProduct[(3, 6, -2, -5, 7, 3)]);
