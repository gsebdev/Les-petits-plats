import { recipes } from './api/recipe'
import Filter from './components/Filter'
import RecipeDisplay from './components/RecipeDisplay'
import Recipe from './models/Recipe'
import RecipeCard from './templates/RecipeCard'


class App {
    constructor() {
        this._recipes = recipes.map(recipe => {
            recipe = new Recipe(recipe)
            recipe.cardDOM = new RecipeCard(recipe)
            return recipe
        })
        this._filter = new Filter('.filter-section',
            [
                {color: 'blue', name: 'Ingrédients', filterKey: 'ingredients'},
                {color: 'green', name: 'Appareils', filterKey: 'appliance'},
                {color: 'red', name: 'Ustensiles', filterKey: 'ustensils'}
            ])

        this._recipeDisplay = new RecipeDisplay(document.querySelector('.recipe-wrapper'))
        this._filter.feedSuggestions(this._recipes)
        this._recipeDisplay.render(this._recipes)
        this.getFilterChange()

    }
    async getFilterChange() {
        await this._filter.onchange
        console.log('aaa')
        this.getFilterChange()
    }
}

new App()