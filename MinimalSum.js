let target = 7;
let nums = [2, 3, 1, 2, 4, 3];

var minSubArrayLen=function (nums,target){
   let sum=0;
   let data=[];
   let result=[];
   let minlength=Infinity;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            sum=nums[i]+nums[j];
            
            if(sum===target){
                data=[nums[i],nums[j]]
                let pairlength=j-i;
                if(pairlength<minlength){
                    minlength=pairlength
                    result=data.slice()
                }

            }
        }
    }
    return result.length;
}

let data =minSubArrayLen(nums,target);
console.log(data);