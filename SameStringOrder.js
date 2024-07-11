function containsInOrder(firstString, secondString) {
    let j = 0; // Pointer for secondString

    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] === secondString[j]) {
            j++;
        }
        if (j === secondString.length) {
            return true; // All characters of secondString found in order
        }
    }

    return false; // Not all characters of secondString found in order
}

// Example usage
let firstString1 = "string";
let secondString1 ="sing";

let result1 = containsInOrder(firstString1, secondString1);
console.log(result1); // Output: false

