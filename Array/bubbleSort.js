const arr = [2,54,92,45,3,43,22,34,11,56,78];

function bubbleSort (arr){
    for(let i= arr.length-1; i>=1; i--){
        for(j=0; j<i; j++){
            let temp;
            if(arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))

