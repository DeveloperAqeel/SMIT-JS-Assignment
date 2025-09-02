// chapter 6 to 9
//question > 1
// my number
let num = "10";
// my calculation
alert("my value is 10");
num++
alert(" Now my value is: (pre-Incerement)> " + num);

++num
alert("Now my value is: (pos-Incerement)> " + num);

--num
alert("Now my value is: (pos-decerement)> " + num);
num--
alert("Now my value is: (pre-decerement)> " + num);

alert("Result: \n My Result is:> " + num);

//question > 2

let a = 2, b = 1;
let result = --a - --b + ++b + b--;

alert("The value of a is: " + a);
alert("The value of b is: " + b);
alert("The value of result is: " + result);

//question> 3

let greetUser = prompt("Enter Your User Name:", "User Name")

alert("Most Welcome 🎉" + greetUser)

// question> 4.5

let userTable = prompt("Enter a number of table what you need ", "2,3,4,5,6 only")

if(userTable == 2){
    alert("2 x 1 = " + 2 * 1 + "\n" + "2 x 2 = " + 2 * 2 + "\n" + "2 x 3 = " + 2 * 3 + "\n" + "2 x 4 = " + 2 * 4 + "\n" + "2 x 5 = " + 2 * 5 + "\n" + "2 x 6 = " + 2 * 6 + "\n" + "2 x 7 = " + 2 * 7 + "\n" + "2 x 8 = " + 2 * 8  + "\n" + "2 x 9 = " + 2 * 9 + "\n" + "2 x 10 = " + 2 * 10 + "\n")
}
else if(userTable == 3){
    alert("3 x 1 = " + 3 * 1 + "\n" + "3 x 2 = " + 3 * 2 + "\n" + "3 x 3 = " + 3 * 3 + "\n" + "3 x 4 = " + 3 * 4 + "\n" + "3 x 5 = " + 3 * 5 + "\n" + "3 x 6 = " + 3 * 6 + "\n" + "3 x 7 = " + 3 * 7 + "\n" + "3 x 8 = " + 3 * 8  + "\n" + "3 x 9 = " + 3 * 9 + "\n" + "3 x 10 = " + 3 * 10 + "\n")
}
else if(userTable == 4){
    alert("4 x 1 = " + 4 * 1 + "\n" + "4 x 2 = " + 4 * 2 + "\n" + "4 x 3 = " + 4 * 3 + "\n" + "4 x 4 = " + 4 * 4 + "\n" + "4 x 5 = " + 4 * 5 + "\n" + "4 x 6 = " + 4 * 6 + "\n" + "4 x 7 = " + 4 * 7 + "\n" + "4 x 8 = " + 4 * 8  + "\n" + "4 x 9 = " + 4 * 9 + "\n" + "4 x 10 = " + 4 * 10 + "\n")
}
else if(userTable == 5){
    alert("5 x 1 = " + 5 * 1 + "\n" + "5 x 2 = " + 5 * 2 + "\n" + "5 x 3 = " + 5 * 3 + "\n" + "5 x 4 = " + 5 * 4 + "\n" + "5 x 5 = " + 5 * 5 + "\n" + "5 x 6 = " + 5 * 6 + "\n" + "5 x 7 = " + 5 * 7 + "\n" + "5 x 8 = " + 5 * 8  + "\n" + "5 x 9 = " + 5 * 9 + "\n" + "5 x 10 = " + 5 * 10 + "\n")
}
else if(userTable == 6){
    alert("6 x 1 = " + 6 * 1 + "\n" + "6 x 2 = " + 6 * 2 + "\n" + "6 x 3 = " + 6 * 3 + "\n" + "6 x 4 = " + 6 * 4 + "\n" + "6 x 5 = " + 6 * 5 + "\n" + "6 x 6 = " + 6 * 6 + "\n" + "6 x 7 = " + 6 * 7 + "\n" + "6 x 8 = " + 6 * 8  + "\n" + "6 x 9 = " + 6 * 9 + "\n" + "6 x 10 = " + 6 * 10 + "\n")
}
else{
    alert("5 x 1 = " + 5 * 1 + "\n" + "5 x 2 = " + 5 * 2 + "\n" + "5 x 3 = " + 5 * 3 + "\n" + "5 x 4 = " + 5 * 4 + "\n" + "5 x 5 = " + 5 * 5 + "\n" + "5 x 6 = " + 5 * 6 + "\n" + "5 x 7 = " + 5 * 7 + "\n" + "5 x 8 = " + 5 * 8  + "\n" + "5 x 9 = " + 5 * 9 + "\n" + "5 x 10 = " + 5 * 10 + "\n")
}

//queation> 6

let subject1 = prompt("Enter your Subject1 Name: ");
let subject2 = prompt("Enter your Subject2 Name: ");
let subject3 = prompt("Enter your Subject3 Name: ");

let totalMarks = 100;

let obtMarks1 = +prompt("Enter your obtained marks for " + subject1 + ":");
let obtMarks2 = +prompt("Enter your obtained marks for " + subject2 + ":");
let obtMarks3 = +prompt("Enter your obtained marks for " + subject3 + ":");

let sub1Percentage = ((obtMarks1 / totalMarks) * 100).toFixed(2);
let sub2Percentage = ((obtMarks2 / totalMarks) * 100).toFixed(2);
let sub3Percentage = ((obtMarks3 / totalMarks) * 100).toFixed(2);

let totalObtained = obtMarks1 + obtMarks2 + obtMarks3; 
let totalPer = (totalObtained / (totalMarks * 3) * 100).toFixed(2);

alert("Subject     Total Marks     Obtained Marks     Percentage\n" + subject1 + "                    " + totalMarks + "                 " + obtMarks1 + "                           " + sub1Percentage + "%\n" + subject2 + "                    " + totalMarks + "                 " + obtMarks2 + "                           " + sub2Percentage + "%\n" + subject3 + "                    " + totalMarks + "                 " + obtMarks3 + "                           " + sub3Percentage + "%\n" + "Total             " + (totalMarks * 3) + "                 " + totalObtained + "                           " + totalPer + "%")

// DONE
