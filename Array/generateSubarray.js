// const arr = [1,2,3];

// function generateSubArray (arr){
    
//     let globalArray = []
//     for(let i=0; i<arr.length; i++){
//         let j =0;
//         let localArray = arr.slice(i,j);
//         globalArray.push(localArray);
//         j++;
//     }
//     return globalArray;
// }

// console.log(generateSubArray(arr))

let string = "ahbbabababcdeabc";
let shortString = "abc";

function searchString (str1,str2){
    for(let i=0; i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i] === str2[j]){
                return
            }
        }
    }
}


