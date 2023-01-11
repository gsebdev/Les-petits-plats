const filterByTags = (list, tags) => {
    let filteredList = []
    // for each element of the recipe list
    for(let el = 0; el < list.length; el++){
        let element = list[el]
        let matchTags = true
        //for each tag -> check if doesn't match in the tag list of the recipe
        for(let tag = 0; tag < tags.length; tag++){
            if(element.tagsList.indexOf(tags[tag]) === -1){
                matchTags = false
                break
            }
        }
        if(matchTags){
            filteredList.push(element)
        }
    }
    return filteredList
}

export default filterByTags