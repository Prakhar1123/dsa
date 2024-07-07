let arr=[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
function Jumps(arr){
    let finaljump=0;
    let secondjump=0;
    let count=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let firstjump=arr[i+1];
            count=count+1;
            for(let k=i+2;k<arr.length;k++){
                 secondjump=arr[firstjump];
                 count++;
                 finaljump=arr[secondjump];
                 count++;
            }


        }
    }
    return count;
}

let data=Jumps(arr);
console.log(data)