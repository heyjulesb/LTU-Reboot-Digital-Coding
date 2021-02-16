var temp = 18;

function wearACoat(temperature) {
    if(temperature < 0) {
        console.log('Stay inside, mate!');
    } else if (temperature < 10) {
        console.log('Wear a coat and hat!');
    } else if (temperature < 16) {
        console.log('Wear a coat!');
    } else {
        console.log('You don\'t need a coat!');
    }
}

wearACoat(15);
wearACoat(8);
wearACoat(-2);
wearACoat(20);