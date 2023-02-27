function voteEligibility(age,boyName){
    if(age>=18 && age<100 ){
       console.log( `***For Age "${age}" *** :- Hey "${boyName}" yor eligible for voting`);
   }
   else{
    console.log( `===For Age "${age}" === :- Sorry "${boyName}" yor not eligible for voting, your age "${age}" is not valid `);
   }
    
}voteEligibility(45,"Ranjit");
voteEligibility(17,"Rohit");
voteEligibility(200,"Raju");
voteEligibility(0,"Bala");
voteEligibility(8,"Ajay");
voteEligibility(20,"Amar");
voteEligibility(-10,"Shivam");
voteEligibility(undefined,"Prasad");
voteEligibility(null,"Pratik");

console.log(`=========================================================`);
console.log(`-----Q.2-------`);

function gradeCalculation(mark){
    if(mark>=90){
        console.log(`Excellent marks "${mark}" ,your grade is A+`);
    }
    if(mark>=75 && mark<90){
        console.log(`Excellent marks "${mark}" ,your grade is A`);
    }
    if(mark>=50 && mark<75){
        console.log(`Good marks "${mark}" ,your grade is B`);
    }
    if(mark>=35 && mark<50){
        console.log(`Your marks is "${mark}" ,your grade is C,need improvement`);
    }
    if(mark<35 ){
        console.log(`Your marks is "${mark}" ,your grade is D,need to more improvement`);

    }
    
    if(mark<=0 || mark > 100 || (typeof mark!= "number")){
            console.log(`Please provide the valid marks, your mark "${mark}" is not valid`);
    }
    console.log(`--------`);
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation("NaN");
gradeCalculation("Null");