let num=6;
let check1=[]
function Perfect(num){

    for(let i=1;i<num;i++){
        if(num%i==0){
            check1.push(i)
        }


    }
    return check1;
}

let tst=Perfect(num);
let sum=0;
function isPerfect(tst){
for(let i=0;i<tst.length;i++){

    sum=sum+tst[i]
}

return sum===num
}
let data=isPerfect(tst);
console.log([...tst,data])