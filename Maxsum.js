let arr=[1,2,3,4,0,5,-4,8,-4,-3,-2,-1,-43]
let maxsum=-Infinity;
let sum=0;
function MaxSum(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(maxsum<sum){
            maxsum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxsum;

}

let data=MaxSum(arr);
console.log(data)