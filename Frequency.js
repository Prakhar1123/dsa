let arr=[1,2,1,2,3,2,4,6,7];
let count={}
function Frequency(arr){
    for(let i=0;i<arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]++
        }
        else{
            count[arr[i]]=1
        }
        
}
return count;
}

let data=Frequency(arr);
console.log(data)