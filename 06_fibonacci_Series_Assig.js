console.log(`=========Fibonacci Series=============`);
console.log(`**First 15 Number in the Fibonacci Series using For Loop**`);

const number=15;
let a=0 ,b=1,temp=0 ;
for (let index = 1; index <=number; index++) {
    console.log(a);
    temp =a+b ;
    a=b;
    b=temp;   
}



console.log(`========Find First 10 prime number=======`);
console.log(`**First 10 Prime Number Using For and If loop**`); 

let count=0;

for (let number=2; count<10; number++){

let isprime=true;

for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    console.log(number);
    count=count+1;
}
}



let array=[]
function name(arg,arg1) {
  let count1=0;
for (let number=arg; count1<arg1; number++){
let isprime=true;
for (let index = 2; index <number; index++) {
    if (number%index==0) {
        isprime=false;
        break;
    }  
}
if (isprime) {
    array.push(number)
    count1=count1+1;
}
}
console.log(array);
}
name(2,10)







