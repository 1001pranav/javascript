const anagram = (first, second) => {
    first = first.toLowerCase();
    first = first.split("").sort().join("");

    second = second.toLowerCase();
    second = second.split("").sort().join("");

    return first === second;
}

console.log(anagram("Mary", "Army"));
console.log(anagram("Tamil", "Telugu"));