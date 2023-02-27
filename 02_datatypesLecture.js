// Primitive Data Types
var myName='Virat Kohli';    //string type value
var fatherName="yogesh"  ;      //anything that inclosed in double quote is string
// var typeOfMyName  = typeof myName;            // do operation and assign value to variable then check it in console.     
console.log("typeof  myName: ", typeof MyName);          //directly check in console
console.log("typeOf fatherName:", typeof fatherName);
console.log(` father name:${fatherName}`);


var age=31;               //number type value
var weight=70;            // in primitive data type var store only one value not multiple
console.log("typeof age is:" ,age);
console.log("typeof weight is:" ,weight);

var isMarried=true;      //boolean type value
var isLazy=false;
console.log("typeof isMarried is:" ,isMarried);
console.log("typeof isLazy is:" ,isLazy);


//Special Data Types or Trivial Data Types
var graduation;        //when we declare variable and does not store any value that is undefined
console.log("Value of  graduation variable is: ", graduation);
console.log("typeOf graduation is: ", typeof graduation);          //Type of undefined is undefined

var city=null;   //variable is empty if assign value is null
console.log("Value of  city variable is: ", city);
console.log("type of city is: ", typeof city);    //type is object mean empty

age="40"         // type of this string
console.log(typeof age);                            //****non primitive data type or reference data type or composite data type****
                                                    //can hold multiple type of value
age=false;      //type is boolean                  //one variable can store any type of value so thats why JavaScript is called loosely type programming language       
console.log(typeof age);                           

age=50;           //type is number
console.log(typeof age);

console.log("Swapping Variables");
var num1=100;      //put value of num2 in num1
var num2=200;

var temp=num1;
num1=num2;
num2=temp;
console.log(num1,num2);