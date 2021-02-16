function combineName(firstName, lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

var fName1 = 'Jules';
var lName1 = 'Luu'

var fName2 = 'Julie'
var lName2 = 'Luu'

var fullName1 = combineName(fName1, lName1);
console.log(fullName1);

var fullName2 = combineName(fName2, lName2);
console.log(fullName2);
