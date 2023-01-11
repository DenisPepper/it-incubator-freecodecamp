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
