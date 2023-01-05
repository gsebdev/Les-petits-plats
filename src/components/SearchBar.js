export default class SearchBar {
    constructor(selector, searchCallback) {
        this._searchBarEl = document.querySelector(selector)
        this._searchInput = this._searchBarEl.querySelector('input')
        this._searchButton = this._searchBarEl.querySelector('label')


        this._searchInput.oninput = () => {
            if(this._searchInput.value.length >= 3){
                this._searchValue = this._searchInput.value   
            }else{
                this._searchValue = ''
            }
            searchCallback()
            
        }

        this._searchValue = ''
    }
    get searchValue() {
        return this._searchValue
    }
}
