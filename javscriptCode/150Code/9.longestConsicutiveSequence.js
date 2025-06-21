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
    2. Initialize currSteak to 1 (setting 1 because matching curr 1  if matched then 1 + 1)
    3. Initialize maxStreak to 1
    4. Iterate array from 1 to length of array
        4.a Check if current Number is equal to previous number + 1
            4.a.i If true, increment currStreak by 1
                4.a.i.i If currSteak is greater than maxStreak, update maxStreak
            4.a.ii If false, update the currSteak with 1
            4.a.i Initialize currentNum to num
    5. Return maxStreak

*/

function longestConsecutive(arr) {
    if (arr.length === 0) return 0;
    let maxStreak = 1, currStreak = 1;

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] === arr[index - 1] + 1) {
            currStreak += 1;
            maxStreak = currStreak > maxStreak? currStreak: maxStreak;
        }
        else {
            currStreak = 1;
        }
    }

    return maxStreak;
}

// Test Case
console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 101, 102, 103,104]));  // Output: 4
console.log(longestConsecutive([100, 4, 200, 1, 31, 21, 101, 1024, 1035,1044]));  // Output: 1
console.log(longestConsecutive([-3, -2, -1, 0, 1]))
console.log(longestConsecutive([-2, -1, 0, 2, 3, 4]))
console.log(longestConsecutive([-5, -3, -2, -1, 0, 1]))
console.log(longestConsecutive([-10, -5, 0, 5]))
console.log(longestConsecutive([3, -4, -3, -2, -1, 10]))

