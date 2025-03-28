
/*
2. Valid Anagram

📌 Problem: Two words are anagrams if you can rearrange the letters of one word to make the other.
📝 Example:
🔹 "listen" and "silent" are anagrams because they have the same letters.
🔹 "cat" and "bat" are NOT anagrams because they have different letters.
*/

const anagram = (first, second) => {
    first = first.toLowerCase();
    first = first.split("").sort().join("");

    second = second.toLowerCase();
    second = second.split("").sort().join("");

    return first === second;
}

// console.time('stringMethods_1')
// console.log(anagram("Mary", "Army"));
// console.timeEnd('stringMethods_1')
// console.time('stringMethods_2')
// console.log(anagram("Tamil", "Telugu"));
// console.timeEnd('stringMethods_2')


function anagramUsingMap(s = "", t = "") {
    if (s.length != t.length) {
        console.log("");
        
        return false
    }

    const mapValue = new Map();

    for (const charIndex in s) {
        const char = s[charIndex].toLocaleLowerCase();
        const charT = t[charIndex].toLocaleLowerCase();
        if (mapValue.has(char)) {
            mapValue.set(char, mapValue.get(char) + 1)
        } else {
            mapValue.set(char, 1)
        }

        if (mapValue.has(charT)) {
            mapValue.set(charT, mapValue.get(charT) - 1)
        }
        else {
            mapValue.set(charT, -1)
        }
    }
    
    for (const mapKeyValue of mapValue) {
        
        if (mapKeyValue[1] !== 0) {
            return false
        }
    }
    return true;
}
console.time('map_1');
console.log(anagramUsingMap("Mary", "Army"));
console.timeEnd('map_1')
console.time('map_2');
console.log(anagramUsingMap("Tamil", "Telug"));
console.timeEnd('map_2');
