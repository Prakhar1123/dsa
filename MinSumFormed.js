let arr=[6,8,4,5,9,0];

function MinSum(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            }
        }
    }
    let num1=0 ,num2=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            num1=num1*10+arr[i]

        }
        else{
            num2=num2*10+arr[i]
        }
    }
    return num1+num2
}

let data=MinSum(arr);
console.log(data)