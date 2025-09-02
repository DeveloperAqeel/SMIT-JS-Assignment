//chapter 9 to 11
//question> 1


let userCity = prompt("Enter your City Name: ","your city name")

if(userCity == "karachi"){
    alert("Karachi the city of light")
}
else if(userCity == "lahore"){
    alert("Lahore the Heart of Pakistan")
}
else if(userCity == "Islamabad"){
    alert("Islamabad the Capital of Peace")
}
else if(userCity == "Rawalpindi"){
    alert("Rawalpindi the Gateway to the North")
}
else if(userCity == "Multan"){
    alert("Multan the City of Saints")
}
else if(userCity == "Peshawar"){
    alert("Peshawar the City of Flowers")
}
else if(userCity == "Quetta"){
    alert("Quetta the Fruit Garden of Pakistan")
}
else if(userCity == "Faisalabad"){
    alert("Faisalabad the Manchester of Pakistan")
}
else if(userCity == "Sialkot"){
    alert("Sialkot the City of Sports")
}
else if(userCity == "Hyderabad"){
    alert("Hyderabad the City of Pearls")
}
else
    {alert("Your city is not found")}

//question> 2

let userGender = prompt("Please enter your gender: ")

if(userGender == "male"){
    alert("Good Morning Sir. ")
}

else if(userGender == "female"){
    alert("Good Morning Ma'am. ")
}
else{
    alert("Please enter your correct gender: ")
}

//question> 3

let userColor = prompt("Enter traffic signal color: ", "signal color")

if(userColor == "red"){
    alert("Must Stop")
}
else if(userColor == "yellow"){
    alert("Ready to move")
}
else if(userColor == "green"){
    alert("Move Now")
}
else{
    alert("Please enter correct color: ")
}

//question> 4

let userCarFuel = prompt("Enter your fuel quantity: ", "fuel quantity")

if(userCarFuel < 0.25){
    alert("Please refill the fuel in your car")
}

// question> 5

let a = 4;
if (++a === 5){
    alert("a: given condition for variable a is true");
}

let b = 82;
if (b++ === 83){
    alert("b: given condition for variable b is true");
}

let c = 12;
if (c++ === 13){ 
    alert("c1: condition 1 is true"); 
}
if (c === 13){ 
    alert("c2: condition 2 is true"); 
}
if (++c < 14){ 
    alert("c3: condition 3 is true"); 
}
if (c === 14){ 
    alert("c4: condition 4 is true"); 
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("d: The cost equals");
}

if (true){ 
    alert("e: True"); 
}
if (false){ 
    alert("e: False"); 
}

if("car" < "cat"){ 
    alert("f: car is smaller than cat"); 
}

//question> 6

let subject1 = prompt("Enter your Subject1 Name: ");
let subject2 = prompt("Enter your Subject2 Name: ");
let subject3 = prompt("Enter your Subject3 Name: ");

let totalMarks = 100;

let obtMarks1 = +prompt("Enter your obtained marks for " + subject1 + ":");
let obtMarks2 = +prompt("Enter your obtained marks for " + subject2 + ":");
let obtMarks3 = +prompt("Enter your obtained marks for " + subject3 + ":");

let totalObtained = obtMarks1 + obtMarks2 + obtMarks3; 
let totalPer = (totalObtained / (totalMarks * 3) * 100).toFixed(1);

let grade, remarks;

if(totalPer >= 80){
    grade = "A+";
    remarks = "Excellent";
} else if(totalPer >= 70){
    grade = "A";
    remarks = "Very Good";
} else if(totalPer >= 60){
    grade = "B";
    remarks = "Good";
} else if(totalPer >= 50){
    grade = "C";
    remarks = "You need improvement";
} else{
    grade = "F";
    remarks = "Fail";
}

alert(
    "Marks Sheet \n\n" +
    "Total Marks: " + (totalMarks * 3) + "\n" +
    "Marks Obtained: " + totalObtained + "\n" +
    "Percentage: " + totalPer + "%\n" +
    "Grade: " + grade + "\n" +
    "Remarks: " + remarks
);
let secretNumber = 7;
let userGuess = +prompt("Guess the secret number between 1 and 10:");

if(userGuess === secretNumber){
    alert("Bingo! Correct answer");
} 
else if(userGuess + 1 === secretNumber || userGuess - 1 === secretNumber){
    alert("Close enough to the correct answer");
} 
else {
    alert("Wrong guess. Try again!");
}

let num = +prompt("Enter a number to check if it is divisible by 3:");
if(num % 3 === 0){
    alert(num + " is divisible by 3");
} else {
    alert(num + " is not divisible by 3");
}

let evenOddNum = +prompt("Enter a number to check if it is even or odd:");
if(evenOddNum % 2 === 0){
    alert(evenOddNum + " is even");
} else {
    alert(evenOddNum + " is odd");
}

let temp = +prompt("Enter the temperature:");
if(temp > 40){
    alert("It is too hot outside.");
} else if(temp > 30){
    alert("The Weather today is Normal.");
} else if(temp > 20){
    alert("Today's Weather is cool.");
} else if(temp > 10){
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold today.");
}

let firstNum = +prompt("Enter first number:");
let secondNum = +prompt("Enter second number:");
let operator = prompt("Enter operation (+, -, *, /, %):");

if(operator === "+"){
    alert("Result: " + (firstNum + secondNum));
} else if(operator === "-"){
    alert("Result: " + (firstNum - secondNum));
} else if(operator === "*"){
    alert("Result: " + (firstNum * secondNum));
} else if(operator === "/"){
    alert("Result: " + (firstNum / secondNum));
} else if(operator === "%"){
    alert("Result: " + (firstNum % secondNum));
} else {
    alert("Invalid operator");
}
