function selectionSort(arr) {
    for (let i = 0; i< arr.length; i++) {
        let minIndex = i;
        for(let  j = i + 1; j< arr.length; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
const unsortedArray = [505, 25, 1, 15, 12, 0.0021];
selectionSort(unsortedArray);
console.log(unsortedArray);