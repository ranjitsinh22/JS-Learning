console.log(`----------------Assignment 0B------------------- \n`);
console.log(`======================Step 1=========================`);
function maleMarriageEligibility(gender,age,boyName)
{
var result1="male" && age>=21 ? `Hey "${boyName}" you are eligible for marriage`:"not eligible for marriage";
return result1;
}
var result1=maleMarriageEligibility("male",25,"BillGates");
var result2=maleMarriageEligibility("male",17,"SteveJobs");
console.log(`**Eligibility Of Bill Gates** :${result1}`);
console.log(`**Eligibilty of Steve Jobs**:${result2}`);

console.log(`=============================Step 2============================`);
function femaleMarriageEligibility(gender,age,girlName)
{
var result1="female" && age>=18 ? `Hey "${girlName}" you are eligible for marriage`:"not eligible for marriage";
return result1;

}
var result1=femaleMarriageEligibility("female",16,"Jenifer");
var result2=femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(`**Eligibility Of Jenifer** :${result1}`);
console.log(`**Eligibilty of Malinda**:${result2}`);
