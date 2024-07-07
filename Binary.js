let arr=[1,2,13,15];

let mid=0;
let start=0;
let find=13;
let end=arr.length-1;
let pos=undefined;
function Binary(arr,start,end,find){

    while(start<=end){
        mid=Math.floor((start+end)/2);
        if(arr[mid]===find){
            return mid;
        }
        else if(arr[mid]>find){
            end=mid-1

        }
        else{
            start=mid+1
        }
    



    }

   


}
let test=Binary(arr,start,end,find)

console.log(test)