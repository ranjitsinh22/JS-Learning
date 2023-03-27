console.log(`=========Sorting Array Assignment A==========`);
console.log(`*****The Given Array is: [113,45,56,11,32,45,109,799,56,45]*****`);

const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`----Step 1----`);
let reverseArray=arrayRollNumbers.reverse();
console.log(`Reversing given array: ${reverseArray}`);

console.log(`---Step 2----`);
let sortArray= arrayRollNumbers.sort();
console.log(`Sorting Array using sort(): ${sortArray}`);

console.log(`---Step 3----`);
let sortArrayAccending=arrayRollNumbers.sort((a,b)=>a>b?1:-1);
console.log(`Sorting Array in Ascending order: ${sortArrayAccending}`);

console.log(`---Step 4----`);
let Num=arrayRollNumbers.sort((a,b )=> b- a);
let greatestNum=arrayRollNumbers[0]
console.log(`The Greatest number in given array is : ${greatestNum}`);

console.log(`---Step 5----`);
let Number=arrayRollNumbers.sort((a,b )=> a-b);
let smallestNumber=arrayRollNumbers[0]
console.log(`The Smallest number in given array is : ${smallestNumber}`);

console.log(`---Step 6----`);
let removeDuplicate=[...new Set (arrayRollNumbers)]
console.log(`Remove Duplicate element fron Array :${removeDuplicate}`); 

