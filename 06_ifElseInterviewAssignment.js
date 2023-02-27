console.log(`==============06_if_else_interviiew Assignment===================`);
function interviewEligibility (gradScore,hscScore,sscScore,candidateName){
 if(gradScore>=70 || hscScore>=80 || sscScore>90){
    console.log(`Congrats "${candidateName}" you are eligible for TCS interview `);
 }
    else{
        console.log(` Sorry "${candidateName}" you are not eligible for TCS interview, your Graduation Score "${gradScore}" is not valid`);
 }

 console.log(`----`);


 }

interviewEligibility(80,86,90,"Ranjit");
interviewEligibility(70,65,55,"Ajay");
interviewEligibility(68,79,55,"Amar");
interviewEligibility(0,79,78,"Anupama");
interviewEligibility(-60,79,88,"Arpita");
interviewEligibility("undefined",79,88,"Aishwarya");
interviewEligibility("null",69,58,"Komal");