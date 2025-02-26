function bubbleSort(arr) {
    // Loop through the array and compare adjacent elements
    for (let i = 0; i < arr.length; i++) {
        // Last i elements are already in place
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Swap elements if they are not in order
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const sort = [93,62,55,40, 33, 21, 12, 5, 4, 2, 1];
bubbleSort(sort);
console.log(sort);