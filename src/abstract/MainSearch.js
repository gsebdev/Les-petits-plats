const keywordSearch = (list, searchString, propertiesToSearch) => {
        if(searchString === ''){
            return list
        }
        let search = []
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

    export default keywordSearch