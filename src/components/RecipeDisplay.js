export default class RecipeDisplay {
  /**
     *
     * @param {Array} recipes
     * @param {Node} wrapper
     */
  constructor (wrapper) {
    this._wrapper = wrapper
    this._message = document.createElement('p')
    this._message.className = 'no-results-message'
    this._message.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'
  }

  render (recipes) {
    this._wrapper.innerHTML = ''
    if (recipes.length === 0) {
      this._wrapper.appendChild(this._message)
    }
    recipes.forEach(recipe => {
      this._wrapper.appendChild(recipe.cardDOM)
    })
  }
}
