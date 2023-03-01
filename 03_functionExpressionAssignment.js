console.log(`=====================Function Expression Assignment==================`);

var leapYear=function checkLeapYear(Year){
    if(Year%4==0  ){
    console.log(` The Given year "${Year}" is : Leap Year` );
}
if(Year%4!=0  &&(typeof Year=="number")){
    console.log(` The Given year "${Year}" is  not Leap Year` );
    }
if( Year==undefined|| Year==NaN||Year=="twenty twenty"){
    console.log(` The Given year "${Year}" is not valid ,please provide valid data` );
}


}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(1750);
leapYear(null);
leapYear("twenty twenty");
leapYear(undefined);
leapYear(NaN);

