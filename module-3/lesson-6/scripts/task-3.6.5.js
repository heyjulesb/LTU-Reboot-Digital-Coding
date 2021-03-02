var submitButton = document.querySelector('.submit');

function squareNumber(event){
    event.preventDefault();
    let value = document.querySelector('#full-name').value;
    var message = '';
    if (isNaN(value)){
        message = 'you must enter a number to do maths';
    } else {
        message = (value * value);
    }
    document.querySelector('.message').innerHTML = message;
}

function greeting(event){
    event.preventDefault();
    let value = document.querySelector('#full-name').value;
    var message = 'Howdy ' + value;
    document.querySelector('.message').innerHTML = message;
}
submitButton.addEventListener('click', greeting);
