const mergeSort = (arr) => {
    console.log("<--------->");

    console.log();
    console.info("Array for Split", arr);
    console.log();

    if (arr.length <=1 ) {
        return arr;
    }

    // split the array into 2 half parts
    let left = arr.slice(0, Math.ceil((arr.length - 1)/2));
    let right = arr.slice(Math.ceil((arr.length - 1)/2), arr.length);

    console.log();
    console.info("Left Array ", left);
    console.log();

    console.log();
    console.info("Right Array", right);
    console.log();
    /*
        Recursively split the array into 2 parts
            When only one element is left then start sorting and merging the element
    */
    left = mergeSort(left);
    right = mergeSort(right);
    console.log("<--------->");

    return merge(left, right);
}

const merge = (left, right) => {
    console.log("<--------->");

    const sorted = [];
    
    console.log();
    console.info("Left Array for sorting", left);
    console.log();

    console.log();
    console.info("Right Array for sorting", right);
    console.log();
    /* Till elements are present in both left and right */
    while (left.length && right.length) {
        /* If 0th element of left is less than right element then push it to sorted element (Removed from left)*/
        if (left[0] < right[0]) sorted.push(left.shift());
        /* Else push the right element to sorted (Removing from right)*/
        else sorted.push(right.shift());
    };

    console.log();
    console.info("Left Array", left);
    console.log();
    console.log();
    console.info("Right Array", right);
    console.log();
    console.log();
    console.info("Sorted Array", sorted);
    console.log();

    console.log("<--------->");

    // Concatenate any remaining elements in left and right arrays to the sorted array
    return sorted.concat(left, right);
}

const unsortedArr = [38, 27, 43, 3, 9, 82, 10];

const sortedArr = mergeSort(unsortedArr);
console.log();

console.log("<--------->");
console.log("UNSORTED SORTED" ,unsortedArr);
console.log("<--------->");


console.log("<--------->");
console.log("FINAL SORTED" ,sortedArr);
console.log("<--------->");
