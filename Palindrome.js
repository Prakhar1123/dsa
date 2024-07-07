function isPalindrome(str) {
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]

    }
    return rev
}

let result = isPalindrome(121);
console.log(result); // Output: true
