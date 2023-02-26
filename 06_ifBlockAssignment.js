console.log(`******************if block******************`);
console.log(`============================step1=======================`);

function number(num){
    if( num%2==0){
return "even";
}
if(num%2!=0){
    return "odd";
}
}
var result=number(45);
console.log(`The Given Number 45 is:${result}`);

var result=number(70);
console.log(`The Given number 70 is:${result}`);

var result=number(67);
console.log(`The given number 67 is:${result}`);
 
var result= number (98);
console.log(`The Given number 98 is:${result}`);

console.log(`============================step2=======================`);
function ageForVote(age){
    if(age>=18){
        return "Congrats you are eligible for Voting";
    }
    if(age<18){
        return"sorry you are not eligible for voting";
    }
}
var result=ageForVote(18);
console.log(`Check Eligibility for age 18:${result}`);

var result=ageForVote(20);
console.log(`Check Eligibility for age 20:${result}`);

var result=ageForVote(17);
console.log(`Check Eligibility for age 17:${result}`);

var result=ageForVote(40);
console.log(`Check Eligibility for age 40:${result}`);

console.log(`========================step 3======================`);
function string(word){
    if(word.length>10){
        return "Yes";
    }
    if(word.length<10){
        return "No";
    }
}
var result=string("JavaScript-ES6");
console.log(`Is  the lenght of given String "JavaScript-ES6" more than 10: ${result} `);

console.log(`========================step 4======================`);
function sentence(word){
    if(word.startsWith("java")){
        return "yes";
    }
}
var  result=sentence("javaScript Language");
console.log(`Is given sentence start with Java :${result}`);
