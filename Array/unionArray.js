// let arr1 = [1,2,3,4,5,4,6];
// let arr2 = [7,4,5,3,6,9,0,8];

// function unionArray (arr1, arr2){
//     let set = new Set;//sc=o(n1+n2)
//     let unionArray = []
//     for(let i=0; i<arr1.length; i++){ //tc=o(n1 log n)
//         set.add(arr1[i]);
//     }
//     for(let i=0; i<arr2.length; i++){//tc = o(n2 log n)
//         set.add(arr2[i])
//     }
//     for(let unique of set){ //tc o(n1+n2), sc o(n1+n2)
//         unionArray.push(unique);
//     }
//     return unionArray;

// }

// console.log(unionArray(arr1,arr2));
//brootForce solution

let arr1 = [1,2,3,4,5,4,6];
let arr2 = [7,4,5,3,6,9,0,8];

function unionArray (arr1, arr2){
    let unionArray = [];
    let i=0;
    let j=0;
    while(arr1.length<0 && arr2.length<0){
        if(arr1[i]<= arr2[j]){
            if(unionArray.length ===0){
                if(unionArray.length===0 || unionArray[i-1]!== unionArray[i]){
                    unionArray.push(arr1[i]);
                }
                i++
            }
        }
    }
}


