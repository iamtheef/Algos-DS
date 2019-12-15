function binarySearch(arr, item){
 let left = 0;
 let right = arr.length-1;
 let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== item && left <= right){
        if (item<arr[middle]){
            right = middle-1; 
        }else{
            left = middle+1;
        }
        middle = Math.floor((left+right)/2);
    }
    
    if(arr[middle] === item){
        return middle;
    }
    return -1;
}



//================ ONE LINER ================//

function binarySearch(arr, item){
 let left = 0;
 let right = arr.length-1;
 let middle = Math.floor((left + right) / 2);
     while (arr[middle] !== item && left <= right){
        if (item<arr[middle])right = middle-1; 
        else left = middle+1;
        middle = Math.floor((left+right)/2);
    }
    return arr[middle] === item ? middle : -1;
}



binarySearch([2,5,6,9,13,15,28,30], 100)
binarySearch([2,5,6,9,13,15,28,30], 7)  
binarySearch([2,5,6,9,13,15,28,30], 22)