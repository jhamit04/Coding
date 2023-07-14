// const array = [2,3,0,6,8,0,9,0,0,9,8,7,6];

// function moveZeroToEnd (arr){
//     let temp = []
//     for(let i=0; i<arr.length; i++){
//         if(array[i] !== 0){
//             temp.push(arr[i]);
//         }
//     }
//     for(let i=0; i<temp.length; i++){
//         arr[i] = temp[i];
//     }
//     for(let i=8; i<array.length; i++){
//         arr[i] = 0;
//     }
//     return arr;
// }

// console.log(moveZeroToEnd(array))

//brootForce solution with time complexity o(2n);

const array1 = [2,3,0,6,8,0,9,0,0,9,8,7,6];

function moveZeroToEnd (arr){
    let j = -1
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0){
           j =i;
           break; 
        }
    }
    for(let i=j+1; i<arr.length; i++){
        if(arr[i]!==0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            j++;
        }
    }
    return arr;
}
console.log(moveZeroToEnd(array1));

//optimal solution with time complexity o(n)