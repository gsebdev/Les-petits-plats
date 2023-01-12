const filterByTags = (list, tags) => {
  return list.reduce((filteredList, element) => {
    // if all tags matches -> push element in return list
    if (tags.every(tag => element.tagsList.indexOf(tag) !== -1)) {
      filteredList.push(element)
    }
    return filteredList
  }
  , [])
}

export default filterByTags
