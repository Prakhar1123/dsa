const bigInt = require('big-integer');

function BigFact(num) {
    let result = bigInt(1);
    for (let i = 2; i <= num; i++) {
        result = result.multiply(i);
    }
    return result;
}

let num = 1238349; // Adjust as needed
let data = BigFact(num);
console.log(data.toString()); // Use .toString() to convert bigInt to string for display
