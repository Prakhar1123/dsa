function Happy(number) {
    let seen = [];
    let sum = number;

    while (sum !== 1 && !seen.includes(sum)) {
        seen.push(sum);
        let digits = sum.toString().split('').map(Number);
        sum = 0;

        if (digits.length === 1) {
            if (digits[0] === 1) {
                return true; // If the number is 1, it is a happy number
            } else {
                return false; // Any other single-digit number is not a happy number
            }
        }

        for (let i = 0; i < digits.length; i++) {
            sum += digits[i] * digits[i];
        }

        number = sum; // Update number to the new sum for the next iteration
    }

    return sum === 1;
}

let number = 19;
let check = Happy(number);
console.log(check); // Output: true

// Output: false
