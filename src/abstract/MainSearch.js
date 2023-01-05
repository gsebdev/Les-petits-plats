import Search from "./Search";

export default class MainSearch extends Search {
    constructor(list, keysToSearch){
        super(list)
        this._keysToSearch = keysToSearch
    }

    searchByString(searchString) {
        if(searchString === ''){
            return this._list
        }
        const search = this._list.filter(element => {
            return this._keysToSearch.some(key => {
                return element[key].toLowerCase().indexOf(searchString.toLowerCase()) !== -1
            })
        })
        return search
    }
}