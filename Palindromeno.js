let num=121;

function isPalindrome(num){
     let originalnum=num;

     let rev=0;

     if(num<0){
        return false;
     }
     while(num>0){
        let digit=num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10);
     }

     return originalnum===rev
}

let data=isPalindrome(num);
console.log(data)