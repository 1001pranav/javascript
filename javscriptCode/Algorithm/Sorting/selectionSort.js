function selectionSort(arr) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Assume the current index element is the smallest
        let minIndex = i;
        console.log();
        console.info("Index of smallest Array", minIndex);
        
        // Looping from i + 1 to end of the array
        for (let j = i + 1; j < arr.length; j++) {

            console.log();
            // If we find an element smaller than the current smallest
            console.log(`arr[${j}] < arr[${minIndex}]`);
            console.log(`${arr[j]} < ${arr[minIndex]} = ${arr[j] <arr[minIndex]} `);
            
            if (arr[j] < arr[minIndex]) {
                // Update the smallest index
                minIndex = j;
            }
        }

        // Swap the smallest element with the current element
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.log();
            console.log("Swapping", arr[i], arr[minIndex]);
        }        
    }
}
const unsortedArray = [505, 25, 1, 15, 12, 0.0021];
const sortedArr = [...unsortedArray]
selectionSort(sortedArr);

console.log("UNSORTED ARRAY", unsortedArray);
console.log("SORTED ARRAY", sortedArr);
