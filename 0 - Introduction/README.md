# Basic information.
JavaScript is a scripting or programming language that allows you to implement complex features on web pages.
JavaScript is a **multi-paradigm**, **dynamic language** with **types** and **operators**, **standard built-in objects**, and **methods**.

## **Multi-Paradigm** -
Paradigm means one perticular model. For eg: (Imperative and Declarative). In multi-paradigm Model it follows more than one Programming paradigm such as object-oriented, functional, imperative, or declarative.
  Javascript supports following Paradigm.
  1. **Imperative programming Paradigm** - In simple language imperative programming language means that "How The code should run" Like what steps it need to perform.
  2. **Declarative Programming Paradigm** - In Simple language Declarative programming language means tha "What the code should do" .
  3. **Object oriented Programming paradigm** - This is an approach where the solution is designed around communication between the Objects or Classes, which hold the data and the methods to act upon that data.

## Dynamic Language -
In Dynamic Programming language at runtime various programming behavior are executed Like type of data etc. Where as in Static programming language it is decided during compile time.

## Types -
Javascript has various data types, Most of the data types are dynamically added during run time. However we can explicitly converted using various methods of perticular type,
  below are the types.
  1. **Number** - Every integer value other than bigInt (both Float and integer value) Maximum value for number type is `9007199254740991` Which can be identified from `Number.MAX_SAFE_INTEGER`
    ```
      Note. Adding 0 to beginning of the number will convert the number to Octal.
      Similarly 0x10 will convert the number to hex.
      If you check type of both then you will only get number.
    ```
    ```Javascript
      let octal = 010;
      let hex = 0x10;
      let binary = 0b10;
      let decimal = 110;
      console.log({octal, hex, binary, decimal}); // Output: {octal: 8, hex: 16, binary: 2, decimal: 110}
      console.log(typeof octal, typeof hex, typeof binary, typeof decimal); // Output: number, number, number, number
    ```
  2. **Bigint** - Number which exceeds the number data types are termed as bigint.
  3. **String** - Used for storing text types.
  4. **Boolean** - Used for storing true and false.
  5. **Symbol** - Main Aim is to create unique identifiers.
  6. **undefined** - Indicating that variable not defined.
  7. **null** - Indicates deliberate no-values.
  8. **function** - All the functions and classes are termed as function.
  9. **Objects** - Other than above data types all the rest are considered as object. Function, Array, Date, RegExp, Error, Map, Set.
