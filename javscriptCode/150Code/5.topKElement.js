/*
5. Top K Frequent Elements

📌 Problem: Find the K most common numbers in a list.
📝 Example:
🔹 Input: [1, 1, 1, 2, 2, 3], K = 2
🔹 Output: [1, 2] (because 1 appears 3 times, 2 appears 2 times)
*/

function topKElement(arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) { 
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1);
        }
    }
    const arrSorted = [...map.entries()].sort((a, b) => b[1] - a[1])
    return arrSorted.slice(0, k).map(a => a[0])
}

console.time('Time')
const result = topKElement([32, 22, 11, 22, 32, 1, 10, 22, 32], 2);
console.timeEnd('Time')

console.log(result);
