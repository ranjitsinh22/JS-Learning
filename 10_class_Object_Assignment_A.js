console.log(`==========Step 1=============`);

let vehicle = {
    carName:"carName",
    brandName : "brandName",
   type: "type",
    engine: "engine",
    colour: "colour",
    power: "power"
}


class Vehicle {
    constructor(carName, brandName, type, engine, colour,power ){
        this.carName = carName;
        this.brandName = brandName;
        this.type = type;
        this.engine = engine;
        this.colour = colour;
        this.power = power;
    }

}
const tataVehicle = new Vehicle("Harrier", "TATA Motors", "SUV", "ESS Petrol","Black","160bhp" );
console.log(tataVehicle);

console.log(`------`);
const mahindraVehicle = new Vehicle("Thar", "Mahindra and Mahindra", "SUV", "BS6 Petrol","Red","150bhp" );
console.log(mahindraVehicle);

console.log(`------`);
const suzukiVehicle = new Vehicle("Grand Vitara", "Suzuki Motors", "Compact SUV", "HEV Petrol","White","140bhp" );
console.log(suzukiVehicle);

console.log(`------`);
const hondaVehicle = new Vehicle("City", "Honda Motors", "Sedan", "Petrol","Grey","110bhp" );
console.log(hondaVehicle);

console.log(`------`);
const hundaiVehicle = new Vehicle("I 10", "Hundai Motors", "Hatchback", "Petrol","Red-Balck","80bhp" );
console.log(hundaiVehicle);

console.log(``);
console.log(`============Step 2==============`);

let college = {
    collegeName:"collegeName",
    city : "city",
   type: "type",
    courses: "courses",
    student: "student",
    teacher: "teacher"
}

class College {
    constructor(collegeName, city, type, courses, student,teacher ){
        this.collegeName = collegeName;
        this.city = city;
        this.type = type;
        this.courses = courses;
        this.student = student;
        this.teacher = teacher;
    }
}
const sscCollege = new College("SMV College", "Akluj", "Science", "SSC","100","8" );
console.log(sscCollege);

console.log(`------`);
const hscCollege = new College("SMM College", "Malewadi", "Science", "HSC","50","6" );
console.log(hscCollege);

console.log(`------`);
const degreeCollege = new College("Garware College", "Pune", "Science", "BSc","1000","40" );
console.log(degreeCollege);

console.log(`------`);
const pgCollege = new College("MIT", "Pune", "Computer Science", "MCA","70","10" );
console.log(pgCollege);

console.log(``);
console.log(`=========Step 3========`);

const arrayCollege=[sscCollege, hscCollege,degreeCollege,pgCollege]
function traverseObject(collegeDetails) {
    for (const key in collegeDetails) {
      if (Object(collegeDetails, key)) {
        const element = collegeDetails[key];
        console.log(`${key} : ${element}`);
      }
    }
  }
  
  traverseObject(sscCollege);
  console.log(`------`);
  traverseObject(hscCollege);
  console.log(`------`);
  traverseObject(degreeCollege);
  console.log(`------`);
  traverseObject(pgCollege);
  

  
  console.log(`=========Step 4========`);

const num = 11;
let isPrime = num > 1;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}
