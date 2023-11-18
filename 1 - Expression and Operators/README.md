# Expression and operators
## Variables and Declarations
- There are various Expression and operators in JavaScript. Expressions can be considered as 2 types.

  1. Declarations - To declare and store the data. To declare the variables we use `var`, `let` and `const` are used.

  - `Var` - The main disadvantage of var is if the variable is declared inside the local and global. Then the global variable is replaced with local scope, vice-versa. Consider following example.

  ```Javascript
    var mutateExample = "Hello, From outer Scope.";
    console.log("current value of mutateExample before executing inner scope: ", mutateExample);  //Output: current value of mutateExample: Hello, From outer Scope.
    if (true) {
    var mutateExample = "Hello, From inner Scope";
    console.log("current value of mutateExample executing inner scope:", mutateExample); // Output: current value of mutateExample executing inner scope: Hello, From inner Scope.
    }
    console.log("current value of mutateExample after executing inner scope:", mutateExample); // Output: current value of mutateExample after executing inner scope: Hello, From inner Scope.
  ```

  - One more disadvantage is if we try to access variable before declaration that will give undefined instead of throwing error. Consider following example.

  ```Javascript
    console.log("Before defining -", undefinedExample);   //Output: "Before defining - undefined".
    var undefinedExample = "Not throwing error";
    console.log("After defining - "undefinedExample); //Output: "After defining - Not throwing error"
  ```

  - `let` - This allows to declare variables inside of local scope without effecting the global scope.

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
    console.log(accessingVariable) //Uncaught ReferenceError: accessingVariable is not defined
    let accessVariable = 10
  ```

  - `const` - once the variable is assigned it cant be changed. Data needs to be assigned on declaration.
  ```javascript
    const constantVariable = 10
    constantVariable = 20 //Uncaught TypeError: Assignment to constant variable.
  ```
  - There is one cache, with respect to objects, maps, symbols and arrays. In all these data can be manipulated. For ex we can add, delete or update the variable in those. Only thing is we can't reassign the variable.

  ```javascript
    const array = [];
    array.push(1);
    console.log(array); //Output: [1]
    array = []; //Uncaught TypeError: Assignment to constant variable
  ```

  2. Assignment - This type of operators assign values to the variables or change the values of the variable.
  eg:

  ```javascript
    let assignmentEg = 5;
    assignmentEg = 10;    // Here value of a changes
  ```

  3. Evaluate - In this type the various operators are used for evaluate the expression.

  ```JavaScript
    const number1 = 5, number2 = 10;
    const sum = number1 + number2; //Evaluating the expression and assigning the value
    console.log(sum); //15 -> is the output
  ```


## Operators
- **Arithmetic operators** -> The standard arithmetic operators are addition (+), subtraction (-), multiplication (\*), and division (/).

  - Addition. To add one or more num (+) sign is used.

    ```JavaScript
    let num1 = 5, num2 = 7;

    let sum = num1 + num2;
    console.log(sum);     // 12
    sum += num1;
    console.log(sum);    //17

    //Increment operator
    console.log(num1++);  //7
    console.log(++num1); //9
    ```

    There are few exceptions for (+) operator.

    ```Javascript
    console.log(5 + 5);    //Output: 10; Here we are adding 2 number.

    console.log('5' + 5);  //Output: '55'; Here we are concatenation a number with string resulting a string.

    console.log(+ '5' + 5);  //Output: 10; (+) sign before a string will try to convert a string to a number,
                            // If any character is present then the resulting value will be NaN.

    console.log('5' + + 5);  // Output: '55';
                            // As 2nd 5 is a number there is no difference so the resulting value will be string.

    console.log([1,2,3,4] + [5,6,7,8,'a']) // Output: '1,2,3,4,5,6,7,8,a'; It will concatenate string
    ```

  - Subtraction - To subtract one or more number (-) is used. If a non number is used like character then NaN will be the output.

    ```JavaScript
    let num1 = 5, num2 = 7;
    let sub = num2 - num1;   // 2

    sub -= num1;            // -3
    let strNum1 = '5', strNum2 = '15';

    console.log(strNum2 - strNum2); // Output: 10; String will be directly converted to number here.
    console.log('a' - 5 );         // Output: NaN;

    console.log(num1--); // Output: 5; After execution, The number will be reduced by 1.
    console.log(--num1); //Output: 3; Here before execution number will be reduced by 1

    ```

  - Multiplication - To multiply one or more number (\*) is used to multiply numbers.
  ```JavaScript
  let num1 = 5, num2 = 25, mul;

  mul = num1 * num2; //(*) is used to multiply numbers.
  console.log(mul); // Output: 125;

  // To Multiply and assign to one variable we can use (*=) For example.
  mul *= num1
  console.log(mul);// Output: 625;

  //Similar to subtraction if stringified numbers are present then it will be automatically converted to number.
  let strNum ='15';
  console.log(strNum * num1); // Output: 75

  //Similarly if we try to multiply any non number then output will be NaN. Eg.
  let str = 'a';
  console.log(str * strNum); //Output: NaN
  ```

  - Division - To divide any 2 number we use (/) operator. If you divide any number with zero (0) then output will be `Infinity`.

  ```javascript
  let num1 = 10, num2 = 5;
  console.log(num1/num2); // Output: 2;

  console.log(num1/0); // Output: Infinity

  num1 /= num2;
  ```

  - Reminder (Modulus) - To calculate the remainder of any 2 numbers we use (%) operator.

  ```Javascript
  let num1 = 4, num2 = 2

  console.log(num1% num2); // Output: 0;
  ```