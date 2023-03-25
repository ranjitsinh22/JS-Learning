console.log(`==========Filter Assignment A==========`);

const array=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`----Step 1-----`);
const num = array.filter(element => element > 50);
console.log(`The Number which are greater than 50 are : ${num}`);

console.log(`----Step 2-----`);

const evenNumbers = array.filter(element=> element % 2 === 0);
console.log(`The Even number in given array is: ${evenNumbers}`);

console.log(`----Step 3-----`);

const oddNumbers = array.filter(element => element % 2 !== 0);
console.log(`The Oddnumber in given array is: ${oddNumbers}`);

console.log(`----Step 4-----`);

const multiNumbers = array.filter(element => element % 5== 0);
console.log(`The numbers which are multiple of 5 in given array is: ${multiNumbers}`);

console.log(`----Step 5-----`);

const numbersBetween = array.filter(element => element > 20 && element < 50);
console.log(`The numbers which are between 20 and 50 in given array is : ${numbersBetween}`);