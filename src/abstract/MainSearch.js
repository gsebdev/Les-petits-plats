const keywordSearch = (list, searchString) => {
        if(searchString === ''){
            return list
        }
        let search = []
        // for each element of the recipe list
        for (let i = 0; i < list.length; i++){
            //if the search string matches with the recipe text -> adds the recipe to the return list
            if(list[i].textToSearchIn.indexOf(searchString.toLowerCase()) !== -1) {
                search.push(list[i])
            }
        }
        return search
    }

    export default keywordSearch

    /*
    const keywordSearch = (list, searchString, propertiesToSearch) => {
        if(searchString === ''){
            return list
        }
        let search = []
        // for each element of the recipe list
        for (let i = 0; i < list.length; i++){
            for (let y = 0; y < propertiesToSearch.length; y++) {
                if(list[i][propertiesToSearch[y]].toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                    search.push(list[i])
                    break
                }
            }
        }
        return search
    }
    */