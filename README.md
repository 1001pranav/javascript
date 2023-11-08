# Javascript
JavaScript is a scripting or programming language that allows you to implement complex features on web pages.
JavaScript is a **multi-paradigm**, **dynamic language** with **types** and **operators**, **standard built-in objects**, and **methods**.

* **Multi-Paradigm** -  Paradigm means one perticular model. For eg: (Imperative and Declarative). In multi-paradigm Model it follows more than one Programming paradigm such as object-oriented, functional, imperative, or declarative.
  Javascript supports following Paradigm.
  1. **Imperative programming Paradigm** - In simple lanaguage imperative programming language means that "How The code should run" Like what steps it need to perform.
  2. **Declarative Programming Paradigm** - In Simple language Declarative programming language means tha "What the code should do" .
  3. **Object oriented Programming paradigm** - This is an approach where the solution is designed around communication between the Objects or Classes, which hold the data and the methods to act upon that data.
* **Dynamic Language** -  In Dynamic Progamming language at runtime various programming behaviour are executed Like type of data etc. Where as in Static programming language it is decided during compile time.
* **Types** - Javascript has various data types, Most of the data types are dynamically added during run time. However we can explicitly converted using various methods of perticular type,
below are the types. 
  1. Number - Every integer value other than bigInt (both Float and integer value) Maximum value for number type is `9007199254740991` Which can be identified from `Number.MAX_SAFE_INTEGER`
  2. Bigint - Number which exceeds the number dataypes are termed as bigint.
  3. String - Used for storing text types.
  4. Boolean - Used for storing true and false.
  5. Symbol - Main Aim is to create unique indentifiers.
  6. undefined - Indecating that variable is undefined.
  7. null - Indecates delibrate no-values.
  8. Objects - Other than above data types all the rest are considerd as object. Function, Array, Date, RegExp, Error, Map, Set

* **Expression and operators** - There are various Expression and operators in JavaScript. Expressions can be considered as 2 types. 
    a) Assignmemnt - This type of operators assign values to the variables or change the values of the variable. </br>
        eg:
```javascript
  let assignmentEg = 5;
  assignmentEg = 10; // Here value of a changes
```

   b) Evaluate - In this type the various operators are used for evaluate the expression.
```JavaScript
  const number1 = 5, number2 = 10;
  const sum = number1 + number2; //Evaluvating the expression and assigning the value
  console.log(sum); //15 -> is the output
```
* **Operators - Arithmatic operators** ->  The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)
  1. Addition. To add one or more num (+) sign is used.
```JavaScript
  const num1 = 5, num2 = 7;

  let sum = num1 + num2; // 12
  sum += num1;          //17
```
There are few execptions for (+) operator. 
```
 5 + 5  = 10           // Here we are adding 2 number.
'5' + 5 -> '55'       // Here we are concating a number with string resulting a string.

+ '5' + 5 -> 10      // (+) sign before a string will try to convert a string to a number,
                    //If any character is present then the resulting value will be NaN.

'5' + + 5 -> '55'  // As 2nd 5 is a number there is no difference so the resulting value will be string. 
```

 2. Subtraction - To subract one or more number (-) is used.
```JavaScript
 const num1 = 5, num2 = 7;
 let sub = num2 - num1;   // 2
 sub -= num1;            // -3
```
