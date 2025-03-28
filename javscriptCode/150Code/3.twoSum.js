/*
3. Two Sum

📌 Problem: Find two numbers in a list that add up to a target value.
📝 Example:
🔹 Input: [2, 7, 11, 15], Target: 9
🔹 Output: [0, 1] (because 2 + 7 = 9)

*/

function twoSums(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSums([2, 7, 11, 15], 13));
