def Maxmin(arr):
    max_element,min_element=arr[0],arr[0]
    for num in arr[1:]:
        if num>max_element:
            max_element=num
        if num<min_element:
            min_element=num

    return max_element,min_element

arr=[1,2,3,4,5,6]
print(Maxmin(arr))        
