const filterByTags = (list, tagsObject) => {
        return list.reduce((filteredList, element) => {

        
            if(Object.keys(tagsObject).every((key) => 
                tagsObject[key].every(tag => 
                    element.filters[key].toString().toLowerCase().indexOf(tag) !== -1
                )
            )){
                filteredList.push(element)
            }
            return filteredList
            }
        ,[])
}

export default filterByTags