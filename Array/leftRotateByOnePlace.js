const array = [2,5,6,7,8,9];

function leftRotate (arr){
    let temp = arr[0]
    for(let i =1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
    return arr;
}
console.log(leftRotate(array));       