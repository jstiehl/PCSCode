// Yahtzee example
var diceRollResult;
          // Let's place yahtzee!!!

          for (var i = 1; i <= 5; i += 1) {
            diceRollResult = Math.floor(6 * Math.random() + 1);
            // diceRollResult is a random number between 1 and 6
            console.log("Dice #" + i + ": " + diceRollResult);
          }

// Sometimes Y Challenge -- changed it use a function call.
console.log("\nPart 6 Output:");
var arbString = "your yesterday yard yearns yearly";

revRefactor(arbString);

function revRefactor(string) {
var revString = "";
console.log(string);
for (var i = string.length; i > 0; i--){

 	switch(string[i-1].toLowerCase()){
 	case "a":
 	case "e":
 	case "i": 
 	case "o":
 	case "u":
 	break;
 	case "y":
 	    // Because sometimes y!
 		if (Math.random() > 0.5){
 			revString += string[i-1];
 		}
 	break;
 	default:
 	revString += string[i-1];
 }
 }
console.log(revString);
}


// David example for writing a function

// Function declarations are hoisted to the top of their scope.
// So functions can be called before they are declared.
function addOneToANumber (number){

	var result;  // local variable.  it has "function" scope
	result = number + one;  // number is also a local variable
	return result;

}


var one = 1;  // top-level variable -- this will be visible inside the function
var x = 8;
var y = addOneToANumber(x);

console.log(y);


// Converting degrees F to degrees C
// F = 9/5*C + 32;
var currentTempInF = 38;
console.log('The current temperature is '+currentTempInF + " degrees F");
console.log('The current temperature in Celsius is ' + FtoC(currentTempInF));

function FtoC (degreeF){
	var cTemp = (degreeF-32)*5/9;

	return cTemp.toFixed(1);
}





