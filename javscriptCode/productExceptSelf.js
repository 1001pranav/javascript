/*
    Consider an example [1, 2, 3, 4];

    1. pre = 1,  res = [], res[0] = 1 (as 1 * any thing is that number);
    res = [1, ...]
    2. For Loop taking from 1 to n - 1 (3)
        2.1 i = 1, pre = pre(1) * arr[0](1); res[1] = 1 ;pre = 1,  res = 1,1
        2.2 i = 2, pre = pre(1) * arr[1](2); res[2] = 2 ;pre = 2,  res = 1,1,2
        2.3 i = 3, pre = pre(2) * arr[2](3); res[3] = 6 ;pre = 6,  res = 1,1,2,6

*/

function PrefixProduct(arr, res = []) {
    let pre = 1;
    res[0] = 1;
    for(let i = 1; i < arr.length; i++) {
        pre *= arr[i - 1];
        res[i] = pre;
    }
    return res;
}

/* 
    3. post = 1, arr = [1, 2, 3, 4], res = [1, 1, 2, 6]
    4. for loop from n - 2 (2) to 0 
        4.1 i = 3; res[3] = res[3](6) * post (1); post(1) = post * arr[3](4); post = 4,  res = 1,1,2,6
        4.2 i = 2; res[2] = res[2](8) * post (4); post(4) = post * arr[2](3); post = 12,  res = 1,1,8,6
        4.3 i = 1; res[1] = res[1](12) * post (12); post(12) = post * arr[1](2); post = 24,  res = 1,12,8,6
        4.4 i = 0; res[0] = res[0](24) * post (24); post(24) = post * arr[0](1); post = 24,  res = 24,12,8,6
*/
function PostfixProduct(arr, res) {
    let post = 1;
    for (let i = arr.length - 1; i >= 0; i-- ) {
        res[i] *= post;
        post *= arr[i ];
    }
}

const arr = [1, 2, 3, 4], res = [];
PrefixProduct(arr, res);
PostfixProduct(arr, res);
console.log({res});
