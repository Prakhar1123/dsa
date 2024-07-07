function ArrayLeaders(arr){
   let arr1=[];
   let length=0;
    for(let i=0;i<arr.length;i++){
        let isleader=true
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
               isleader=false;
               break;

            }
        }
        if(isleader===true){
            arr1[length]=arr[i];
            length++;
        }

    }
    return arr1;
}

let arr=[1,2,3,4,0,-1]

let data=ArrayLeaders(arr);
console.log(data)