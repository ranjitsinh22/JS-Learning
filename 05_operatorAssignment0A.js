console.log(`----------------Assignment A------------------- \n`);
console.log(`=================Step 1====================`);
function greaterNumber(num1, num2){
  var result = num1>num2 ? num1 : num2;
   console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
  
  console.log(`==================step 2=============`);
  
  function isEvenOddNumber(num) 
  { 
      var result= num%2==0 ? "Even" : "Odd";
     
      return result;
    
}
var result=isEvenOddNumber(29);
console.log(`Given number  is:${result}`);

var result=isEvenOddNumber(44);
console.log(`Number 44 is:${result}`);

var result=isEvenOddNumber(0);
console.log(`Number 0 is:${result}`);

var result=isEvenOddNumber(101);
console.log(`Number 101 is:${result}`);


console.log(`================step 3============`);
function wordLength(word){
  var wordLength=word.length;
  var result=wordLength%2==0 ? "Even":"Odd" ;
  return(result);
}
var result=wordLength("javaScript");
console.log(`word "JavaScript" has "${result}" length`);

var result=wordLength("developer");
console.log(`word "Developer" has "${result}" length`);

var result=wordLength("google");
console.log(`word "Google" has "${result}" length`);

