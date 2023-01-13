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
    // creates a new array containaing each recipes Model and DOM
    this._recipes = recipes.map(recipe => {
      recipe = new Recipe(recipe)
      recipe.cardDOM = new RecipeCard(recipe)
      return recipe
    })
    // initialisation of this_currentREcipes that will contain the result of a keyword search
    this._currentRecipes = this._recipes
    // Initialisation of the Filter component
    this._filter = new Filter('.filter-section',
      [
        { color: 'blue', name: 'Ingrédients', filterKey: 'ingredients' },
        { color: 'green', name: 'Appareils', filterKey: 'appliance' },
        { color: 'red', name: 'Ustensiles', filterKey: 'ustensils' }
      ])
    // initialisation of the keyword search-bar component; args : html selector and the callback func to make a search
    this._searchBar = new SearchBar('.main-search', this.handleSearchRequest.bind(this))
    // initialisation of the component that display recipes
    this._recipeDisplay = new RecipeDisplay(document.querySelector('.recipe-wrapper'))
    // render the full list of recipes
    this._recipeDisplay.render(this._recipes)
    // feed the suggestions of the filter component
    this._filter.feedSuggestions(this._recipes)
    // listen for a change on the filter component (tags add or tags remove)
    this.getFilterChange()
  }

  // method that waits for a promise resolve when a tag is added or removed
  async getFilterChange () {
    await this._filter.onchange
    const filteredRecipes = filterByTags(this._currentRecipes, this._filter.tags)
    this._filter.feedSuggestions(filteredRecipes)
    this._recipeDisplay.render(filteredRecipes)
    this.getFilterChange()
  }

  // method that is passed to the SearchBar component and is called each time a keyword search is needed
  handleSearchRequest () {
    this._currentRecipes = keywordSearch(this._recipes, this._searchBar.searchValue)
    this._recipeDisplay.render(this._currentRecipes)
    this._filter.resetAllTags()
    this._filter.feedSuggestions(this._currentRecipes)
  }
}

const init = () => new App()
init()
