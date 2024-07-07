function findDuplicates(arr1,arr2,arr3){
    const duplicates=[];
    let length=0;
    for(const num1 of arr1){
        for(const num2 of arr2){
            if(num1===num2){
            for(const num3 of arr3){
                if(num1===num3){
                    duplicates[length]=num1;
                    length++;
                    break;
                }
            }
            }
        }
    }
    return duplicates;
}
let arr1=[1,2,3,4,5];
let arr2=[1,3,4,5,6];
let arr3=[1,2,3,8,7]
let data=findDuplicates(arr1,arr2,arr3);
console.log(data)