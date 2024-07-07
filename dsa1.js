let data=[1,2,3,0,4,2];
let x=9
function TestCheck(data,x){
    for(let i=0;i<data.length;i++){
        for(let j=i+1;j<data.length;j++){
            if(data[i]+data[j]===x){
                return true 
            }
            
        }
         
    }
    return false;
}

let test=TestCheck(data,x);
console.log(test)