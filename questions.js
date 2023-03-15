//  Sort Arrays without using temp variable
{
  let sortArrays = [52, 12, 22, -13, -33, 50, 110, 61];

  for (let i = 0; i < sortArrays.length; i++) {
    for (let j = 0; j < sortArrays.length; j++) {
      if (sortArrays[i] < sortArrays[j]) {
        sortArrays[j] = sortArrays[j] + sortArrays[i];
        sortArrays[i] = sortArrays[j] - sortArrays[i];
        sortArrays[j] = sortArrays[j] - sortArrays[i];
      }
    }
  }

}

// Reverse the array numbers
{
  let arrNums = [1, 2, 52, 62, 252, 20]
  for (let i = 0; i < arrNums.length / 2; i++) {
    const endNum = arrNums[arrNums.length - i - 1];
    const startNum = arrNums[i];
    arrNums[i] = endNum;
    arrNums[arrNums.length - i - 1] = startNum;
  }
}
// Array to remove repeated numbers

{
  let subArrays = [1, 2, 3, [2, 4], 5, [1, 4, 6]];
  let finalArray = [];
  subArrays = subArrays.flat()

  subArrays.forEach((num) => {
    if (finalArray.includes(num)) finalArray.push(num);
  })

  // OR simplified version.

  subArrays = subArrays.filter((value, index) => {
    if (subArrays.slice(0, index).includes(value)) return false;
    return true;
  })
}

// Finding Maximum Number in an array.
{
  let maxNum = - Infinity;
  maxNum = arrNums.find((nums) => { if (nums > maxNum) return true; return false; });
}

// Finding Minimum Number in an array.
{ 
  let minNum = Infinity;
  minNum = arrNums.find((nums) => { if (nums < minNum) return true; return false; });
}

// create a function which adds two number with taking one number at a time. 
{
  function sum(number) {
    return function (N) {
      return number + N;
    }
  }
  const add = sum(10);
  console.log(add(4), add(14));
}

// Return functions  
function sumAndLogs(){
  let currentSum = 0;
  return {
    sum: (num) =>  currentSum += num,
    logs: () => console.log("The sum is %d", currentSum)
  }
}

const sumLog = sumAndLogs()
sumLog.sum(25);
sumLog.sum(35);
sumLog.logs()

// 
console.log(sum(25)(20))