console.log(`=========For Each Assignment A==============`);
console.log(`The Given Array is :  arrayNumbers= [1,-7,40,502,-77,91,0,108,89,-601];`);
const arrayNumbers= [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`=======Step 1=========`);
arrayNumbers.forEach(function arrayOfNum(currentValue,index) {
    console.log(`The Element is: ${currentValue} and It's Index is: ${index}`);
}
);

console.log(`=======Step 2=========`);
arrayNumbers.forEach(element => {
    if (element>0) {
        console.log(`The positive Element are : ${element}`);
    }
});

console.log(`=======Step 3=========`);
let newArray=[];
arrayNumbers.forEach(element => {
    if (element<0) {
        newArray.push(element);
    }
   
});
console.log(`The negative Element are : ${newArray}`);

console.log(`===Step 4 ) to find even  number using for each loop with arrow function===`);
arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`The Given Number ${element} is Even `);
    }
});

console.log(`===Step 5 )  find sum of all number using for each loop with arrow function===`);
let sum=0;
arrayNumbers.forEach(element => {
   sum=sum + element;
});
console.log(`The Sum  of all Number is:  ${sum}  `);

console.log("===Step 6) Even Positioned element in the array===");
let myArray=[];
arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        myArray.push(element); 
    }
});
console.log(`Even Positioned element in the array : ${myArray}`);