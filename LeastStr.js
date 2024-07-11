//least possible value in string

let str="hello world";

function least(str){

   str=str.split('')
//    console.log(str)
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]>str[j]){
            let temp=str[i];
            str[i]=str[j];
            str[j]=temp;
        }
    }
    }

    let sortedstring=str
    return sortedstring[0]
}

let data=least(str);
console.log("least",data)