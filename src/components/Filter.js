export default class Filter {
    /**
     * 
     * @param {Object} filterList 
     */
    constructor(params) {
        this._filterList = params.filters
        this._componentContainer = document.querySelector(params.container)

        this._tags = document.createElement('div')
        this._tags.className = 'filters__tags'

        this._filtersContainer = document.createElement('div')
        this._filtersContainer.className = 'filters__container'

        this._filterList.forEach(filter => {
            this._filtersContainer.appendChild(this.getFilterDOM(filter.name, filter.color))
        })

        this._componentContainer.append(this._tags, this._filtersContainer)


    }

    getFilterDOM(name, color) {
        const filter = document.createElement('div')
        filter.className = 'filter filter--' + color
        const inputContainer = document.createElement('div')
        inputContainer.className = 'filter__input'
        const input = document.createElement('input')
        input.placeholder = name
        input.type = 'text'
        const arrowIcon = document.createElement('i')

        inputContainer.append(input, arrowIcon)

        const suggestedList = document.createElement('ul')
        suggestedList.className = 'filter__list'
        
        filter.append(inputContainer, suggestedList)

        return filter
    }

    feedSuggestions(arrayOfObjects) {
        this._filterList.forEach(filter => {
            arrayOfObjects.forEach(object => {
                object.fitler.filterKey
            })
        })
    }
}