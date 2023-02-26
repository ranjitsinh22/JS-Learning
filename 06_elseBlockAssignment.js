console.log(`====if else=====`);
console.log(`=====================male========================`);
function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "male" && age >= 21) {
    console.log(`congrates "${boyName}" you are eligiblr for marriage`);
  } else {
    console.log(`sorry "${boyName}" you are not eligible for marriage`);
  }
}
maleMarriageEligibility("male", 24, "Billgates");
maleMarriageEligibility("male", 18, "Stevejobs");

console.log(`===============female==================`);
function femaleMarriageEligibility(gender, age, girlname) {
  if (gender == "female" && age >= 18) {
    console.log(`Congrats "${girlname}" you are eligible for Marriage`);
  }
  else{
    console.log(`sorry "${girlname}" you are not eligible for marriage`);
  }
}
  femaleMarriageEligibility("female", 20, "Milinda");
  femaleMarriageEligibility("female", 17, "Jenny");

