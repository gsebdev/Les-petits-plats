const keywordSearch = (list, searchString) => {
  if (searchString === '') {
    return list
  }
  // filter the recipe list -> if searchString is found in the recipe text to search in then keep it
  const search = list.filter(element => element.textToSearchIn.indexOf(searchString.toLowerCase()) !== -1)
  return search
}

export default keywordSearch
