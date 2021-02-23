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
    ],
    letsCook: function(){
        console.log('I\'m hungry, lets cook ' + this.recipeTitle +'!') 
        //this references the object you are in now. Using it get a key from the object you are writing in
    }
};

objRecipe.letsCook();
