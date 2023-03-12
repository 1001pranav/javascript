const string="My Dog is Good dog filled with gooodness and very goooood 0011122 !"
const expression=/bad/
console.log(expression.test(string))
const usingOrIgnore=/bad|good/i   //i reffers to ignore case
console.log(usingOrIgnore.test(string))
console.log("to extract pattern from string we use string.match(expression)",string.match(usingOrIgnore))
console.log("to find a pattern which occured more than once we use /g",string.match(/dog/gi))
console.log("to find pattern between range",string.match(/[i-o]/gi));
console.log("to find pattern which contains go we use go.",string.match(/go./gi));
console.log("to find pattern Which is not in range",string.match(/[^i-o ]/gi));
console.log("to find pattern strating from my",string.match(/^my/i));
console.log("to find pattern ending with from s",string.match(/!$/));
console.log("to match all letters and numbers",string.match(/\w/g));
console.log("to match except letters and numbers",string.match(/\W/g));
console.log("to match all  numbers",string.match(/\d/g));
console.log("to match except numbers ",string.match(/\D/g));
console.log("to match except whitespace ",string.match(/\S/g));
console.log("to match all whitespace ",string.match(/\s/g));
console.log("to match exact numbers of characters match ",string.match(/go{2}d/g));
console.log("to match number of range of characters",string.match(/go{1,3}d/g))
console.log("to match minimum number of characters",string.match(/go{1,}d/g))
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log("color match",rainbowRegex.test(american));
console.log("colour match",rainbowRegex.test(british));
