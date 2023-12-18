function memoizedFib(n, cache = [1,1]) {
    console.log(n)
    if (cache[n]) {
        // console.log(cache, n)
        return cache[n];
    }
    return cache[n] = memoizedFib(n-1, cache) + memoizedFib(n-2, cache);
}
/*
    5 => (4,  3) => [1,1]
          3 2 3 2
*/
// const normalFib = (n) => {
//     return n < 2? 1: normalFib(n-1)+ normalFib(n-2);
// }
const fib = memoizedFib(5);
// const normalFibAns = normalFib(5);
console.log(fib);
// console.log(normalFibAns);