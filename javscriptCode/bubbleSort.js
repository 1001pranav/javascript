function bubbleSort(arr) {
    let sortedData = false;
    while (!sortedData) {
        sortedData = true;
        for(let i = 1; i< arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                sortedData = false;
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
        }
    }
}

let sort = [25,1,3,12,55,62];
bubbleSort(sort);
console.log(sort);