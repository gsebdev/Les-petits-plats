import { recipes } from './api/recipe'
import Filter from './components/Filter'
import RecipeDisplay from './components/RecipeDisplay'
import Recipe from './models/Recipe'
import RecipeCard from './templates/RecipeCard'

const recipesMap = recipes.map(recipe => {
    recipe = new Recipe(recipe)
    recipe.cardDOM = new RecipeCard(recipe)
    return recipe
})

new Filter({
    container: '.filter-section',
    filters: [
        {color: 'blue', name: 'Ingrédients', filterKey: {ingredients: 'ingredient'}},
        {color: 'green', name: 'Appareils', filterKey: 'apliance'},
        {color: 'red', name: 'Ustensiles', filterKey: ['ustensils']}
    ]
    
})

const recipeDisplay = new RecipeDisplay(document.querySelector('.recipe-wrapper'))
recipeDisplay.render(recipesMap)