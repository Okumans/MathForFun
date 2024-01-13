export const removeDuplicateFilter = (data, key) => {
    return [...new Map(data.map( x => [key(x), x])).values()]
}

export const sumFilter = (data, key) => {
    let sum = 0;
    for (let i=0; i<data.length; i++) {
        sum += key(data[i]);
    }
    return sum;
}
