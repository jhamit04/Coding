let array = [5,7,9,4,2,9,7,1,6,9,8,5];

function rotateArray (arr, d){
    let temp = [5,7,9];
    d = arr.length%d;
    for(let i=d; i<arr.length; i++){
        arr[i-d] = arr[i];
    }
    let j = 0;
    for(let i= arr.length - d; i<arr.length; i++){
        arr[i] = temp[j];
        j++;
    }
    return arr;
}

console.log(rotateArray(array, 10));

//this is brookForce solution with time complexity is o(2n).


