const array = [5,66,4,6,4,8,6,3,7,67,5];

function secondLargestNo (arr){
    let largest = arr[0];
    let secondLargest = -1; //for positive integer
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }    
    }
    for(let i=0; i<arr.length; i++){
         if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
         }
    }

    return secondLargest;
}
console.log(secondLargestNo(array));

//this is better solution with time complexity  o(n)+o(n) i.e o(2n);




function secondLargest (arr) {
    let largest = arr[0];
    let secondLargest = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]; 
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest(array));

//This is most optimized solution with time complexity o(n)

