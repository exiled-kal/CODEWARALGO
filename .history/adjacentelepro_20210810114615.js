
function adjacentElementsProduct(inputArray) {
    return Math.max(...inputArray.map((el,i)=>[el,inputArray[(i+1)%inputArray.length]]).slice(0,-1).map(([a,b])=>a*b));
}



console.log(adjacentElementsProduct[(3, 6, -2, -5, 7, 3)]);
