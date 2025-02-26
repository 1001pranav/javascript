function binarySearch(arr, target) {
    try {
        let low = 0, high = arr.length - 1;
        while (low <= high) {
            console.log(`Low: ${low} and High: ${high}`);

            let mid = Math.floor((low + high) / 2);
            console.log(`Mid: ${mid}`);

            console.log(`arr[mid]: ${arr[mid]} and target: ${target}`);
            
            if (arr[mid] === target) {
                return arr[mid];
            }
            else if (arr[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    } catch (error) {
        console.error(error);
    }
}

const arr = [3, 5, 8, 10, 12, 15, 20, 25, 30, 40];
const target = 44;
console.log(binarySearch(arr, target)); 