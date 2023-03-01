console.log("*******step1*******");
//function with no argument no return
function myFavourite()
{
    console.log("function with no argument");
    console.log("My favourite Car: Mustang GT");
}
myFavourite();

console.log("********Step 2*********");
// function  with argument and no return
var firstName="Ranjitsinh"
var lastName="Gavali"
var collegeName="AGC Pune"
function personalDetails(firstName,lastName,collegeName)
{
console.log(`First Name:firstName,Last Name:lastName,College Name:collegeName`);
}
personalDetails();

console.log("********Step 3*********");
var name1="Virat";
var name2="Anushka";

var num1="1000";
var num2="2000";

function swapValuesDude(value1,value2)   //this is equal to var value1=num1 , var value2=num2       //in variable name total number of argument should not more than 7
{console.log("before swap:",value1,value2);
var temp = value1;
value1=value2;                                      //total number of lines in funtion should not more than 25
value2=temp;
console.log("After swap:",value1,value2);

}
swapValuesDude(name1,name2);
swapValuesDude(num1,num2);

console.log("*******step 4*********");

function addThreeValues(value1,value2,value3)
{
    var sum=value1+value2+value3;
    return sum;
}
var result=addThreeValues(10.23,600,40);
console.log(result);
var result=addThreeValues("Hello","Good","Morning")
console.log(result);