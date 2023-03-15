console.log(`==========10 Constructor Function Assignment===========`);

//this is construction function
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.showDetails=function(){
        console.log(`Bank Details is : Bank Name: ${this.bankName} , Location: ${this.location}, IFSC Code :${this.ifscCode}, Branch Code: ${this.branchCode}`);
    }
}

const yesBank=new Bank("Yes Bank",'Pune',112233,'YES001');
yesBank.showDetails();
console.log(``);
const sbiBank=new Bank("SBI Bank",'Mumbai',101112,'SBI001');
sbiBank.showDetails();
console.log(``);
const mahBank=new Bank("Maharashtra Bank",'Solapur',12345,'MAH001');
mahBank.showDetails();
console.log(``);
const axisBank=new Bank("Axis Bank",'Satara',010203,'AXS001');
axisBank.showDetails();
console.log(``);

console.log(`==========Add Data Member on Prototype Object================\n`);
Bank.prototype.openTime="09.00 AM IST"
Bank.prototype.closeTime="06.00 AM IST"
console.log(`This is Openoning Time : ${yesBank.openTime} and Closing Time :${yesBank.closeTime} of YES Bank`);
console.log(``);
console.log(`This is Openoning Time : ${sbiBank.openTime} and Closing Time :${sbiBank.closeTime} of SBI Bank`);
console.log(``);
console.log(`This is Openoning Time : ${mahBank.openTime} and Closing Time :${mahBank.closeTime} of Maharashtra Bank`);
console.log(``);
console.log(`This is Openoning Time : ${axisBank.openTime} and Closing Time :${axisBank.closeTime} of Axis Bank`);