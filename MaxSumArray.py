def MaxSum(arr):
    if not arr:
        return 0
    max_sum=arr[0]
    current_sum=arr[0]

    for num in arr[1:]:
        if current_sum<0:
            current_sum=num
        else:
            current_sum+=num    

        if current_sum>max_sum:
            max_sum=current_sum

        
    return max_sum
    

arr=[1,2,3,4,-1,7,-3]
print(MaxSum(arr))    
                    


  