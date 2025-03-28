/*
10. Valid Palindrome

📌 Problem: Check if a given string is a palindrome (reads the same forward and backward) while ignoring non-alphanumeric characters and case.

📝 Example:
🔹 Input: "A man, a plan, a canal: Panama"
🔹 Encoded: 'amanaplanacanalpanama"
🔹 Output: true (Ignoring spaces and punctuation, it reads the same)

🔹 Input: "race a car"
🔹 Encoded: 'raceacar'
🔹 Output: false (Doesn’t read the same backward)

*/

function removeNonAlphaNumeric(str) {
    return str.replace(/[^a-z]/gi, '').toLowerCase();
}
    
function isPalindrome(str) {
    const encodedStr = removeNonAlphaNumeric(str);
    console.log(encodedStr.length);
    
    console.log(encodedStr);
    
    for (let index = 0; index < encodedStr.length / 2; index++) {
        if (encodedStr[index] !== encodedStr[encodedStr.length - 1 - index]) {
            return false
        }
    }
    return true
}


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("malayalam"));
