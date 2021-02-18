function percentageCalculator(number, percentage){
    var blnValidated = true;
    if(isNaN(number)) {
        blnValidated = false;
    };
    if(isNaN(percentage)) {
        blnValidated = false;
    };

    if(blnValidated) {
        var onePercent = number / 100;
        var totalPercent = onePercent * percentage;
        return totalPercent;
    } else {
        console.log('Both arguments need to be a number');
    }
}

var sum = percentageCalculator(20, 40);
console.log(sum)

var sum = percentageCalculator(80, 50);
console.log(sum)
