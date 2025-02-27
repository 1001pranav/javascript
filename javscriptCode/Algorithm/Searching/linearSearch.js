function linearSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [2, 54, 12, 90, 112, 44, 53, 67, 44];
const target = 44;
console.log(linearSearch(arr, target));