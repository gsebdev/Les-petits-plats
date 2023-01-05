const keywordSearch = (list, searchString, propertiesToSearch) => {
        if(searchString === ''){
            return list
        }
        const search = list.filter(element => {
            return propertiesToSearch.some(key => {
                return element[key].toLowerCase().indexOf(searchString.toLowerCase()) !== -1
            })
        })
        return search
    }

    export default keywordSearch