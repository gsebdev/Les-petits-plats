export default class RecipeDisplay {
    /**
     * 
     * @param {Array} recipes 
     * @param {Node} wrapper 
     */
    constructor(wrapper) {
        this._wrapper = wrapper
    }

    render(recipes) {
        this._wrapper.innerHTML = ''
        recipes.forEach(recipe => {
        this._wrapper.appendChild(recipe.cardDOM)
        })
    }
}