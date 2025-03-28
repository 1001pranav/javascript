/*
9. Longest Consecutive Sequence

📌 Problem: Find the longest sequence of numbers that appear one after another.
📝 Example:
🔹 Input: [100, 4, 200, 1, 3, 2]
🔹 Output: 4 (because 1, 2, 3, 4 is the longest consecutive sequence)
*/

/*
    1. Check if array is not empty
        1.a if empty return 0
    2. Convert array to array set
    3. Initialize maxStreak to 0
    4. Iterate through array set
        4.a If array set does not have num - 1 (Doing that because verifying if sequence is already checked)
            4.a.i Initialize currentNum to num
            4.a.ii Initialize currentStreak to 1
            4.a.iii While array set has currentNum + 1
                4.a.iii.a Increment currentNum by 1
                4.a.iii.b Increment currentStreak by 1
            4.a.iv Update maxStreak with max of currentStreak and maxStreak
    5. Return maxStreak

*/

function longestConsecutive(arr) {
    if (arr.length === 0) return 0;

    const arrSet = new Set(arr);
    let maxStreak = 0;

    for (let num of arrSet) {
        if (!arrSet.has(num - 1)) {  // Start of a new sequence
            let currentNum = num;
            let currentStreak = 1;

            while (arrSet.has(currentNum + 1)) {  // Expand sequence
                currentNum += 1;
                currentStreak += 1;
            }

            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }

    return maxStreak;
}

// Test Case
console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 101, 102, 103,104]));  // Output: 4