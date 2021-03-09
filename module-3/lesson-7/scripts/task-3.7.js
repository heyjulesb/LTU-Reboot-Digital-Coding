/*-----     Variables     -----*/   
var arrAnimalFilters = document.querySelectorAll('.animalFilter');
var arrAnimalImages = document.querySelectorAll('.animalImage');
//console.log(arrAnimalFilters);
//console.log(arrAnimalImages);

/*-----     Event Listeners     -----*/   
for (counter = 0; counter < arrAnimalFilters.length; counter++){
    //console.log(counter);
    let currentFilter = arrAnimalFilters[counter];
    //console.log(currentFilter);
    currentFilter.addEventListener('click', filterImages);
}

/*-----     Functions     -----*/
function filterImages(event){
    //console.log(event.target.innerHTML);
    //changes the button name to lower case letters
    var animalName = event.target.innerHTML.toLowerCase();
    //console.log(animalName);
    for (counter = 0; counter < arrAnimalImages.length; counter++){
        let currentImage = arrAnimalImages[counter];
        currentImage.style.display = 'none';
        //console.log(currentImage);
        if(animalName == 'all'){
            currentImage.style.display = 'inline';
        } else {
            //this variable checks that it equals to the image attribute 'animal'
            let currentImageAnimal = currentImage.getAttribute('animal');
            //console.log(currentImageAnimal);
            if (currentImageAnimal == animalName) {
                currentImage.style.display = 'inline';
            }
        }
    }
}