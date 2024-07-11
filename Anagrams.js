let str1="silent";
let str2="ildften"

function Sort(str){
    let data=str
    for(let i=0;i<data.length;i++){
        for(let j=i+1;j<data.length;j++){
            if(data[i]>data[j]){
                let temp=data[i];
                data[i]=data[j];
                data[j]=temp;
            }
        }
    }
    return data
}

let datas=Sort(str1);
console.log("dt",datas)
let data1=Sort(str2);
if(data===data1){
   console.log("Both string are anagrams");
}
else{
    console.log("Both string are not anagrmas")
}
