const array = [1,1,2,2,2,3,3,3,4,4,5,6,2,4,4];

function removeDuplicate (arr){
    let i=0
    for(let j=0; j<arr.length; j++){
        if(arr[i]!== arr[j]){
            arr[i+1] = arr[j];
            i++;
        }
    }
    return arr;
}
console.log(removeDuplicate(array))