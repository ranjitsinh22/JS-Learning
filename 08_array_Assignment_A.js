const arraySeasonalFruit=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruit} `);

console.log(`Q1)Log the First and last Element---------`)
const arraySeasonalFruit1=["Banana","Orange","Apple","Mango","Water Melon"];
const arraySeasonalFruit01=arraySeasonalFruit1[0]
const arraySeasonalFruit001=arraySeasonalFruit1[4]

console.log(`First element is :${arraySeasonalFruit01}`);
console.log(`Last element is :${arraySeasonalFruit001}`);




console.log(``);

console.log(`Q2)Add Papaya Before Banana`);
const arraySeasonalFruit2=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruit2.unshift("Papaya");
console.log(arraySeasonalFruit2);

console.log(``);

console.log(`Q3)Remove Mango from Array`);
const arraySeasonalFruit3=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruit3.splice(3,1);
console.log(arraySeasonalFruit3);

console.log(``);

console.log(`Q4)-----Insert Element Pineapple at last----------`);
const arraySeasonalFruit4=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruit4.push("Pineapple");
console.log(arraySeasonalFruit4);

console.log(``);

console.log(`Q5)-----Insert Element "Dragon Fruit" before "Water Melon"----------`);
const arraySeasonalFruit5=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruit5.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruit5);

console.log(``);

console.log(`Q6)-----Replace element "Orange" with "Kiwi"----------`);
const arraySeasonalFruit6=["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruit6.splice(1,1,"Kiwi");
console.log(arraySeasonalFruit6);

console.log(``);

console.log(`Q7)-----Log the Element Starting from index 1 to 4----------`);
const arraySeasonalFruit7=["Banana","Orange","Apple","Mango","Water Melon"];
const sliceMethod=arraySeasonalFruit7.slice(1,5);
console.log(sliceMethod);

console.log(``);

console.log(`Q8)-----Log last 3 Element using lenght property----------`);
const arraySeasonalFruit8=["Banana","Orange","Apple","Mango","Water Melon"];
const sliceLength2= arraySeasonalFruit8.slice(arraySeasonalFruit8.length-3);
console.log(sliceLength2);

