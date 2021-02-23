for(var multiplyer = 1; multiplyer <=12; multiplyer++){
    for(
        var counter = 1; //set the value of the counter (before the loops start)
        counter <=12; //conditional logic (test before each iteration)
        counter++ //add one to the counter after each iteration
    ){
        let sum = multiplyer * counter;
        let message = multiplyer + '*' + counter + ' = ' + sum;
        console.log(message);
    }
}