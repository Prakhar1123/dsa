let arr=[1,2,3,1,4,5,6];
let data={}
function DuplicateElement(arr){
  
    let count=0;
    let result1=[];
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<result1.length;j++){
            if(result1[j]===arr[i]){
                isDuplicate=true;
                break
            }
        }
        if(!isDuplicate){
            //  if(data[arr[i]]){
            //     data[arr[i]]++;
            //  }
            //  else{
            //     data[arr[i]]=1
            //  }
            result1.push(arr[i])
            
        }
        
    }
    return result1;

}

let duplicate=DuplicateElement(arr);
console.log(duplicate)

