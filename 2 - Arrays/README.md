# Arrays.

Arrays in Javascript can contain Numbers, String, Objects, Arrays etc.

```JavaScript
    const array = [1,2,3,4,5];
    console.log(array);
```

## Array Methods.
Arrays have various methods for operations.

### Push, Pop, UnShift, Shift
Inserting and deleting to last position - `push, pop`.
Insert adn delete from 0th index - `unshift, shift`.

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

### Splice, toSpliced
`Splice` - Method is used to Add or Remove data from array from any given position.
`toSpliced` (Node Version 20.0.0) - In original method (splice) it manipulates original array's to avoid that toSpliced is used. This method is implemented in ECMAScript 2023.

Both `splice` and `toSpliced` take the same arguments, where arguments are `(start, deleteCount, insertItem1, insertItem2, ..., insertItemN)`
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


### Sort, toSorted (Node - 20.0.0)
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