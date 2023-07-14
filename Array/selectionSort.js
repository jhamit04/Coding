const arr = [2,54,92,45,3,43,22,34,11,56,78]

function selectionSort (arr){
    for(let i=0; i<=arr.length-2; i++){
        for(let j=i; j<arr.length-1; j++){
            let temp;
            if(arr[i]>arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort(arr))