let data=121;
let originalno=data

function Palindrome(data){
   let rev=0;
    while(data>0){
        let n=data%10;  //intial=1
         rev=rev*10+n;  //inital=120+1
        data=Math.floor(data/10) ; //data=1
    }
    return rev==originalno;
}

let check=Palindrome(data);
console.log(check)

function NextPalindrome(data){
    let nextNum=data+1;  //9
    while(!Palindrome(nextNum)){
        nextNum++;  //10
    }
    return nextNum;


}



