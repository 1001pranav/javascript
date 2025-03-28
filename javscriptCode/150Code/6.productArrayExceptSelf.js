/*
6. Product of Array Except Self

📌 Problem: For each number in a list, find the product of all other numbers (except itself).
📝 Example:
🔹 Input: [1, 2, 3, 4]
🔹 Output: [24, 12, 8, 6]
(Explanation:
🔹 24 = 2×3×4
🔹 12 = 1×3×4
🔹 8 = 1×2×4
🔹 6 = 1×2×3)
*/


/*
    Consider an example [1, 2, 3, 4];

    1. pre = 1,  res = [], res[0] = 1 (as 1 * any thing is that number);
    res = [1, ...]
    2. For Loop taking from 1 to n - 1 (3)
        2.1 i = 1, pre = pre(1) * arr[0](1); res[1] = 1 ;pre = 1,  res = 1,1
        2.2 i = 2, pre = pre(1) * arr[1](2); res[2] = 2 ;pre = 2,  res = 1,1,2
        2.3 i = 3, pre = pre(2) * arr[2](3); res[3] = 6 ;pre = 6,  res = 1,1,2,6
    3. post = 1, arr = [1, 2, 3, 4], res = [1, 1, 2, 6]
    4. for loop from n - 2 (2) to 0 
        4.1 i = 3; res[3] = res[3](6) * post (1); post(1) = post * arr[3](4); post = 4,  res = 1,1,2,6
        4.2 i = 2; res[2] = res[2](8) * post (4); post(4) = post * arr[2](3); post = 12,  res = 1,1,8,6
        4.3 i = 1; res[1] = res[1](12) * post (12); post(12) = post * arr[1](2); post = 24,  res = 1,12,8,6
        4.4 i = 0; res[0] = res[0](24) * post (24); post(24) = post * arr[0](1); post = 24,  res = 24,12,8,6
*/

function productExceptSelf(arr) {
    let n = arr.length;
    let res = new Array(n).fill(1);
    
    // Calculate left products
    let left = 1;
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= arr[i];
    }
    console.log(res);
    
    // Calculate right products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= arr[i];
    }
    
    return res;
}

const arr = [1, 2, 3, 4], res = [];
console.log({res: productExceptSelf(arr)});
// [ 24, 12, 8, 6 ]