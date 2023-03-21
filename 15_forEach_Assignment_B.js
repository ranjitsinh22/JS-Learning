console.log(`==========For Each Assignment B=============`);

class Employee {
  constructor(empId, empName, empDept, empSalary, empCompany) {
    this.empId = empId;
    this.empName = empName;
    this.empDept = empDept;
    this.empSalary = empSalary;
    this.empCompany = empCompany;
  }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

let arrayEmployee = [
  empAnil,
  empRadha,
  empRishi,
  empSonali,
  empMonika,
  empVinay,
  empMahi,
];

console.log(`====step 1) Find TCS employee========`);
arrayEmployee.forEach((element) => {
  if (element.empCompany == "TCS") {
    console.log(
      `Employee Name:${element.empName} and Company Name :${element.empCompany}`
    );
  }
});

console.log(
  `====step 2)Employee with salary greater than equal to 50000========`
);
arrayEmployee.forEach((element) => {
  if (element.empSalary >= 50000) {
    console.log(
      `Employee ID: ${element.empId} ,Employee Name:${element.empName}, Employee Dept:${element.empDept}, Employee Salary:${element.empSalary}, and Company Name :${element.empCompany}`
    );
  }
});

console.log(`========Step3) Sum Of All employee salary========`);
let totalSalary = 0;
arrayEmployee.forEach(function(element) {
    totalSalary =totalSalary+ element.empSalary;
});

console.log(`The sum of Employee Salary is ${totalSalary}`); 

console.log(`========Step4) Avaerage Salary Of All employee ========`);
let aveSalary=0;
arrayEmployee.forEach(function(element)  {

    aveSalary=totalSalary/arrayEmployee.length;
    
  });
  console.log(`Total average salary of an employee is : ${aveSalary}`);
  
  console.log(`========Step5) IT and HR Dept employee whos salary is greater than 75000 ========`);
  arrayEmployee.forEach((element) => {
    if ((element.empSalary>=75000 )&&(element.empDept=="IT" || element.empDept=="HR" ) ){
        console.log(element);
    }
});