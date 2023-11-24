# Arrays.

Arrays in Javascript can contain Numbers, String, Objects, Arrays etc.

```JavaScript
    const array = [1,2,3,4,5];
    console.log(array);
```

In Array we are passing the memory of array if we are passing to any function. It means that original array might change if we do any operations on that array.

consider below example
```Javascript
    function removeAphaSpclChars(arrays) {
        arrays.forEach((data, index)=> {
            if ([NaN, Infinity].includes(+data)) {
                delete arrays[index];
            }
        });
        return arrays; // This doesn't matter.
    }
    const arrays = [1,'21a',2,'a',4,5, '15', "255"];
    console.log({arrays});
    /*
    {
        arrays: [
            1,    '21a', 2,
            'a',  4,     5,
            '15', '255'
        ]}
    */
    let updatedArrays = removeAphaSpclChars(arrays);
    console.log({arrays, updatedArrays});
    /*
        {
            arrays: [ 1, <1 empty item>, 2, <1 empty item>, 4, 5, '15', '255' ],
            updatedArrays: [ 1, <1 empty item>, 2, <1 empty item>, 4, 5, '15', '255' ]
        }
    */
```
In the above example if you see both arrays and updatedArrays have changed, so there is no need of return statements.

## Shallow Copy
Shallow copy is used so that original array is not updated or modified.
Various ways to shallow copies are spread operator `(...)`, `Array.from()`, `arr.filter()`

```Javascript
const arrays = [1,2,3,4,5];
let updatedArrays = [...arrays];
```

```Javascript
const arrays = [1,2,'24', 'a', 3, 5.6, 'a'];
function removeAphaSpclChars(arrays) {
    // Different ways for shallow copy
    arrays = [...arrays];
    arrays = Array.from(arrays);

    arrays.forEach((data, index)=> {
        if ([NaN, Infinity].includes(+data)) {
            delete arrays[index];
        }
    });
    return arrays; // This doesn't matter.
}
    let updatedArrays = removeAphaSpclChars(arrays);
    console.log({arrays, updatedArrays});
```

```Javascript
    const arr = [1,23,4,5,6];
    const newArrays = arr.concat();
    arr.forEach((data, index)=> {
        arr[index]  *= arr[index];
    });
    console.log({arr, newArrays});
```

Note: Just to demonstrate Array.forEach loop has been used, In above situation we can simply use `filter()` where, this method returns a new array without changing the original array. To check more about Filter you can check [Filters, Reduce](#filter-and-reduce)

Different solution.
```Javascript
function removeAphaSpclChars(arrays) {
    return arrays.filter((arrayData)=> !([NaN, Infinity].includes(+arrayData)));
}
const array = [1,'21a',2,'a',4,5, '15', "255"];
const updatedArrays = removeAphaSpclChars(array)
console.log({array, updatedArrays});
/*
{
  array: [
    1,    '21a', 2,
    'a',  4,     5,
    '15', '255'
  ],
  updatedArrays: [ 1, 2, 4, 5, '15', '255' ]
}
*/
```
## Array Methods.
Arrays have various methods for operations.

### isArray
To check if any variable or data is Array we can use `Array.isArray(arr) method`. To this you can pass any data or variable to check if data is array.
```Javascript
    const arrayData = [1,2,3.4,5];
    const objData = {
        key: arrayData
    }

    console.log(Array.isArray(arrayData));      // Output: true
    console.log(Array.isArray(objData));        // Output: false
    console.log(Array.isArray([1,2,3,4,5]));    // Output: true
    console.log(Array.isArray(true));           // Output: false
    console.log(Array.isArray(`[1,2,3,4,5]`));  // Output: false
```

### Push, Pop, UnShift, Shift
Inserting and deleting to last position - `push, pop`.
Insert and delete from 0th index - `unshift, shift`.

Here Push and unshift method takes n argument.
```Javascript
    const array = [1,2,3,4,5];

    // Insert using push. push method can take multiple values.
    // array.push(6,7,8,9,10);
    // This will add 6,7,8,9,10 to end.
    array.push(6);
    console.log(array); // Output: [1, 2, 3, 4, 5, 6]

    // pop method does not take any arguments.
    array.pop()
    console.log(array); // Output: [1, 2, 3, 4, 5]

    array.unshift(-1, 0);
    console.log(array); // Output: [-1, 0, 1, 2, 3, 4, 5]

    array.shift();
    console.log(array); // Output: [0, 1, 2, 3, 4, 5]
```

### Delete
For delete the element there are various ways, We can use `splice, delete, filter`.
If we delete any array data using the delete method then the element will be removed from that position and it will be replaced with 'empty' and type of empty is 'undefined'.

```javascript
    const data=[1, 2, 3, 4, 5];
    console.log({data, length: data.length});         //Output: { data: [1, 2, 3, 4, 5], length: 5 }
    delete data[1];
    console.log({data, length: data.length});        //Output: { data: [1, empty, 3, 4, 5], length: 5 }
    console.log("Typeof empty is", typeof data[1]);  //Output: Typeof empty is undefined
```

### Concat
`concat` can be used to merge multiple arrays into one.
This method can take n arguments.
`arr.concat(arr1, arr2, ... arrN)`, In the example `arr` will be merged with `arr1, arr2 ... arrN` Where values of `arr` will be in the beginning followed by `arr2, ..., arrN`.

```Javascript
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['d', 'e', 'f'];

    const alphabets = arr1.concat(arr2);
    console.log(alphabets);
```
You can use concat for shallow copy of the arrays. You just don't pass the args
```Javascript
    const arr = [1,23,4,5,6];
    const newArrays = arr.concat();
    arr.forEach((data, index)=> {
        arr[index]  *= arr[index];
    });
    console.log({arr, newArrays});
```


### Splice, toSpliced
`Splice` - Method is used to Add or Remove data from array from any given position.
`toSpliced (Node Version 20.0.0)` - In original method (splice) it manipulates original array's to avoid that toSpliced is used. This method is implemented in ECMAScript 2023.

Both `splice` and `toSpliced  (Node Version 20.0.0)` take the same arguments, where arguments are `(start, deleteCount, insertItem1, insertItem2, ..., insertItemN)`
```Javascript
    const Months = ["January", "February", "March", "April", "May"];

    Months.splice(1, 0, "February");
    console.log(Months); // Output: ["January", "February", "March", "April", "May"]

    Months.splice(1, 1);
    console.log(Months); // Output: ["January", "February", "March", "April", "MAY"];

    let newMonths = Months.toSpliced(Months.length, 0, "June");
    console.log({Months, newMonths});
    /* Output:
    {
        Months: ["January", "February", "March", "April", "MAY"];
        newMonths: ["January", "February", "March", "April", "MAY", "June];
    }
    */
```


### Sort, toSorted
Javascript provides inbuilt support for sorting. `sort()`
Sort function takes optional parameter of callbackFunction(a, b).
The condition for sorting of the function is as below.

```Javascript
    const alphaNumeric = [1, 'a', 'b', 'C', 'AA', '1', '2', 2, 1000000, '10000000', 0];
    alphaNumeric.sort();
    console.log(alphaNumeric); // [0, 1, '1', 1000000, '10000000', '2', 2, 'AA', 'C', 'a', 'b']
```

Even if we consider only numeric sorting the the result will be as following.
```Javascript
    const numeric = [1, 20, 25, 1000000, 25000]
    numeric.sort();
    console.log(numeric); // [1, 1000000, 20, 25, 25000]
```
To avoid above issue we can use callback function to get the resultant sorting order.
The sort callBackFunction take 2 parameter (a, b)

Optional callbackFunction working.
```
    For input [a,b] =>
        If Output is greater than 0, Then the sorting order is [b,a]
        If Output is equal to 0, Then the sorting order is unchanged.
        If Output is less than 0, Then sorting order is [a,b].
```
```Javascript
    const numeric = [1, 20, 25, 1000000, 25000]
    numeric.sort((a,b) => a - b);
    console.log(numeric); // [1, 20, 25, 25000, 1000000]
```

`toSorted()  (Node - 20.0.0)` - Method works same as sorted, But it wont change the original array.
```Javascript
    const  numb = [25, 15, 1, 55, 45];
    const sortedNumb = numb.toSorted();
    console.log({numb, sortedNumb});
    /* Output
    {
        numb: [25, 15, 1, 55, 45],
        sortedNumb: [1, 15, 25, 45, 55]
    }
    */
```

### Every, Some
* In Javascript to check if all the values in the array matches to conditions then you can use `every()` method, Where you need to pass a function and which should return a boolean value, If value is true for all then the `every()` function return `true`, else it will return `false`.

Consider below example.
```Javascript
    const checkIfNumberIsEven = (number) => number % 2 == 0;
    const array = [2, 4 , 6, 8, 10];
    console.log(array.every(checkIfNumberIsEven)); //Output: true.
    array.push(11);
    console.log(array.every(checkIfNumberIsEven)); //Output: false.
```

* In Other hand if you want to check if any of array value matches the condtition then you can use `some()` method it works same as `every()` but it will return `true` even if any of one condition matches.

Consider same array example,
```Javascript
    const checkIfNumberIsEven = (number) => number % 2 == 0;
    const array = [2, 4 , 6, 8, 10];
    console.log(array.some(checkIfNumberIsEven)); //Output: true.
    array.push(11);
    console.log(array.some(checkIfNumberIsEven)); //Output: true.
```

### Flat
In array if there are nested arrays and all the arrays needs to be one, Then we can use `flat()` method can be used, Where if we dont pass any args then only one nested array is declustered.
consider following example

```Javascript
const subArrays = [1,2, [1,2,3], [1,2,[1,2,3]], [1,2,3,[1,2,3,[1,2,3,4]]]];

console.log(subArrays.flat());    //[1, 2, 1, 2, 3, 1, 2, Array(3), 1, 2, 3, Array(4)]
console.log(subArrays.flat(2));  //[1, 2, 1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, Array(4)]
console.log(subArrays.flat(Infinity)) //[1, 2, 1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4]
```

Note: Here `Infinity` will remove all sub arrays(nested arrays) and make it one.



### ForEach
```Javascript
    /*
        forEach method takes callback function as parameter.

        Callback function takes 3 parameters.
        1. element - Each element of the array.
        2. index - Current index of the array.
        3. Array(arry) - array which was called upon.

        This function does not return anything.
    */

    array.forEach((element, index, arry) => {
        console.log({element, index, arry});
    });

    /*
    OUTPUT:
        {element: 1, index: 0, arry: [1,2,3,4,5]}
        {element: 2, index: 1, arry: [1,2,3,4,5]}
        {element: 3, index: 2, arry: [1,2,3,4,5]}
        {element: 4, index: 3, arry: [1,2,3,4,5]}
        {element: 5, index: 4, arry: [1,2,3,4,5]}
    */

```
forEach is synchronous so 