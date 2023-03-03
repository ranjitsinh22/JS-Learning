console.log(`-------------------------factorial Assignment B--------------------\n`);

function factorialOfWordCount(string){
    var count=1
    if (string==""||string=="null") {
        return `Invalid Data`;
    }
for (let index = 0; index<=string.length; index++) {
    var charString=string.charAt(index);
    if (charString==" ") {
        count=count+1
        
    }
}
return count;

}
    var wordCount=factorialOfWordCount("Revision is the mother of success");
    console.log(`The total number of word in Given String "Revision is the mother of success" is: ${wordCount}`);
console.log(`-------`);

    var wordCount=factorialOfWordCount("wer never fail ,we always learn");
    console.log(`The total number of word in Given String "wer never fail ,we always learn"is: ${wordCount}`);
console.log(`-------`);

    var wordCount=factorialOfWordCount("null");
    console.log(`The total number of word in Given String "null" is: ${wordCount}`);
console.log(`-------`);

    var wordCount=factorialOfWordCount("");
    console.log(`The total number of word in Given String "" is: ${wordCount}`);
console.log(`-------`);

    var wordCount=factorialOfWordCount("Ranjitsinh Shivaji Gavali");
    console.log(`The total number of word in Given String "Ranjitsinh Shivaji Gavali" is: ${wordCount}`);


    console.log(`-------------------------------------------------------\n`);

    function factorialOfNum(num) {
        var result = 1;
        for (var index = num; index >= 1; index--) {
          result *= index;
        }
        return result;
      }
      
      var factorialOf6 = factorialOfNum(6);
      console.log(`The factorial of given number "6" is : ${factorialOf6}`);

      console.log(`------`);
      var factorialOf3 = factorialOfNum(3);
      console.log(`The factorial of given number "3" is : ${factorialOf3}`);
      