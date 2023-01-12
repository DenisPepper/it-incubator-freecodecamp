/* 002 creates a variable called ourName. In JavaScript we end statements with semicolons. 
Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
 */

var myName;


/* 003 Assign the value 7 to variable a. */

// Setup
var a;

// Only change code below this line

a = 7;


/* 004 Assign the contents of a to variable b. */
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;


/* 005 Define a variable a with var and initialize it to a value of 9. */
var a = 9;


/* 006 Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively. */
const myFirstName = "D" 
const myLastName = "P" 



/* Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined. */
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";



/* Modify the existing declarations and assignments so their names use camelCase. */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;




/* Update the code so it only uses the let keyword. */
let catName = "Oliver";
let catSound = "Meow!";




/* Change the code so that all variables are declared using let or const. 
Use let when you want the variable to change, and const when you want the variable to remain constant. 
Also, rename variables declared with const to conform to common practices. 
Do not change the strings assigned to the variables. */

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line




/* Change the 0 so that sum will equal 20. */
const sum = 10 + 10; 




/* Change the 0 so the difference is 12. */
const difference = 45 - 33;




/* Change the 0 so that product will equal 80. */
const product = 8 * 10;




/* Change the 0 so that the quotient is equal to 2 */
const div = 66 / 33;




/* Change the code to use the ++ operator on myVar. */
let myVar = 87;

// Only change code below this line
myVar = ++myVar;





/* Change the code to use the -- operator on myVar. */
let myDecVar = 11;

// Only change code below this line
myDecVar = --myDecVar;




/* Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7). */
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 3.14






/* Change the 0.0 so that product will equal 5.0. */
const product1 = 2.0 * 2.5;





/* Change the 0.0 so that quotient will equal to 2.2. */
const quotient = 4.4 / 2.0; // Change this line




/* Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator. */
const remainder = 11 % 3;




/* Convert the assignments for a, b, and c to use the += operator */
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;





/*Convert the assignments for a, b, and c to use the -= operator. */

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;





/* Convert the assignments for a, b, and c to use the *= operator. */
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;






/* Convert the assignments for a, b, and c to use the /= operator. */
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;




/* Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see: 
I am a "double quoted" string inside "double quotes".
*/
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";




/* Change the provided string to a string with single quotes at the beginning and end and no escape characters. 
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
*/
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';



/*
Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. 
You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words. 
*/
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";


/*
Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
*/
const myStr3 = "This is the start." + " This is the end.";



/*
Build myStr over several lines by concatenating these two strings: This is the first sentence. 
and This is the second sentence. using the += operator. 
Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. 
Start by assigning the first string to myStr, then add on the second string.
*/
let myStr4 = "This is the first sentence.";
myStr += " This is the second sentence.";




/*
Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
*/
const myName = "Den";
const myStr5 = "My name is " + maName + " and I am well!";




/*
Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
*/
const someAdjective = "Hello";
let myStr11 = "Learning to code is ";
myStr11 += someAdjective;



/*
Use the .length property to set lastNameLength to the number of characters in lastName.
*/
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;





/*
Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
*/
// Setup
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName1[0]; // Change this line





/*
Correct the assignment to myStr so it contains the string value of Hello World 
using the approach shown in the example above.
*/

// Setup
let myStr22 = "Jello World";

// Only change code below this line
myStr22 = "Hello World"; // Change this line
// Only change code above this line



/*
Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
*/
// Setup
const lastName33 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName33[2]; // Change this line




/*
Use bracket notation to find the last character in the lastName variable.
*/
// Setup
const lastName44 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName44[lastName44.length - 1]; // Change this line




/*
Use bracket notation to find the second-to-last character in the lastName string.
*/
// Setup
const lastName55 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName55[lastName55.length - 2]; // Change this line




/*
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line




/*
Modify the new array myArray so that it contains both a string and a number (in that order).
*/
// Only change code below this line
const myArray = ["str", 0];




/*
Create a nested array called myArray.
*/
// Only change code below this line
const myArray1 = [["Bulls", 23], ["White Sox", 45]];




/*
Create a variable called myData and set it to equal the first value of myArray using bracket notation.
*/
const myArray2 = [50, 60, 70];

const myData = myArray2[0];




/*
Modify the data stored at index 0 of myArray to a value of 45.
*/
// Setup
const myArray3 = [18, 64, 99];

// Only change code below this line
myArray3[0] = 45;




/*
Using bracket notation select an element from myArray such that myData is equal to 8.
*/
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData1 = myArray4[2][1];





/*
Push ["dog", 3] onto the end of the myArray variable.
*/
// Setup
const myArray5 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray5.push(["dog", 3]);





/*
Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
*/
// Setup
const myArray6 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray6.pop();



/*
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/
// Setup
const myArray7 = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray1 = myArray7.shift();





/*
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
*/
// Setup
const myArray8 = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray8.unshift(["Paul", 35]);




/*
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
*/
const myList = [];
myList.push(['cofee', 0]);
myList.push(['bread', 0]);
myList.push(['milk', 0]);
myList.push(['tomato', 0]);
myList.push(['potato', 0]);




/*
1 Create a function called reusableFunction which prints the string Hi World to the dev console.
2 Call the function.
*/
const reusableFunction  = () => console.log('Hi World');
reusableFunction();




/*
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
*/
const functionWithArgs = (a = 0, b = 0) => console.log(a + b);
functionWithArgs(1, 2);




/*
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/
const timesFive = num => num * 5;







/*
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}






/*
The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.
*/
function myLocalScope() {
    // Only change code below this line
    let myVar5;
    console.log('inside myLocalScope', myVar5);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar5);





  /*
  Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
  */
 // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = 'sweater';
  // Only change code above this line
  return outerWear;
}

myOutfit();






/*
Create a function addFive without any arguments. 
This function adds 5 to the sum variable, but its returned value is undefined.
*/
// Setup
let sum4 = 0;

function addThree() {
  sum4 = sum4 + 3;
}

// Only change code below this line
const addFive = () => {
  sum4 +=5;
};

// Only change code above this line

addThree();
addFive();





/*
Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line
*/
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values
*/
function welcomeToBooleans() {
  return true; // Change this line
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements
*/
function trueOrFalse(wasThatTrue) {
  return wasThatTrue ? "Yes, that was true" : "No, that was false";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator
*/
function testEqual(val) {
  if (val === 12) { 
    return "Equal";
  }
  return "Not Equal";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator
*/
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values
*/
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator
*/
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator
*/
function testStrictNotEqual(val) {
  if (val !==17) { 
    return "Not Equal";
  }
  return "Equal";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator
*/
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) { 
  }

  return "10 or Under";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator
*/
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator
*/
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator
*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator
*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val <10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements
*/
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

    return "Between 5 and 10";
  }
};



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements
*/
function orderMyLogic(val) {
  if (val < 10 && val >=5 ) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements
*/
function testSize(num) {
  // Only change code below this line

  if (num < 5) {
  return 'Tiny';
} else if (num < 10) {
  return 'Small';
} else if (num < 15) {
  return 'Medium';
} else if (num < 20) {
  return 'Large';
} else if (num >= 20) {
  return 'Huge';
}
  // Only change code above this line
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements
*/
function testSize(num) {
  // Only change code below this line

  if (num < 5) {
  return 'Tiny';
} else if (num < 10) {
  return 'Small';
} else if (num < 15) {
  return 'Medium';
} else if (num < 20) {
  return 'Large';
} else if (num >= 20) {
  return 'Huge';
}
  // Only change code above this line
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
*/

function golfScore(par, strokes) {
  // Only change code below this line
let result = "";

if (strokes === 1) {
  result = "Hole-in-one!";
} else if (strokes <= par - 2	) {
  result = "Eagle";
} else if (strokes === par) {
  result = "Par";  
} else if (strokes === par - 1) {
  result = "Birdie";
} else if (strokes === par + 1) {
  result = "Bogey";
} else if (strokes === par + 2) {
  result = "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}

  return result;
  // Only change code above this line
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements
*/
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
   case 2:
    answer = "beta";
    break;
     case 3:
    answer = "gamma";
    break;
     case 4:
    answer = "delta";
    break;
}
  // Only change code above this line
  return answer;
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}

  // Only change code above this line
  return answer;
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements
*/
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
    case 7:
  case 8:
  case 9:
    answer = "High";
    break;

}


  // Only change code above this line
  return answer;
}



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch
*/
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
   answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions
*/
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions
*/
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
*/
let count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count += 1;
    break;
  case 7:
  case 8:
  case 9:
    break;
  case 10:
  case "J":   
  case "Q":
  case "K":
  case "A":
  count -= 1;
    break;  
}

  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects
*/
const myDog = {
  // Only change code below this line
name: "Dick",
legs: 4,
tails: 4,
friends: ['1', '2'],

  // Only change code above this line
};



/* access to object props */
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation
*/
// Setup
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables
*/
// Setup
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties
*/
// Setup
const myDog1 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder';



/*
new props to object
*/
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";



/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object
*/
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;