let arr = [198, 76, 544, 123, 154, 675];
// console.log(arr)
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

arr=Sort(arr);


function MinProduct(arr,k=2){
    let result=1;
    
    for(let i=0;i<k;i++){
        console.log(arr[i])
        result=result*arr[i]

    }
    return result;
}

let minproducts=MinProduct(arr);
console.log("Minproduct",minproducts)