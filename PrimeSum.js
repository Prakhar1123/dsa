let data=34;
let test=[];
function isPrime(data){
    // let num=1;
    for(let num=2;num<=data;num++){
        let isPrime=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            test.push(num)
        }

    }
    return test;
}

let check=isPrime(data);

let finalres=[];
function checkprimesum(check){
    for(let i=0;i<check.length;i++){
        for(let j=i+1;j<check.length;j++){
            if(check[i]+check[j]===data){
                finalres.push(check[i],check[j])

            }
        }
    }
    return finalres
}

let datacheck=checkprimesum(check);
console.log(datacheck)