function quickSort(arr = []) {
    console.log("<--------->");
    
    console.log("UNSORTED ARRAY", arr);
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log("LEFT ARRAY", left);
    console.log("RIGHT ARRAY", right);
    console.log("<--------->");

    return [...quickSort(left), pivot, ...quickSort(right)];
} 

const arr = [20, 9, 12, 55, 1, 13, 16, 21, 15, 3, 6, 8];
const sortedArr = quickSort(arr);
console.log("<--------->");
console.log("UNSORTED ARRAY",arr);
console.log("SORTED ARRAY", sortedArr);