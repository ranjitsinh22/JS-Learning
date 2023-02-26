console.log(`--------Assignment 0C-------- \n`);
function eligibility(gradScore,hscScore,sscScore,candidateName)

{
    
var result=gradScore>=70 || hscScore>=80 ||sscScore>=90 ?  `Congratulation" ${candidateName}" you are eligible for TCS interview `:`Sorry "${candidateName}" unfortunately you are not eligible`;
console.log(`Check Eligibility : ${result}`);

} 
eligibility(80,86,90,"Ranjit");
eligibility(70,65,55,"Ajay");
eligibility(60,79,88,"Prabhu");




