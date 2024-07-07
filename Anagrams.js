let str1="hello";
let str2="ollhe"

function Anagram(str){
    let temp=""
    let arr=str.split("")
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
             
        }
    }
    return arr.join("");
}

let data1=Anagram(str1);
console.log(data1)
let data2=Anagram(str2);
console.log(data2)
if(data1===data2){
    console.log("Anagram strings")
}
else{
    console.log("Non Anagrams")
}