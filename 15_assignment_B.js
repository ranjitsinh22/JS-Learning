console.log(`-----Assignment_B-------`);

class Employee{
constructor(empId,empName,empDept,empSalary,empCompany){
this.empId=empId;
this.empName=empName;
this.empDept=empDept;
this.empSalary=empSalary;
this.empCompany=empCompany;
}
}
const empAnil=new Employee(22,"Anil","IT","50000","TCS");
const empRadha=new Employee(33,"Radha","HR","74000","Wipro");
const empRishi=new Employee(55,"Rishi","Finance","47000","TCS");
const empSonali=new Employee(66,"Sonali","Finance","45000","Infosys");
const empMonika=new Employee(77,"Monika","IT","40000","Wipro");
const empVinay=new Employee(88,"Vinayak","IT","75000","TCS");
const empMahi=new Employee(99,"Mahesh","HR","85000","Infosys");

let arrayEmployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi]

console.log(`=========Employee Working in TCS Company==========`);
for (const employee of arrayEmployee) {
    if (employee.empCompany==="TCS") {
        console.log(`Employee Name is : ${employee.empName} and Company Name is : ${employee.empCompany}`);
    }
}

console.log(`-----`);
console.log(`=========Employee Working in Finance Department==========`);
for (const employee of arrayEmployee) {
    if (employee.empDept==="Finance") {
        console.log(`Employee Name is : ${employee.empName} and Company Name is : ${employee.empDept}`);
    }
}

console.log(`-----`);
console.log(`=========Employee Who's Name start with letter "R"==========`);
for (const employee of arrayEmployee) {
    if (employee.empName.startsWith("R")) {
        console.log(employee);
    }
}

console.log(`-----`);
console.log(`=========Employee Who's salary greater than 75000==========`);
for (const employee of arrayEmployee) {
    if (employee.empSalary>75000) {
       console.log(`Emp Name:`,employee.empName, `Company:`,employee.empCompany, `Emp Salary:`,employee.empSalary); 
    }
}

console.log(`-----`);
console.log(`=========Employee Who's salary greater than eeual to 50000 and from IT Department==========`);
for (const employee of arrayEmployee) {
    if (employee.empSalary>=50000 && employee.empDept=="IT") {
        console.log(employee);    }
}
console.log(`-----`);

for (const employee of arrayEmployee) {
    if (employee.empCompany=="Infosys") {
        console.log(employee);    }
}
