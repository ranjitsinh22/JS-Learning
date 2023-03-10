console.log(`-------09_object_Assignment_B---------------`);
console.log(`===SBI Bank===`)
const sbiBank={
    bankName:"State Bank Of India",
    location:"Pune",
accountNumber:11223344,
ifscCode:123456,
interestRate:9 ,
showDetails:function(){
    console.log(`Bank Name : ${this.bankName}, Location: ${this.location},Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.interestRate}`); 
}
}
sbiBank.showDetails();

console.log(``);
console.log(`===Yes Bank===`)
const yesBank={
    bankName:"Yes Bank",
    location:"Mumbai",
accountNumber:1122334455,
ifscCode:1234567,
interestRate:10 ,
showDetails:function(){
    console.log(`Bank Name : ${this.bankName}, Location: ${this.location},Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.interestRate}`); 
}
}
yesBank.showDetails();


console.log(``);
console.log(`===HDFC Bank===`)
const hdfcBank={
    bankName:"HDFC Bank",
    location:"Satara",
accountNumber:112233445566,
ifscCode:12345678,
interestRate:11 ,
showDetails:function(){
    console.log(`Bank Name : ${this.bankName}, Location: ${this.location},Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.interestRate}`); 
}
}

hdfcBank.showDetails();


console.log(``);
console.log(`===Axis Bank===`)
const axisBank={
    bankName:"Axis Bank",
    location:"Solapur",
accountNumber:11223344556677,
ifscCode:123456789,
interestRate:12 ,
showDetails:function(){
    console.log(`Bank Name : ${this.bankName}, Location: ${this.location},Account Number: ${this.accountNumber}, IFSC Code: ${this.ifscCode}, Interest Rate: ${this.interestRate}`); 
}
}
axisBank.showDetails();




