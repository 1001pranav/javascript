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

let sort = [25,1,3,12,55,62];
bubbleSort(sort);
console.log(sort);