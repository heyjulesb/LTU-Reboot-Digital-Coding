function drinkOrder(size, drink){
    var blnValidation = true;
    var orderMessage = '';

    switch(size){
        case 'small':
        case 'medium':
        case 'large':
            // do nothing
        break;
        default:
            orderMessage = "The size you have ordered is not valid!";
            blnValidation = false;
        break;
    }

    switch(drink){
        case 'cola':
        case 'lemon':
        case 'orange':
            // do nothing
        break;
        default:
            orderMessage = "The drink you have ordered is not valid!";
            blnValidation = false;
        break;
    }

    if(blnValidation){
        orderMessage = `You have ordered a ${size} `;
        switch(drink){
            case 'cola':
                orderMessage += 'Cola!';
            break;
            case 'lemon':
                orderMessage += 'Lemonade!';
            break;
            case 'orange':
                orderMessage += 'Orange!';
            break;
        }
    }
    return orderMessage;
}

var order = drinkOrder('small', 'cola');
console.log(order);

var order = drinkOrder('big', 'lemon');
console.log(order);

var order = drinkOrder('medium', 'apple');
console.log(order);

var order = drinkOrder('venti', 'apple');
console.log(order);