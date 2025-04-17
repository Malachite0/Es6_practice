console.log("opdracht 4d")

function combineArrays(...arrays) {
    return [...arrays[0], ...arrays[1]];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = combineArrays(array1, array2);
console.log("Gecombineerde array:", combinedArray);  

const array3 = ['a', 'b', 'c'];
const array4 = ['d', 'e', 'f'];
const combinedArray2 = combineArrays(array3, array4);
console.log("Gecombineerde array:", combinedArray2); 
