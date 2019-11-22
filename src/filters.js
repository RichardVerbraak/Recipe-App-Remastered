// Filter for searching recipes

const filters = {
    searchText: ""
}

const setFilters = (obj) => {
    if (typeof obj.searchText === "string") {
        filters.searchText = obj.searchText
    }
}

const getFilters = () => {
    return filters
}

export { getFilters, setFilters }