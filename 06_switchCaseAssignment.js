console.log(`===================Switch Assignments=====================`);

function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`"${monthNumber}" month of the Year is :January`);
      console.log(`--------`);
      break;
      
    case 2:
      console.log(`"${monthNumber}" month of the Year is :February`);
      console.log(`--------`);
      break;
    case 3:
      console.log(`"${monthNumber}" month of the Year is :March`);
      console.log(`--------`);
      break;
    case 4:
      console.log(`"${monthNumber}" month of the Year is :April`);
      console.log(`--------`);
      break;
    case 5:
      console.log(`"${monthNumber}" month of the Year is :May`);
      console.log(`--------`);
      break;
    case 6:
      console.log(` "${monthNumber}" month of the Year is  :June`);
      console.log(`--------`);
      break;
    case 7:
      console.log(` "${monthNumber}" month of the Year is  :July`);
      console.log(`--------`);
      break;
    case 8:
      console.log(` "${monthNumber}" month of the Year is  :August`);
      console.log(`--------`);
      break;
    case 9:
      console.log(` "${monthNumber}" month of the Year is  :September`);
      console.log(`--------`);
      break;
    case 10:
      console.log(` "${monthNumber}" month of the Year is  :October`);
      console.log(`--------`);
      break;
    case 11:
      console.log(` "${monthNumber}" month of the Year is  :December`);
      console.log(`--------`);
      break;
    case 12:
      console.log(` "${monthNumber}" month of the Year is  :December`);
      console.log(`--------`);
      break;
      
    default:
      console.log(`  "${monthNumber}" Invalid Data, Please provide valid data`);
      console.log(`--------`);
      break;
  }
}

monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear("string");
monthOfYear(undefined);
monthOfYear(null)
monthOfYear(NaN);
