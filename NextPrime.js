let n=12;

function Prime(n){
    if(n<=1){
        return false
    }

    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
       
    }
    return true
 
}


let checkprime=Prime(n);

function NextPrime(n){
    let nextNum=n+1;
    while(!Prime(nextNum)){
        nextNum++;
    }

    return nextNum;
}

let nextPrime=NextPrime(n);
console.log(nextPrime)

//first n prime nos

function PrimeList(n){
    let primenolist=[];
    let currentnum=2;
    while(primenolist.length<n){
        if(Prime(currentnum)){
            primenolist.push(currentnum);

            
        }
        currentnum++;
    }
    return primenolist;
}

let list=PrimeList(n);
console.log(list)