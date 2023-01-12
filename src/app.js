import keywordSearch from './abstract/MainSearch'
import filterByTags from './abstract/TagSearch'
import { recipes } from './api/recipe'
import Filter from './components/Filter'
import RecipeDisplay from './components/RecipeDisplay'
import SearchBar from './components/SearchBar'
import Recipe from './models/Recipe'
import RecipeCard from './templates/RecipeCard'

class App {
  constructor () {
    this._recipes = recipes.map(recipe => {
      recipe = new Recipe(recipe)
      recipe.cardDOM = new RecipeCard(recipe)
      return recipe
    })
    this._currentRecipes = this._recipes
    this._filter = new Filter('.filter-section',
      [
        { color: 'blue', name: 'Ingrédients', filterKey: 'ingredients' },
        { color: 'green', name: 'Appareils', filterKey: 'appliance' },
        { color: 'red', name: 'Ustensiles', filterKey: 'ustensils' }
      ])
    this._searchBar = new SearchBar('.main-search', this.handleSearchRequest.bind(this))
    this._recipeDisplay = new RecipeDisplay(document.querySelector('.recipe-wrapper'))
    this._recipeDisplay.render(this._recipes)

    this._filter.feedSuggestions(this._recipes)
    this.getFilterChange()
  }

  async getFilterChange () {
    await this._filter.onchange
    const filteredRecipes = filterByTags(this._currentRecipes, this._filter.tags)
    this._filter.feedSuggestions(filteredRecipes)
    this._recipeDisplay.render(filteredRecipes)
    this.getFilterChange()
  }

  handleSearchRequest () {
    this._currentRecipes = keywordSearch(this._recipes, this._searchBar.searchValue)
    this._recipeDisplay.render(this._currentRecipes)
    this._filter.resetAllTags()
    this._filter.feedSuggestions(this._currentRecipes)
  }
}

const init = () => new App()
init()
