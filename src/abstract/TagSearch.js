const filterByTags = (list, tagsObject) => {
    let filteredList = list

    Object.keys(tagsObject).forEach((key) => {
        const tags = tagsObject[key]
        filteredList = filteredList.filter(element => {
            return tags.every(tag => {
                return element.filters[key].some(string => 
                    string.toLowerCase().indexOf(tag) !== -1
                )
            })
            
        })
    })
    return filteredList
}

export default filterByTags