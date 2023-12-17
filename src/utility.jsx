export const removeDuplicateFilter = (data, key) => {
    return [...new Map(data.map( x => [key(x), x])).values()]
}