const array = [5,66,4,6,4,8,6,3,7,67,5];

function largestNo (arr) {
    let largest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNo(array))

//we can start looping from index 1 because we already let arr[0] is largest.
//this is most optimized solution with time complex o(n).