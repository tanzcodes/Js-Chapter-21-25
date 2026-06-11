// ==========================================
// CHAPTER 21 - 25: STRING METHODS (FIXED CODE)
// ==========================================

// --- Question 1: Username greeting ---
document.write("<h3>Question 1: Full Name Greeting</h3>");
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "! Welcome to the site.<br><hr>");


// --- Question 2: Mobile model length ---
document.write("<h3>Question 2: Mobile Model Length</h3>");
var mobileModel = prompt("Enter your favorite mobile phone model:");
var modelLength = mobileModel.length;
document.write("Your favorite phone is: " + mobileModel + "<br>");
document.write("Length of string: " + modelLength + "<br><hr>");


// --- Question 3: Find index of letter 'n' ---
document.write("<h3>Question 3: Index of 'n' in Pakistani</h3>");
var nationality = "Pakistani";
var indexN = nationality.indexOf("n");
document.write("String: " + nationality + "<br>");
document.write("Index of 'n': " + indexN + "<br><hr>");


// --- Question 4: Find last index of letter 'l' ---
document.write("<h3>Question 4: Last Index of 'l' in Hello World</h3>");
var greetStr = "Hello World";
var lastIndexL = greetStr.lastIndexOf("l");
document.write("String: " + greetStr + "<br>");
document.write("Last index of 'l': " + lastIndexL + "<br><hr>");


// --- Question 5: Character at 3rd index ---
document.write("<h3>Question 5: Character at Index 3</h3>");
var country = "Pakistani";
var charAtThree = country.charAt(3);
document.write("String: " + country + "<br>");
document.write("Character at index 3: " + charAtThree + "<br><hr>");


// --- Question 6: String concatenation using concat() ---
document.write("<h3>Question 6: Greeting using concat()</h3>");
var fName = prompt("Enter first name for concat:");
var lName = prompt("Enter last name for concat:");
var combinedName = fName.concat(" ", lName);
document.write("Hello, " + combinedName + "! Welcome.<br><hr>");


// --- Question 7: Replace word segment ---
document.write("<h3>Question 7: Word Replacement</h3>");
var cityStr = "Hyderabad";
var replacedCity = cityStr.replace("Hyder", "Islam");
document.write("City: " + cityStr + "<br>");
document.write("After replacement: " + replacedCity + "<br><hr>");


// --- Question 8: Replace all instances of 'and' ---
document.write("<h3>Question 8: Replace All 'and' with '&'</h3>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
// Using global regex replacement to change all instances
var updatedMessage = message.replace(/and/g, "&");
document.write("Original: " + message + "<br>");
document.write("Modified: " + updatedMessage + "<br><hr>");


// --- Question 9: Convert string value to integer type ---
document.write("<h3>Question 9: Value Type Conversion</h3>");
var typeStr = "472";
document.write("Value: " + typeStr + " (Type: " + typeof(typeStr) + ")<br>");
var typeNum = Number(typeStr);
document.write("Value: " + typeNum + " (Type: " + typeof(typeNum) + ")<br><hr>");


// --- Question 10: Uppercase format transformation ---
document.write("<h3>Question 10: Transform to Uppercase</h3>");
var userInputUpper = prompt("Enter some text to convert to UPPERCASE:");
document.write("User input: " + userInputUpper + "<br>");
document.write("Upper case: " + userInputUpper.toUpperCase() + "<br><hr>");


// --- Question 11: Titlecase format transformation ---
document.write("<h3>Question 11: Transform to Title Case</h3>");
var userInputTitle = prompt("Enter text for Title Case transformation:");
if (userInputTitle) {
    var titleCased = userInputTitle.charAt(0).toUpperCase() + userInputTitle.slice(1).toLowerCase();
    document.write("User input: " + userInputTitle + "<br>");
    document.write("Title case: " + titleCased + "<br><hr>");
}


// --- Question 12: Remove decimal point from number variable ---
document.write("<h3>Question 12: Remove Decimal dot</h3>");
var numVar = 35.36;
document.write("Number: " + numVar + "<br>");
var strResult = numVar.toString().replace(".", "");
document.write("Result String: " + strResult + "<br><hr>");


// --- Question 13: Validate username input against symbols ---
document.write("<h3>Question 13: Username Validation</h3>");
var usernameInput = prompt("Enter username:");
var isValid = true;

if (usernameInput) {
    for (var i = 0; i < usernameInput.length; i++) {
        var charCode = usernameInput.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            isValid = false;
            break;
        }
    }
    if (!isValid) {
        alert("Please enter a valid username without special characters (!, ., , or @)");
        document.write("Username status: Invalid username entered.<br><hr>");
    } else {
        document.write("Username status: Valid username '" + usernameInput + "' accepted.<br><hr>");
    }
}


// --- Question 14: Case-insensitive search inside array ---
document.write("<h3>Question 14: Bakery Item Search</h3>");
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

if (itemSearch) {
    var searchLower = itemSearch.toLowerCase();
    var foundIndex = bakeryItems.indexOf(searchLower);
    
    if (foundIndex !== -1) {
        document.write(itemSearch + " is <b>available</b> at index " + foundIndex + " in our bakery.<br><hr>");
    } else {
        document.write("We are sorry. " + itemSearch + " is <b>not available</b> in our bakery.<br><hr>");
    }
}


// --- Question 16: Split string to individual items ---
document.write("<h3>Question 16: Array Tokenization</h3>");
var universityStr = "University of Karachi";
var splitArray = universityStr.split("");

for (var k = 0; k < splitArray.length; k++) {
    document.write(splitArray[k] + "<br>");
}
document.write("<hr>");


// --- Question 17: Display last index character ---
document.write("<h3>Question 17: Last Character Display</h3>");
var lastCharInput = prompt("Enter input text to read its last index:");
if (lastCharInput) {
    var finalCharacter = lastCharInput.charAt(lastCharInput.length - 1);
    document.write("User input: " + lastCharInput + "<br>");
    document.write("Last character of input: " + finalCharacter + "<br><hr>");
}


// --- Question 18: Count substring occurrences ---
document.write("<h3>Question 18: Count string segment hits</h3>");
var sentenceStr = "The quick brown fox jumps over the lazy dog";
// Regular expression with case-insensitive /i flag
var matchCount = (sentenceStr.match(/the/gi) || []).length;
document.write("Text: " + sentenceStr + "<br>");
document.write("There are " + matchCount + " occurrence(s) of word 'the'<br><br>");