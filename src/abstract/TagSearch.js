import Search from "./Search";

export default class TagSearch extends Search {
    constructor(list, tagsObject){
        super(list)
        this._tagsObject = tagsObject
        this._filteredList = this._list

        Object.keys(this._tagsObject).forEach((key) => {
            this.filterByOneKey(this._tagsObject[key], key)
        })
        return this._filteredList
    }

    filterByOneKey(tags, key) {
        this._filteredList = this._filteredList.filter(element => {
            
            return tags.every(tag => {

                return element.filters[key].some(string => 
                    string.toLowerCase().indexOf(tag) !== -1
                )

            })
            
        })
    }

    
    
}