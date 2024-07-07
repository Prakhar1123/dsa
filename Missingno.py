def Missing(arr):
    n=len(arr)+1;
    totalsum=(n*(n+1))/2;
    sum=0
    
    if 0 not in arr:
        return 0
    for data in arr:
        sum=sum+data


    return totalsum-sum;

arr=[0,1,2,3,4,6]
print(Missing(arr))    