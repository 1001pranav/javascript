function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

function hasDuplicateForLoop(arr) {
    const setObj = new Set();
    for (const num of arr) {
        if (setObj.has(num)) {
            return true
        }
        setObj.add(num);
    }
    return false;
}

console.log(hasDuplicateForLoop([1,2,3,4,4,8,9]));
