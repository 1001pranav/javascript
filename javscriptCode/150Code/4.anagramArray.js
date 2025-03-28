/*
4. Group Anagrams

📌 Problem: Group words together if they are anagrams (same letters, different order).
📝 Example:
🔹 Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
🔹 Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
*/

function returnArrayAnagram(str) {
    return str.split("").sort().join("");
}

function anagramArray(arr) {
    let map = new Map();
    console.time("Anagram Array");
    for (let i = 0; i < arr.length; i++) {
        console.time(`anagram ${i}`)
        let key = returnArrayAnagram(arr[i]);
        console.timeEnd(`anagram ${i}`)
        console.time(`Anagram map ${i}`);
        if (map.has(key)) {
            map.set(key, [...map.get(key), arr[i]]);
        } else {
            map.set(key, [arr[i]]);
        }
        console.timeEnd(`Anagram map ${i}`);

    }
    console.timeEnd("Anagram Array");
    console.time("Anagram Array Values");
    const result = Array.from(map.values());
    console.timeEnd("Anagram Array Values");
    return result

}

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagramArray(arr));
//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]