function adjacentElementsProduct(inputArray) {
    //     //declare a varaible to store the result of the computation
        var result = inputArray[0];
        
        //we need a loop to loop hrough the array and multiply adjacent numbers
        for(var i = 1; i < inputArray.length; i++) {
            result *= inputArray[i];
        }
        
    
        if (inputArray.length == 1) return 0;
        
        var maxProduct = inputArray[0] * inputArray[1];
        
        for(var i = 0; i < inputArray.length - 1; i++) {
            if(inputArray[i] * inputArray[i+1] > maxProduct) {
                maxProduct = inputArray[i] * inputArray[i+1];
            }
        }
        
        return maxProduct;
    }

console.log(adjacentElementsProduct[(3, 6, -2, -5, 7, 3)]);
