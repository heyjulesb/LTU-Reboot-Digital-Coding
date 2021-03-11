// FUNCTION name FixStart(string)
function fixStart(string){
    //SET {firstCharacter} equal string[0];
    var firstCharacter = string[0].toLowerCase();
    console.log(firstCharacter);
    //SET {newString} equal  "";
    var newString = "";
    //LOOP through each character of string
    for (counter = 0; counter < string.length; counter++){
        var currentCharacter = string[counter].toLowerCase();
        //IF {newString} is empty;
        if(!newString){
            //THEN {newString} equal {firstCharacter};
            newString = currentCharacter;
        }   
        //ELSE
        else {
            //IF current character equals {firstCharacter}
            if(currentCharacter == firstCharacter){
                //THEN newString += *
                newString += '*';
            }
        // ELSE 
        else {
            // THEN newString += current character
            newString += currentCharacter;
            }
        }
    }

    return newString;
}

var string = fixStart('bubble');
console.log(string);
string = fixStart('alexander');
console.log(string);
string = fixStart('goggle');
console.log(string);
