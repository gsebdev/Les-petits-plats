const filterByTags = (list, tagsObject) => {

        return list.filter(element =>
            Object.keys(tagsObject).every((key) => 
                tagsObject[key].every(tag => 
                    element.filters[key].toString().toLowerCase().indexOf(tag) !== -1
                )
            )
        )
}

export default filterByTags