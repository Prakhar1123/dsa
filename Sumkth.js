let arr = [20, 8, 22, 4, 12, 10, 14];
let  k1 = 3;
let k2 = 6 ;


function Sort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    }
    return arr;
}
let dataval=Sort(arr)
// console.log("data",dataval)
function Sumkth(arr,k1,k2){

    let data=Sort(arr)
    // console.log("sorted arr",data)
    

    let sum=0
    for(let i=k1;i<k2;i++){
        sum+=arr[i];

    }
    return sum;
}

let data=Sumkth(dataval,k1,k2);
console.log("kth to kth",data)
