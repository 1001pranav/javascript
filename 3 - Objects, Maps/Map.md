# Maps 
Maps in javascript is a collection of key-value pairs. It is used to store the data in key-value format. It is mutable. It is iterable. It is also known as Hash Table in some languages.
Unlike Objects it remembers the Input order

## CURD Operation on Maps

### Creation, Insertion and Update of the Maps

To create a new map we use `new Map()` function which creates new map.

```Javascript
const mapExample = new Map([
    ['key', 'value'],
    ['name', 'test']
])
console.log(mapExample);
//Map(2) { 'key' => 'value', 'name' => 'test' }
```

If You don't pass the array to the it will create empty Map object, If you want to add elements to map then we can use .set method, `mapExample.set('differentKey', 'differentValue')`

```Javascript
mapExample.set('age', 24);
```
we can use same method for updating the any value. just pass the key and value which you want to update.

### Get the value, Check if value exists
* To check if the value present in the map we can use `.has(key)` which returns true if key is present in the object
* To get the value of any perticular key we can use `.get(key)`, Which returns the value

```Javascript

mapExample.has('address'); // Checking if the key present in the map. 
//false
const name = mapExample.get('name');
// test;
```


## Looping through Maps
We can use `for...of` method, this method returns key and value in array. 
```Javascript
for(const [key, value] of mapExample) {
    console.log(`Key -> ${key}, Value -> ${value}`)
}
```
