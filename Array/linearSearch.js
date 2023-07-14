const array = [2,3,4,5,6,7];

function findIndex (arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return i;
        }else{
            return -1;
        }
    }
}
console.log(findIndex(array,10))