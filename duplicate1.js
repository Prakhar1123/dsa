let data=[1,2,3,0,4,5,1];
let isDuplicate=false;
let temp=[];
let tempIndex=0;
function duplicatecheck(data){

    for(let i=0;i<data.length;i++){
        let isUnique=true;
        for(let j=0;j<temp.length;j++){
            if(data[i]===temp[j]){
                isUnique=false;
                

                
            }
        }
        if(isUnique){
            temp[tempIndex]=data[i];
            tempIndex++;
        }
        }
        return temp

}

let test=duplicatecheck(data);
console.log(test)