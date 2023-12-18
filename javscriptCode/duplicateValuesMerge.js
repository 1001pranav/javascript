function mergeNonDuplicateValue(...rest) {
    rest.map((arr)=>  {
        data = [...new Set([...data, ...arr])]
    });
    return data;
}

const merge = mergeNonDuplicateValue([1,2,3], [1,2,3], [4,5,1], [1,1,1]);
console.log(merge);