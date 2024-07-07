def Move(arr):
    count=0
    nonzeroindex=0
    for i in range(len(arr)):
        if arr[i]!=0:
            arr[nonzeroindex]=arr[i]
            nonzeroindex+=1
    for i in range(nonzeroindex,len(arr)):
        arr[i]=0
    return arr    

arr=[0,1,2,3,4,0]
print(Move(arr))