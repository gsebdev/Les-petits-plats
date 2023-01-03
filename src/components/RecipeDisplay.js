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
        recipes.forEach(recipe => {
        this._wrapper.appendChild(recipe.cardDOM)
        })
    }
}