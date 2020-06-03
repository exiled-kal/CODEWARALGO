// function cakes(recipe, available) {
//   let num = [];
//   for (let i in recipe) {
//     if (available[i] === undefined) return 0;
//     num.push(parseInt(available[i] / recipe[i]));
//   }
//   num.sort((a, b) => {
//     return a - b;
//   });
//   return num[0];
// }
function cakes(recipe, ingredients) {
  const recipeKeys = {};
  let cakes = null;

  for (
    let i = 0;
    i < recipeKeys.length &&
    (ingredients[recipeKeys[i]] || (cakes = 0 && false));
    i++
  ) {
    const amount = Math.floor(
      ingredients[recipeKeys[i]] / recipe[recipeKeys[i]]
    );

    if (cakes === null || amount < cakes) cakes = amount;
  }

  return cakes || 0;
}

var recipe, available;

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2, 'Wrong result for example #1');

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0, 'Wrong result for example #2');
