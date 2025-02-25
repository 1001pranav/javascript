# ES2023
ECMAScript 2023 Version has 3 updates Majorly related to Array methods, Hashbang Grammar, Symbols as WeakMap keys.

ES2023 Features can be used from Node version 20.

## Array methods
In ECMAScript-2023 version for array there are new methods.
* `findLast((element, index, array), thisArgs)` -> return either undefined or value.
* `findLastIndex((element, index, array), thisArgs)` -> returns -1 or index of value.
* `toReversed()` -> returns new array with reversed.
* `toSorted((a, b))` -> returns new sorted array.
* `with(index, value)` -> return new array with added value in index mentioned at position.

### FindLast and FindLastIndex
To find the array from last data, We can use `findLast((element, index, array), thisArgs)` and `findLastIndex((element, index, array), thisArgs)`

```Javascript
const returnEven = (num) => num % 2 === 0;
const array = [1, 3, 4, 5, 6, 7, 9];
const evenNumber = array.findLast(returnEven);
console.log(evenNumber); //Output: 6

const evenNumberIndex = array.findLastIndex(returnEven);
console.log(evenNumberIndex); //Output: 4
```

### ToReversed
reverse works same as toReversed, But instead of updating originalArray it will create a new array
```Javascript
const array = ["three", "two", "one"];
const reversedArray = array.toReversed();
console.log({array, reversedArray});
/*
{
    array: [ 'three', 'two', 'one' ],
    reversedArray: [ 'one', 'two', 'three' ]
}
*/
```

### ToSorted
toSorted is also same as sorted, the only change is that it wont change original array instead it will create new array,
toSorted expects callback function where it expects `(a, b)` the based on return value it will swap the array data,

* return > 0  -> it swaps a with b `[b, a]`.
* else it will keep original order.
```Javascript
const array = [5, 1, 3, 8, 4, 10];
const sortedArray = array.toSorted((a, b)=> a - b);
console.log({array, sortedArray});
/*
{
    array: [ 5, 1, 3, 8, 4, 10 ],
    sortedArray: [ 1, 3, 4, 5, 8, 10 ]
}
*/
```

### With
This same as bracket notation `array[4]=1`, but the change is instead of updating originalArray it will create a new array.
This method works even with negativeIndexing, where negative index refers to last element.
```Javascript
const array = [25, 14, 1, 3, 10];
const updatedArray = array.with(0, 10);
const updateLastArray = updatedArray.with(-1 , 25);
console.log({array, updatedArray, updateLastArray});
/*
{
    array: [ 25, 14, 1, 3, 10 ],
    updatedArray: [ 10, 14, 1, 3, 10 ],
    updateLastArray: [ 10, 14, 1, 3, 25 ]
}
*/
```

## Hashbang grammer
This feature enables to use shelbang in Javascript, We can directly run Javascript in unix terminal.
shelbang or hashbang tells the operating system which interpreter to use when execution of scripts.
To use hashbang grammer we need use `#!/usr/bin/env node`

using hashbang
```Javascript
#!/usr/bin/env node
console.log("Hello World");
```

To run the above function we must give the execute permission to the file.
`chmod +x <scriptName>.js`

Then we can run the file without node.
`./<scriptName>.js`

## Symbols as Weakmap key
If you know about weakmap then you might know the disadvantage of weakmap, If not will let you know disadvantage of weakmap.
Weakmap is a collection of key-value pairs where the key is always an object and value can be anything, Weakmap is useful 

when we want to store data in object as key but we don't want to keep the object reference till we remove the data from weakmap.

Disadvantage of weakmap is that it can cause memory leak if we use strings or numbers as key, because strings and numbers are not objects and they are not garbage collected.

In weakmap keys can only be objects and it should be unique, Because of this there is a problem of memory leak. If you know about the Symbols, then you know that symbols will be unique with same string, So we can use symbols as weakmap key.

In ECMA-2023 we can use symbols as weakmap keys.

```Javascript
const symbolKey = Symbol("Key");
const weakMap = new WeakMap();
weakMap.set(symbolKey, "test");
console.log(weakMap);
```