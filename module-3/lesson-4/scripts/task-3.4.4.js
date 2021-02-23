var objRecipe = {
    recipeTitle: 'Omelette',
    servings: 1,
    ingredients: [
        'Two Eggs',
        'Mushrooms',
        'Ham'
    ],
    directions: [
        'Break two eggs, and beat the eggs',
        'Heat up a pan and add a little bit of oil',
        'Pour the eggs mix into the pan on low heat and wait for a few minutes',
        'Add mushrooms and ham and fold the omelette into half',
        'Cook both side for few minutes and serve'
    ]
};

console.log(objRecipe.recipeTitle);
console.log(objRecipe.servings);
console.log(objRecipe.ingredients[2]);

for (var counter = 0; counter < objRecipe.ingredients.length; counter++){
    let ingredient = objRecipe.ingredients[counter];
    console.log(ingredient);
}

for (var counter = 0; counter < objRecipe.directions.length; counter++){
    let direction = objRecipe.directions[counter];
    console.log(direction);
}