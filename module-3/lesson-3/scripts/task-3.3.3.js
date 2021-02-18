// Adding a validation function for numbers
function isValidNumber(number){
    // We are using a double negative as a NaN to return false on valid numbers.
    return !isNaN(number);
}
function calculator(number1, number2, operator){
    // if number 1 is not a number
    if(!isValidNumber(number1)){
        // end the function here and pass the message
        return 'Argument 1 must be a number';
    }
    // if number 2 is not a number
    if(!isValidNumber(number2)){
        // end the function here and pass the message below.
        return 'Argument 2 must be a number';
    }

    // if the operator does not equal + - * / %
    if(operator != '+' && operator != '-' && operator !='*' && operator !='/' && operator !='%'){
        //end the function here and pass the message
        return 'Argument 3 must be an arithmatic operator';
    }
    // all of the validation has passed so we can no perform the calculation
    var sum;
    // based on the operated passed in argument 3 we will do a different calculation
    switch(operator){
        case '+':
            sum = number1 + number2;
            message = `${number1} ${operator} ${number2} = ${sum}`
        break;
        case '-':
            sum = number1 - number2;
            message = `${number1} ${operator} ${number2} = ${sum}`
        break;
        case '*':
            sum = number1 * number2;
            message = `${number1} ${operator} ${number2} = ${sum}`
        break;
        case '/':
            sum = number1 / number2;
            message = `${number1} ${operator} ${number2} = ${sum}`
        break;
        case '%':
            sum = number1 % number2;
            message = `${number1} ${operator} ${number2} = ${sum}`
        break;
    }
    return message;

}

// choose two numbers and an arithmatic operator
calculation = calculator(10, 10, '+');
console.log(calculation);

calculation = calculator(20, 10, '-');
console.log(calculation);