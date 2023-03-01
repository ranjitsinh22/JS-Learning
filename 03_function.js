var num1 =100;
var num2=200;

var temp=num1;
num1=num2;
num2=temp;
console.log(num1,num2);

console.log("****Swapping Variables*****");
var str1="sweety";
var str2="cutie";

var temp=str1;
str1=str2;
str2=temp;
console.log(str1,str2);



function swapVariables(value1,value2)    //var value1=num1,var value2=num2
{console.log("before swap",value1,value2);
    var temp=value1;
   value1=value2 ;
   value2=temp;
   console.log("after swap",value1,value2); 
   return "swapping variable done"                                                                           // }function variable
}
// var swapResult= swapVariables(num1,num2);    //function call or invoke the function
// console.log(swapResult);

// // function display(num)
// // {
// //     console.log(num);
// //     var result=type of num;
// //     return result;
// // }
// // var displayResult=display(100);
// // console.log(dispalyResult);

//  //funtion with no argu and no return value
// function showFullName()     
// { console.log("My Full Name:Ranjitsinh Shivaji Gavali");  //function declaration

// }
// showFullName();       //function call

// //function with argu with no return value
// function showAge(age)
// {console.log("My age :",age);

// }
// showAge(32);

// //function with no argu and return value
// function fullName()
// {var name="ranjitsinh Gavali";
// return name;
// }
// var Name= fullName();
// console.log(Name);

// //function with argu and return 
// function sumOfNumbers(num1,num2,num3){

// var sum= num1+num2+num3;
// return sum;
// }
// var sumResult = sumOfNumber(10,20,30);
// console.log(sumResult);


var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "Ranjit";
var name2 = "Rohit";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }
  var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);

  var swapResult2 =  swapVariables(name1, name2);
  console.log(swapResult2);
  console.log(`====================================================================`);

//function with no arg and no return
function myName(){
  console.log("My Name is:Ranjit");
}
myName();


  //function with arg and no return
  
  function personalDetails(name){
    console.log("My Name is:",name);
  }
  personalDetails("Ranjit");

  console.log(`=============================`);
  //function with arg and return
function myDetails(age){
  console.log("My Age is:",age);
var result= typeof age;
return result;
}
var displayResult=myDetails(24);
console.log(displayResult);