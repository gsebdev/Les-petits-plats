export default class Recipe {
    /**
     * 
     * @param {Object} recipe 
     */
    constructor(recipe) {
        this._id = recipe._id
        this._name = recipe.name
        this._servings = recipe.servings
        this._ingredients = recipe.ingredients
        this._time = recipe.time
        this._description = recipe.description
        this._appliance = recipe.appliance
        this._ustensils = recipe.ustensils
        this._cardDOM = null
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get servings() {
        return this._servings
    }
    get ingredients() {
        return this._ingredients
    }
    get time() {
        return this._time
    }
    get description() {
        return this._description
    }
    get appliance() {
        return this._appliance
    }
    get ustensils() {
        return this._ustensils
    }
    set cardDOM(template) {
        this._cardDOM = template
    }
    get cardDOM() {
        return this._cardDOM
    }
}