//const array = [1, 2, 3,4,5,6, 2, 5, 7,8, 2, 4, 6];
const array = [5, 4, 3, 2, 1]
function increasingSubArray (arr){
    let length= 0;
    let maxLength = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            length++
        }else{
            if(maxLength<length){
                maxLength=length;
            }
            length =0;

        } 
    }
    return maxLength;
}
console.log(increasingSubArray(array))