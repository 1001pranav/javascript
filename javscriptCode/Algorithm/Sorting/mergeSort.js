const mergeSort = (arr) => {
    if (arr.length <=1 ) {
        return arr;
    }

    let left = arr.slice(0, Math.ceil((arr.length - 1)/2));
    let right = arr.slice(Math.ceil((arr.length - 1)/2), arr.length);

    /*
        Recursively split the array into 2 parts
            When only one element is left then start sorting and merging the element
    */
    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (left, right) => {
    let sorted = [];

    /* Till elements are present in both left and right */
    while (left.length && right.length) {
        /* If 0th element of left is less than right element then push it to sorted element (Removed from left)*/
        if (left[0] < right[0]) sorted.push(left.shift());
        /* Else push the right element to sorted (Removing from right)*/
        else sorted.push(right.shift());
    };

    return sorted.concat(left.slice().concat(right.slice()));
}

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

const sortedArr = mergeSort(unsortedArr);
console.log(sortedArr);