console.log(`--------------Object Assignment A------------------------`);

let professor = {
firstName:'Gajanan',
lastName:'Kharat',
Qualification: 'BE',
Subject:'Javascript',
collegeName:"ABC",
city:'Pune',
degrees:{
    engineering:'CSC',
    masters:'Fullstack Development',
    PHD:'Advanced Computing',
    Reaserch:'Quantum Computer'
},
 certificate : ["Hacker Rank Participant", "Certificate in IFE Course" ,"Certificate in Advance Programming"],
 totalDegrees:function(){
return `engineering :"${this.degrees.engineering}",masters :"${this.degrees.masters}",PHD : "${this.degrees.PHD}", Reaserch :"${this.degrees.Reaserch}"`
 }
};

console.log(`====Step1-Properties====`);
console.log(professor);
console.log(``);
console.log(`====Step2-Degrees====`);
console.log(professor.degrees);
console.log(``);
console.log(`====Step3-Certificates====`);
console.log(professor.certificate);
console.log(``);
console.log(`====Step4-Total Degrees====`);
let resultDegrees= professor.totalDegrees();
console.log(`The Total degrees of Professor are:${resultDegrees}`);
console.log(``);
console.log(`====Step5-Total Experience====`);
professor.totalExperience="14 Years"
console.log(`Total Experience is:${professor.totalExperience}`);
console.log(``);
console.log(`====Step6-Modified Existing Properties====`);
professor.city="Mumbai";
console.log(professor.city);
console.log(``);
console.log(`====Step7-Add one new certificate====`);
let certificate = ["Hacker Rank Participant", "Certificate in IFE Course" ,"Certificate in Advance Programming"];
certificate.push("Oracle Certificate");
console.log(certificate);

console.log(``);
console.log(`====Step8-Last Element of array====`);
const lastElement=certificate.length-1;
console.log(`The Last element in above Array is: ${lastElement}`);