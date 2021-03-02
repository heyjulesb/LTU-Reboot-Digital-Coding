var hoverElement = document.getElementById('hoverExample');
//console.log(hoverElement);
function alertBox(){
    alert('You have hovered over my image');
}

hoverElement.addEventListener('mouseover', alertBox);
