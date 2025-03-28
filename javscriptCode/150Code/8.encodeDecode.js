/*
8. Encode and Decode Strings

📌 Problem: Convert a list of words into a single string and be able to decode it back.
📝 Example:
🔹 Input: ["hello", "world"]
🔹 Encoded: "5#hello5#world"
🔹 Decoded: ["hello", "world"]
*/


const stringEncoded = '$'
function encodeString(strArr = []) {
    try {
        let encodedString = '';
        for (const str of strArr) {
            encodedString += stringEncoded + str.length + str;
        }
        return encodedString
    } catch (error) {
        console.log(error);
    }
}

function decodedString(str) {
    try {
        let decodedString = [];
        let i = 0;
        while (i < str.length) {
            if (str[i] === stringEncoded) { 
                let length = parseInt(str[i + 1]);
                decodedString.push(str.slice(i + 2, i + 2 + length));
                i += length + 2;
            }
        }
        return decodedString
    } catch (error) {
        console.log(error);
    }
}

const encodedString = encodeString(['a', 'b', 'c', 'd']);
console.log(encodedString);

console.log(decodedString(encodedString));