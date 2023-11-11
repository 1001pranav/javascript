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

* **Expression and operators** - There are various Expression and operators in JavaScript. Expressions can be considered as 2 types. </br>
    1. Declarations - To delcare and store the data. To declare the varaibles we use `var`, `let` and `const` are used.
    * `Var`  - The main disadvantage of var is if the varible is decared inside the local and global. Then the global variable is replaced with local scope, viceversa. Consider following example.
       
    ```Javascript
      var mutateExample = "Hello, From outer Scope.";
      console.log("current value of mutateExample before executing inner scope: ", mutateExample);  //Output: current value of mutateExample: Hello, From outer Scope.
      if (true) {
        var mutateExample = "Hello, From inner Scope";
        console.log("current value of mutateExample executing inner scope:", mutateExample); // Output: current value of mutateExample executing inner scope: Hello, From inner Scope.
      }
      console.log("current value of mutateExample after exeuting inner scope:", mutateExample); // Output: current value of mutateExample after executing inner scope: Hello, From inner Scope.
    ```
    
    - One more disadvantage is if we try to access variable before decalaration that will give undefined instead of throwing error. Consider following example.
    ```Javascript
      console.log("Before defining -, undefinedExample);   //Output: "Before defining - undefined".
      var undefinedExample = "Not throwing error";
      console.log("After defining - "undefinedExample); //Output: "After defining - Not throwing error"
    ```
  * `let` - This alows to declare varaibles inside of local scope without effecting the global scope.
      ```Javascript
      let a = 10;
      console.log("Value of 'a' before local scope (Global scope) execution", a); //Output: Value of 'a' before local scope (Global scope) execution 10
      {
        let a = 20;
        console.log("Value of 'a' inside local scope" ,a); //Output: Value of 'a' inside local scope 20
      }
      console.log("Value of 'a' outside local scope", a); //Output: Value of 'a' outside local scope 10
      ```
      - Javascript Will throw ReferenceError if variable is accessed before the declaration of the variable.
      ```javascript
      console.log(accessingVariable); //Uncaught ReferenceError: accessingVariable is not defined
      let accessVariable = 10;
      ```
   * `const` - once the variable is assigned it cant be changed. Data needs to be assigned on declaration.
       ```javascript
       const constantVariable = 10;
       constantVariable = 20; //Uncaught TypeError: Assignment to constant variable.
       ```
      - There is one cache, with respect to objects, maps, symbols and arrays. In all these data can be manuplated. For ex we can add, delete or update the variable in those. Only thing is we can't reassign the variable.
        ```javascript
        const array = [];
        array.push(1);
        console.log(array);//Output: [1]
        array = [] //Uncaught TypeError: Assignment to constant variable
        
        ```
    2. Assignmemnt - This type of operators assign values to the variables or change the values of the variable. </br>
    eg:
    ```javascript
      let assignmentEg = 5;
      assignmentEg = 10; // Here value of a changes
    ```

    3. Evaluate - In this type the various operators are used for evaluate the expression.
    ```JavaScript
      const number1 = 5, number2 = 10;
      const sum = number1 + number2; //Evaluvating the expression and assigning the value
      console.log(sum); //15 -> is the output
    ```
* **Operators - Arithmatic operators** ->  The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/)
  * Addition. To add one or more num (+) sign is used.
    ```JavaScript
      const num1 = 5, num2 = 7;
    
      let sum = num1 + num2;
      console.log(sum);     // 12
      sum += num1;
      console.log(sum);    //17
    ```
    There are few execptions for (+) operator. 
    ```Javascript
    console.log(5 + 5);    //Output: 10; Here we are adding 2 number.
    
    console.log('5' + 5);  //Output: '55'; Here we are concating a number with string resulting a string.
    
    console.log(+ '5' + 5);  //Output: 10; (+) sign before a string will try to convert a string to a number,
                            // If any character is present then the resulting value will be NaN.
    
    console.log('5' + + 5);  // Output: '55';
                            // As 2nd 5 is a number there is no difference so the resulting value will be string.
    
    console.log([1,2,3,4] + [5,6,7,8,'a']) // Output: '1,2,3,4,5,6,7,8,a'; It will concat string
    ```

  * Subtraction - To subract one or more number (-) is used. If a non number is used like character then NaN will be the output.
    ```JavaScript
     const num1 = 5, num2 = 7;
     let sub = num2 - num1;   // 2
     sub -= num1;            // -3
     let strNum1 = '5', strNum2 = '15';
     console.log(strNum2 - strNum2); // output: 10; String will be directly converted to number here.
     console.log('a' - 5 ); 
    ```
  * Multiplication - To multiply one or more number (*) is used to multiply numbers. 
