var greet ="Good Morning"
console.log("value of Greet:",typeof greet);
console.log("total number of character into string")
var greetLenght=greet.length;
console.log(greetLenght);

console.log("****Find Character By Index Value******");
var charAtIndex3=greet.charAt(3);
console.log("character at index 3:",charAtIndex3);

console.log("******Find last character****");
var charAtLastIndex=greet.charAt(greetLenght-1);
console.log("last char is:",charAtLastIndex);

console.log("******find index character by char value******");
var indexOfM=greet.indexOf("M")
console.log("index of char M is:",indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("index of char:",greet.indexOf("o"));
console.log("index of char using lastIndexOf():",greet.lastIndexOf("o"));

console.log("******to replace value*****");
var replaceResult=greet.replace("Morning","Evening");
console.log(greet);
console.log(replaceResult);

console.log("******Upper and Lower Case*****");
console.log("Upper Case:",replaceResult.toLocaleUpperCase());
console.log("ower Case:",replaceResult.toLocaleLowerCase());

console.log("*****to cutdown string*****");
var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);


console.log("*****find total extra spaces reoved from string myName*******");
var count=myName.length-myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("*********includes()**********");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));


console.log("*****slice() method*****");
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("*****split() method*****");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);



console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

console.log("*******total number of friends******");
var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var friendList=myFriendList.split(",");
console.log(friendList);
console.log(friendList.length);

console.log("******total number of words*******");
var splitResult = myFriendList.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);
