console.log(`********Arrow Function Assignment A**********`);

console.log(`------- Arrow function with no arguments and no return value---------`);
let show = () => {
    console.log("Good Morning, Today is Monday");
}
show();

console.log(`------- Arrow function with arguments and no return value---------`);

let add = (num1, num2 ,num3=1) => {
   let multi=num1 * num2 *num3;
   console.log(`The Multiplication Of  ${num1},${num2},${num3} is : ${multi}`);

}
add(5,5,2);
add(10,4,);

console.log(`------- Arrow function with arguments and return value---------`);

let addition = (num1, num2,num3,num4,num5) => {
    const result = num1 +num2+num3+num4+num5;
    return result;
}
const addResult = addition(100,100,200,349,759);
console.log(`The Addition of Given Number 100,100,200,349,759 is : ${addResult}`);

const stringResult=addition("I am"," learning"," ES6"," feature"," in depth")
console.log(`The Addition of Different String is :${stringResult}`);

