# ES2022

## Class
### Class Field Declarations
Class Field enables to declare and initialize class properties within the class body
```Javascript
class UserData {
    userName = 'DefaultName';
    age = 10;
    constructor(name, age) {
        if (name) {
            this.userName = name;
        }
        if (age) {
            this.age = age;
        }
    }
}
const defaultUser = new UserData();
console.log(defaultUser); // {userName: 'DefaultName', age: 10}
const user = new UserData("userName", 22);
```
### Private methods and Private fields
In new features of ECMA2022 we can create private fields and private methods, Other than class members no one can access those.
```Javascript
class PrivateClass {
    #title='defaultTitle';
    #getTitleOfBook() {
        return this.#title;
    }
    constructor(title) {
        if (title) {
            this.#title=title;
        }
    }
    getSummary() {
        return `Name of the book ${this.#title}`
    }
}

const pvtClass = new PrivateClass();
console.log(pvtClass.getSummary());
console.log(pvtClass.#title);//Uncaught SyntaxError: Private field '#title' must be declared in an enclosing class
```
### Static class fields and private static methods
The methods and fields are created inside class using static methods are accessed using className directly without using `new`

```Javascript
class ConstantValues {
    static ActiveStatus = 1;
    static #privateKey = "Alka-md12@43";

    static ValidatePrivateKey(key) {
        return this.#privateKey === key;
    }
}

const status = 1;
if (status === ConstantValues.ActiveStatus) {
    console.log("Status is Active");
}
console.log("key 123@ascd is Private?", ConstantValues.ValidatePrivateKey("123@ascd"));

/*
    Status is Active
    key 123@ascd is Private? false
*/
```
### Static initialization blocks
If you want initialize few statements while initialize then we can use static initialize blocks. Consider following example.
```Javascript
class DBConfig {
    static DB_NAME;
    static DB_HOST;
    static {
        this.DB_NAME = "PVR";
        this.DB_HOST = "https://localhost:3000"
    }
}
console.log("DB_NAME", DBConfig.DB_NAME);
console.log("DB_HOST", DBConfig.DB_HOST);
/*
    DB_NAME PVR
    DB_HOST https://localhost:3000
*/
```
## array/string AT()
.at() method can used for elements and string for getting index of the arrays, At methods can also be used for negative indexing where negative index will get last array value. It will works for both zero based indexing and negative indexing

```Javascript
const message = "Hello, From Javascript";
const array = [15, 10, 22, 12, 5];

console.log(message.at(-1), array.at(-1));
//t 5
```
## Object.hasOwn()
This works same as Object.prototype.hasOwnProperty(), But this method has to invoked directly from Object.

```Javascript
const user = {
    name: "Alice",
    age: 10,
}

console.log(Object.hasOwn(user, "Age")); //False;
```
## Regexp match indices
Added indices Where it will return the start and end index of all matched regular expression

```Javascript
    const ipAddressRegex = /([1-255]+[0-255]*[0-255]*).([1-255]+[0-255]*[0-255]*).([1-255]+[0-255]*[0-255]*).([1-255]+[0-255]*[0-255]*)/.exec("1.255.1.1");
    console.log(ipAddressRegex);
    /*
    [
        0: "1.255.1.1"
        1: "1"
        2: "255"
        3: "1"
        4: "1"
        groups: undefined
        index: 0
        indices:
        [
            0: [0, 9]
            1: [0, 1]
            2: [2, 5]
            3: [6, 7]
            4: [8, 9]
        ]
    ]
    */
```
## Error Cause
This is used when we need to re-throw error by using specific error message.
```Javascript
function causeExample() {
    try {
        throw new Error("trowing Error");
    }
    catch (e){
        throw new Error (e, { cause: "Feature not yet implemented"});
    }
}
try {
    causeExample();
}
catch(e) {
    console.log("Error is:", e);
}
```