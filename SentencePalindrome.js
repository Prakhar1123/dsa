let sentence ="Too hot to hooT"
let sentencewithoutspace=""
for(let i=0;i<sentence.length;i++){
    if(sentence[i]!==" "){
         sentencewithoutspace=sentencewithoutspace+sentence[i]

    }
}

sentence=sentencewithoutspace
console.log(sentence)
function SentencePalindrome(str){
   let rev="";
   for(let i=str.length-1;i>=0;i--){
       rev=rev+str[i]
   }

   return rev===sentence;
}

console.log("sentence rev",SentencePalindrome(sentence))