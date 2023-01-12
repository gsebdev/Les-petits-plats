export default class RecipeCard {
  /**
     *
     * @param {Object} Recipe
     */
  constructor (Recipe) {
    this._Recipe = Recipe
    return this.createCardDOM()
  }

  createCardDOM () {
    const card = document.createElement('article')
    card.className = 'recipe-card'
    card.id = this._Recipe.id

    const link = document.createElement('a')
    link.href = '?recipe_id=' + this._Recipe.id

    const imgContainer = document.createElement('div')
    imgContainer.className = 'recipe-card__img-container'

    const bottomContainer = document.createElement('div')
    bottomContainer.className = 'recipe-card__bottom-container'

    const title = document.createElement('div')
    title.className = 'recipe-card__title'

    const h2 = document.createElement('h2')
    h2.textContent = this._Recipe.name

    const duration = document.createElement('div')
    duration.className = 'recipe-card__duration'
    const watch = document.createElement('i')
    const time = document.createElement('span')
    time.textContent = this._Recipe.time + ' min'

    duration.append(watch, time)
    title.append(h2, duration)

    const recipeBody = document.createElement('div')
    recipeBody.className = 'recipe-card__recipe-body'

    const ingredients = document.createElement('ul')
    ingredients.className = 'recipe-card__ingredients'
    this._Recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li')
      const strong = document.createElement('strong')
      strong.textContent = ingredient.ingredient + ': '
      const liText = ingredient.unit ? ingredient.quantity + ' ' + ingredient.unit : ingredient.quantity
      li.textContent = liText
      li.prepend(strong)
      ingredients.append(li)
    })

    const preparation = document.createElement('p')
    preparation.className = 'recipe-card__preparation'
    const descText = this._Recipe.description.length > 175
      ? this._Recipe.description.substring(0, 174) + '...'
      : this._Recipe.description
    preparation.textContent = descText

    recipeBody.append(ingredients, preparation)
    bottomContainer.append(title, recipeBody)

    link.append(imgContainer, bottomContainer)
    card.append(link)

    return card
  }
}
