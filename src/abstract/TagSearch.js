const filterByTags = (list, tagsObject) => {
    let filteredList = []
    const propertiesList = Object.keys(tagsObject)
    const tagsLists = Object.values(tagsObject)

    for(let el = 0; el < list.length; el++){
        let element = list[el]
        let matchTags = true
        for(let listOfTags = 0; listOfTags < propertiesList.length; listOfTags++){
            if(!matchTags){
                break
            }
            for(let tag = 0; tag < tagsLists[listOfTags].length; tag++){
                if(element.filters[propertiesList[listOfTags]].toString().toLowerCase().indexOf(tagsLists[listOfTags][tag]) === -1){
                    matchTags = false
                    break
                }
            }
        }
        if(matchTags){
            filteredList.push(element)
        }
    }

    return filteredList
}

export default filterByTags