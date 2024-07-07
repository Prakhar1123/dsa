let str="apple banana cHerry orange mango";
str=str.toLowerCase();

function StringVowel(str){
    let stringdata=str.split(" ")
    for(let i=0;i<stringdata.length;i++){
        for(let j=i+1;j<stringdata.length;j++){
            if(stringdata[i]>stringdata[j]) {
                let temp=stringdata[i];
                stringdata[i]=stringdata[j];
                stringdata[j]=temp;
            }
        }
    }
    return stringdata
}

let test=StringVowel(str);
console.log("test",test)
let val=[]
function checkvowel(test){
    for(let i=0;i<test.length;i++){
        let firstchar=test[i].toLowerCase().charAt(0)
        if(firstchar=="a"||firstchar=="e"||firstchar=="i"||firstchar=="o"||firstchar=="u"){
            val.push(test[i])
        }


        }
    
    return val
}

let testing=checkvowel(test)
console.log("vowel",testing)