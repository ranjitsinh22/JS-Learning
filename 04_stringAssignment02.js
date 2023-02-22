function stringHandsOn() {
    var string = "    Hey You are donig good, keep it up   ";
    console.log("Given String is:",string);

    console.log(`===============================================`);
    var stringLength = string.length;
    console.log("Q.2)Lenght of the string", stringLength);
 
    console.log(`===============================================`);
    console.log("Q.3)to remove extra spaces*****");
    var stringAfterTrim = string.trim();
    
    console.log("Removing extra start and end spaces using trim(): ", stringAfterTrim);
    var totalRemove=stringAfterTrim.length;
    console.log("After Removing extra start and end spaces using trim() lenght is: ", totalRemove);

    console.log(`===============================================`);
    var count = stringLength-stringAfterTrim.length;
    console.log("Q.4)total extra spaces removed from string:", count);
 
    console.log(`===============================================`);
    console.log("*****Find first and Last character***");
    var charAtFirstIndex = stringAfterTrim.charAt(0);
    console.log("Q.5)First character is:", charAtFirstIndex);
 

    var charAtLastIndex = stringAfterTrim.charAt(stringAfterTrim.length - 1);
    console.log("last character is:", charAtLastIndex);
 
    console.log(`===============================================`);
    console.log("*****total number of words after trim******");
    var totalWords=stringAfterTrim.split(" ");
    console.log("Q.6)Total words: ", totalWords.length);
 
    console.log(`===============================================`);
    var indexOfGood = stringAfterTrim.indexOf("good");
    console.log("Q.7)index of good is:", indexOfGood);
 
    console.log(`===============================================`);
    console.log("Q.8)*****print substring starting from index 22 using substring() ******");
    console.log(stringAfterTrim.substring(22));
 
    console.log("*******print substring starting from index 22 using slice()******");
    console.log(stringAfterTrim.slice(22));
 
    console.log(`===============================================`);
    console.log("******step 9*****");
    console.log("Q.9)Is string end with word up after step 3  or not: ", stringAfterTrim.includes("up"));
 
    console.log(`===============================================`);
    console.log("Q.10)Is string start with word Hey after step 3 or not: ", stringAfterTrim.includes("Hey"));
 }
 stringHandsOn();