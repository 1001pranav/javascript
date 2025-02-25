# Objects

Objects in javascript are collection of key value pairs. Here key will be string and value can be anything like number, string, object, array, function, etc.

## CRUD Operations on objects

Objects can be created using various methods. 
1. Using flower brackets. (Empty Objects)
2. Using Object constructors
3. Using Object literals

```Javascript
    const emptyObjects = {};
    const objectConstructors = new Object();
    const ObjectLiteral = { key: "Hey ", 1: "How are you?" }
```

We can Access / Add or  Update data from the objects by using dot Notation (Mainly for static keys), Or using square brackets (Mainly for dynamic Keys)

```Javascript 
const user = {
    userName: 'Pranav',
    age: 25,
    address: {
        taluk: 'Kundapur',
        city: 'Kundapur',
        state: 'Karnataka'
    },
    tags: ['Node.js', 'MySQL', 'PostgreSQL']
};

console.log("User name is ", user.userName, "Age is ",user['age'] ); // User name is  Pranav Age is  25

user.userName =  "Ganesh";
user['age'] = 35;

user.title = "Software Developer"; //This will create a new data. 
// user['title'] = "Software Developer"; -> This will give the same result.
console.log(user);
/*
{
    userName: 'Ganesh',
    age: 35,
    address: { taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' },
    tags: [ 'Node.js', 'MySQL', 'PostgreSQL' ],
    title: 'Software Developer'
}
*/

delete user.title;
console.log(user);
/*
{
    userName: 'Ganesh',
    age: 35,
    address: { taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' },
    tags: [ 'Node.js', 'MySQL', 'PostgreSQL' ],
*/
```

## Check if key is present in Object.
To Verify if the key is present in the object there are several ways, 
1. using "in" keyword 
2. Using Object.prototype.hasOwnProperty('key') Method
3. Using Object.hasOwn(obj, 'Key')


```Javascript 
const user = {
    userName: 'Pranav',
    age: 25,
    address: {
        taluk: 'Kundapur',
        city: 'Kundapur',
        state: 'Karnataka'
    },
    tags: ['Node.js', 'MySQL', 'PostgreSQL']
};

console.log( 'age' in user); // true
console.log(user.hasOwnProperty('title'))// false
console.log(Object.hasOwn(user, 'username'))// false
```

## Iteration using for .. in loop

if we want to access each Object property like array dynamically then there are basically 2 way.
1. Either using any One of above method `Object.keys, Object.values, Object.entries` 
2. using `for .. in` loop

```Javascript
for (const key in user) {
    console.log(key, user[key]);
}
/*
userName Ganesh
age 35
address { taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' }
tags [ 'Node.js', 'MySQL', 'PostgreSQL' ]
title Software Developer
*/
```

## Keys, Values, Entries

1. `Object.keys(<obj>)` is used to get all the keys of the object
2. `Object.value(obj)` will get all the values of the Objects
3. `Object.entries(obj)` will get both key and value in an array format

```Javascript
Object.keys(user).map((key)=> console.log(key));
/*
userName
age
address
tags
title
*/
Object.values(user).map((value)=> console.log(value));
/*
Ganesh
35
{ taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' }
[ 'Node.js', 'MySQL', 'PostgreSQL' ]
*/
Object.entries(user).map(([key, value])=> console.log({key, value}));
/*
{ key: 'userName', value: 'Ganesh' }
{ key: 'age', value: 35 }
{
  key: 'address',
  value: { taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' }
}
{ key: 'tags', value: [ 'Node.js', 'MySQL', 'PostgreSQL' ] }
{ key: 'title', value: 'Software Developer' }
*/
```

## converting string to JSON and JSON to String

* JSON.stringify() - Converts JSON object to string.
* JSON.parse() - Converts string to JSON

```Javascript
const stringifiedJSON = JSON.stringify(user);
console.log(stringifiedJSON);
//'{"userName":"Ganesh","age":35,"address":{"taluk":"Kundapur","city":"Kundapur","state":"Karnataka"},"tags":["Node.js","MySQL","PostgreSQL"],"title":"Software Developer"}'
const parsedJSON = JSON.parse(stringifiedJSON);
/*
{
    userName: 'Ganesh',
    age: 35,
    address: { taluk: 'Kundapur', city: 'Kundapur', state: 'Karnataka' },
    tags: [ 'Node.js', 'MySQL', 'PostgreSQL' ],
    title: 'Software Developer'
}
*/
```

## Destructuring Objects And Setting default value while destructuring

```Javascript
const { 
    userName: username,  // UserName is the actual value in user Obj and username is the 
    age, 
    description = "Software Developer" 
} = user;
console.log({username, age, title});
// { username: 'Ganesh', age: 35, description: 'Software Developer' }
```