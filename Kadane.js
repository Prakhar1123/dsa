//max sum of sub array

let arr=[-2,-3,4,-1,-2,1,5,-3];

let maxsofar=arr[0];
let maxendinghere=arr[0]
function MaxSum(arr){
    let sum=0;
    for(let i=1;i<arr.length;i++){
         if(maxendinghere+arr[i]>arr[i]){
             maxendinghere=maxendinghere+arr[i];
         }
         else{
            maxendinghere=arr[i];
         }

         if(maxendinghere>maxsofar){ 
            maxsofar=maxendinghere 
         }


}
return maxsofar;

}

let max=MaxSum(arr);
console.log(max)