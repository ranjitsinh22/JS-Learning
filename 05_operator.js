console.log(`========Arithmetic Operator=======`);
var num1=10;
var num2=3;
var result=num1+num2; 
console.log(`Addition is: ${result}`);

var result=num1-num2;
console.log(`Substraction is:${result}`);

var result=num1*num2;
console.log(`Multiplication is:${result}`);

result=num1**num2;                         //10**3    this means = 10*10*10
console.log(`exponential: ${result}`);

// console.log(10/3);  //division
// console.log(10%3);  //reminder

result = num1 / 3;
console.log(` Division is ${result} `);

result = num1 % 3; // Modulus  is binary operattor
console.log(` Reminder is ${result} `);

console.log(`=========Assignment Operators=======`);

var num=10;  //compound addition +=
num+=20;           //num=num+20
console.log(`compound addition+=${num}`);

console.log(`===========commparision========`);
var num3="10"; //to check value of num3 is equal to 10
console.log(num3==10); // comparing two values to each  other
console.log(num3==11);

var num4=10
console.log(num3==num4); //"10"==10  convert string into number then compare 
                         //implicite conversion=automatic conversion
console.log(num3===num4);  //this is called as strictly equal  //no auto coneversion ,only comparision                     

console.log(num3!=num4);  //not equal

console.log(10>20);    //   > greater than
console.log(20<10);    //   < less than
console.log(10<10);    //   < less than

var marks=35;
console.log(marks>=35);  //is marks(35) greater than equal to 35

console.log(marks<=35);   //less than equal