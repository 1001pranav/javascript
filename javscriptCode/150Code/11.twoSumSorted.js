/*
11. Two Sum II - Input Array Is Sorted

📌 Problem: Find two numbers in a sorted array that add up to a target. Return their 1-based indices.

📝 Example:
🔹 Input: numbers = [2, 7, 11, 15], target = 9
🔹 Output: [1, 2] (Because 2 + 7 = 9)

🔹 Input: numbers = [1, 3, 5, 8], target = 11
🔹 Output: [2, 4] (Because 3 + 8 = 11) 
*/

function twoSumSorted(arr = [], target) {
    try {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            const sum = arr[left] + arr[right];
            if (sum === target) {
                return [left + 1, right + 1]
            }
            if (target > sum) {
                left++
            }
            if (target < sum) {
                right--;
            }
        }
        return [-1, -1];
    } catch (error) {
        console.log(error);   
    }
}

console.log(twoSumSorted([12, 23, 43, 65, 99, 106], 142));
