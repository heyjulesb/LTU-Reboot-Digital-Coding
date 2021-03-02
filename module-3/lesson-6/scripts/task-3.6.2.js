var newElement = document.createElement('p');
//console.log(newElement);
var divElement = document.querySelector('div');
//console.log(divElement);

newElement.innerHTML = 'Jules is cool';
console.log(newElement);
divElement.append(newElement);