let arr=[0, -1, 2, -3, 1]

let x=130;

 function CheckPair(arr,x){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===x){
            return true;
        }
    }

  }
  return false


  }

  let test=CheckPair(arr,x);
  console.log(test)