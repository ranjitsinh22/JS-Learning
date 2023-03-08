console.log(`===========Array Assignment B============`);
console.log(`The Given Array is : arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];`);
console.log(``);

const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`Q.1) Find the total element available or length `);
arrayNumbers.length;
console.log(arrayNumbers);

console.log(``);

console.log(`Q.2) Find the first element and last element in arrayNumbers`);
const firstElement=arrayNumbers[0];
const lastElement=arrayNumbers[10];
console.log(`The first element is : ${firstElement}`);
console.log(`The last element is : ${lastElement}`);


console.log(``);

console.log(`Q.3) Log the thirst last element using length property `);

const length=arrayNumbers[arrayNumbers.length-3];
console.log(`The Thirst last element by length is: ${length}`);

console.log(``);

console.log(`Q.4) Find all Even numbers `);
let index=0;
const evenNumber=[];

while (index<arrayNumbers.length) {
    if (arrayNumbers[index]%2==0) {
        evenNumber.push(arrayNumbers[index]);
    }
    index++;
}
console.log(`The Even number is : ${evenNumber}`);

console.log(``);

console.log(`Q.5) Find all Odd numbers `);
let oddIndex=0;
const oddNumber=[];

while (oddIndex<arrayNumbers.length) {
    if (arrayNumbers[oddIndex]%2!=0) {
        oddNumber.push(arrayNumbers[oddIndex]);
    }
    oddIndex++;
}
console.log(`The Odd number is : ${oddNumber}`);

console.log(``);

console.log(`Q.6) Find Even positioned elements and sum it `);
const evenPosition=[];
let sum=0;

for (let index = 0; index < arrayNumbers.length; index++) {
   if (index%2===0) {
     evenPosition.push(arrayNumbers[index]);
     sum=sum+arrayNumbers[index];
   }
}
console.log(`The Even postioned element are : ${evenPosition}`);
console.log(`The Sum of Even postioned element is : ${sum}`);

console.log(``);
                         
console.log(`Q.7) Find Odd positioned elements and sum it `);
const oddPosition=[];
let oddSum=0;

for (let oddIndex = 0; oddIndex < arrayNumbers.length; oddIndex++) {
   if (oddIndex%2!==0) {
    oddPosition.push(arrayNumbers[oddIndex]);
     oddSum=oddSum+arrayNumbers[oddIndex];
   }
}
console.log(`The Odd postioned element are : ${oddPosition}`);
console.log(`The Sum of Odd postioned element is : ${oddSum}`);

console.log(``);
                     
console.log(`Q.8) Find the sum of all element in array `);
let allSumIndex=0;
let allSum=0;

while (allSumIndex<arrayNumbers.length) {
    allSum=allSum+arrayNumbers[allSumIndex];
    allSumIndex++;
}
console.log(`The sum of All Element in Array is : ${allSum}`);

console.log(``);

console.log(`Q.9) Find the number which are multiple of 5 `);
const multipleOf5=[];

for (let newIndex = 0; newIndex < arrayNumbers.length; newIndex++) {
    if (arrayNumbers[newIndex]%5==0) {
        multipleOf5.push(arrayNumbers[newIndex]);
    }
}
console.log(`Multiple of 5 are : ${multipleOf5}`);

console.log(``);

console.log(`Q.10)Is 115 element available in given Array `);
const checkElement115=arrayNumbers.includes(115);
console.log(`The element "115" is available : ${checkElement115}`);

console.log(``);

console.log(`Q.11)Is 23 element available in given Array `);
const checkElement23=arrayNumbers.includes(23);
console.log(`The element "23" is available : ${checkElement23}`);

console.log(``);

console.log(`Q.12)Insert Number 55,66 before index 3  `);
arrayNumbers.splice(3,0,"55,66");
console.log(`The number 55,66 added : ${arrayNumbers}`);

console.log(``);

console.log(`Q.13)Delete 3 element from index 4 `);
arrayNumbers.splice(4,3);
console.log(`Delete 3 element from index 4 in the given array :${arrayNumbers}`);