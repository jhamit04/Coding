const array = [5,66,4,6,4,8,6,3,7,67,5];

function secondSmallest (arr){
    let smallest = arr[0];
    let secondSmallest = Infinity;
    for(let i=0; i<arr.length; i++){
        if (arr[i]<smallest){
            smallest = arr[i];
            secondSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i]!==smallest && arr[i]< secondSmallest){
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}
console.log(secondSmallest(array));