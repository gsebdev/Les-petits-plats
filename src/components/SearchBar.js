export default class SearchBar {
  constructor (selector, searchCallback) {
    this._searchBarEl = document.querySelector(selector)
    this._searchInput = this._searchBarEl.querySelector('input')
    this._searchButton = this._searchBarEl.querySelector('label')
    this._searchCallback = searchCallback
    this._searchValue = ''
    // event listeners
    this._searchButton.onclick = () => { this.handleSearch() }
    this._searchInput.oninput = () => { this.handleSearch() }
  }

  handleSearch () {
    if (this._searchInput.value.length >= 3) {
      this._searchValue = this._searchInput.value
    } else {
      this._searchValue = ''
    }
    this._searchCallback()
  }

  get searchValue () {
    return this._searchValue
  }
}
