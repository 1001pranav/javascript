const isPrime = (number = 0) => {
    if (number === 2 || number === 3) {
        return true;
    }

    if (
        number <= 1 ||
        number % 2 === 0 ||
        number % 3 === 0
    ) {
        return false;
    }

    for ( let index = 5; index < Math.sqrt(number); index += 6) {
        if (number % index === 0 || number % (index + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(7));
console.log(isPrime(17));
console.log(isPrime(97));

