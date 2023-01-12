export default class Recipe {
  /**
     *
     * @param {Object} recipe
     */
  constructor (recipe) {
    this._id = recipe.id
    this._name = recipe.name
    this._servings = recipe.servings
    this._ingredients = recipe.ingredients
    this._ingredientsNames = this._ingredients.map(i => i.ingredient.charAt(0).toUpperCase() + i.ingredient.slice(1).toLowerCase())
    this._time = recipe.time
    this._description = recipe.description
    this._appliance = recipe.appliance
    this._ustensils = recipe.ustensils
    this._cardDOM = null
    this._filters = {
      ingredients: this._ingredientsNames,
      appliance: [this._appliance],
      ustensils: this._ustensils
    }
    this._tagsList = this._ingredientsNames.toString().toLowerCase() + ', ' + this._appliance.toLowerCase() + ', ' + this._ustensils.toString().toLowerCase()
    this._textToSearchIn = (this._ingredientsNames.toString() + ' ' + this._description + ' ' + this._name).toLowerCase()
  }

  get id () {
    return this._id
  }

  get name () {
    return this._name
  }

  get servings () {
    return this._servings
  }

  get ingredients () {
    return this._ingredients
  }

  get ingredientsNames () {
    return this._ingredientsNames.toString()
  }

  get time () {
    return this._time
  }

  get description () {
    return this._description
  }

  get appliance () {
    return this._appliance
  }

  get ustensils () {
    return this._ustensils
  }

  set cardDOM (template) {
    this._cardDOM = template
  }

  get cardDOM () {
    return this._cardDOM
  }

  get filters () {
    return this._filters
  }

  get textToSearchIn () {
    return this._textToSearchIn
  }

  get tagsList () {
    return this._tagsList
  }
}
