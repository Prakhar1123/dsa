//longest substring without repeating characters

function LongestSubstr(str){
    
    let res=[];
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            if(str[i]!==str[j]){
               res.push(str[i])
            }
        }
    }
    return res;
}

let str="Hello"

let data=LongestSubstr(str);
console.log(data)