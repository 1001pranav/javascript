//single line comment
/* multiline comment
is used like this*/
var newVariable ; // used to create a new variable
const a = 10; // assigining the value to new variable
let bool = true;
let b = 10; //another way of assigining variable
let thisIsCammelCase = "most Used variable method"; // storing string and usage of cammel case
const d = 10.012; // decimal variable
let add, mul, div, sub, rem; // various operations on interger or decimal variable

add = 10 + 20
mul = 25 * 10
div = 30 / 25
sub = 36 - 25
rem = 45 % 10
add += 10; mul *= 15; div /= 30 ; sub -= 1;

console.log({ add, mul, div, sub});

let str=" This is used to show escape char \"s where '\\' is used to escape char and we can use '' instead ";

// javascript array
const js = ["this is an array","can store the array",10,20];// array can store both string and integer at once

js.push(10)//to push a variable or array at the end

console.log(js)
console.log(js.pop()) //to remove last element in array
console.log(js.shift())//to remove the first element

js.unshift(["hello","hi"])//to add element or array at begining'

console.log(js[1]);//to access array

/*if else and different operations like
 * ==
 * ===
 * !=
 * !==
 * <=
 * <
 * >
 * >=
 * logical and ,logical or
 * */

export function test(a) { // function keyword used to create a new function with parm takes a variable
    if (a <= 10) {
        return "a is less than or equal to 10";
    }
    else if (a > 10 && a <= 20) {
        return " a is in btween 11 and 20"
    }// usage else if and logical and
    else if (a <25 || a <= 30) {
        return "number"
    }//logical or

    else if (a === 100) {
        return "number is strictly equal to 100"
    }
    else if (a == 100) {
        return "number is equal to 100"
    }
    else if (a != 101) {
        return "number is not equal to 101"
    }
    else if (a !== 101) {
        return "number is strictly not equal to 101"
    }
    return a < 20; //returns true or false based on condition

}

console.log("checking for \"100\"",test("100"))
console.log('checking for 100',test(100))
console.log('checking for !="101"',test("101"))
console.log('checking for !==101',test(101))
console.log(test(10))


function week(day) {
    day = day.toLowerCase();// makes strings to lower case
    switch (day) {
        case "monday": return "its a first day of the week !! Enjoy the day";
        //break is needed if return statement is not present
        case "tuesday": return " 2nd day please bare few more days ";
        case "wednesday": return "3rd day oof!! 3 more days to go";
        case "thursday": return "4th day come on only 2 days ";
        case "friday": return "5th day congratulations you have survived 5 days only one day is remaining"
        case "saturday": return "Ohh god thanks only one day remaining"
        case "sunday": return "get ready monday is coming !!!!"
        default: return "HEYY CAN You please enter a correct day. I have only 7 day a week "
    }
}


console.log("Switch using Monday",week("Monday"))
console.log("Switch for default value",week("xyyz"))

let num = " 7,  14,  21,  28,  35,  42,  49,  56,  63,  70,  77,   84,  91,  98, 105, 112, 119, 126, 133, 140, 147, 154,  161, 168, 175, 182, 189, 196, 203, 210, 217, 224, 231,  238, 245, 252, 259, 266, 273, 280, 287, 294, 301, 308,  315, 322, 329, 336, 343, 350, 357, 364, 371, 378, 385,392, 399, 406, 413, 420, 427, 434, 441, 448, 455, 462,469, 476, 483, 490, 497, 504, 511, 518"


let reNum = num.replace(/\,/g,"+")

console.log(reNum.replace(/\s/g,""));
