// var cityName =prompt("Enter City Name")

// if (cityName === "karachi") {
//     document.write(`Welcome to city of light`)
// }

//Question 2

// var gender = prompt("Enter your Gender")

// if (gender === "male") {
//     document.write(`Good Morning Sir`)
// }

// if (gender === "female") {
//     document.write(`Good Morning ma'am`)
// }

//Question 3

// var signalColor = prompt("Enter the signal color")

// if (signalColor === "red") {
//     document.write(`Must Stop`)
// }
// if (signalColor === "yellow") {
//     document.write(`Ready to move`)
// }
// if (signalColor === "green") {
//     document.write(`Move Now`)
// }

//Question 4

// var fuelQuantity = prompt("Enter your fuel quantity")

// if (fuelQuantity < "0.25") {
//  document.write(`Please refill the fuel in your car`)
//  }

//Question 5

// var a=4;
// if (++a===5) {
//     alert("Given condition for variable a is true")
// }
// var b=82;
//  if (b++===83) {
//      alert("Given condition for variable a is true")
//  }
//  else{
//     alert("Above condition is false")
//  }

//  var c=12;
//  if (c++===13) {
//      alert("Condition 1 is true")
//  }
//  if (c===13) {
//     alert("Condition 2 is ture")
//  }
//  if (++c===14){
//     alert("condition 3 is true")
//  }
//  if (c===14){
//     alert("condition 4 is true")
//  }

// var materialCost=20000;
// var labourCost=2000;
// var totalCost=materialCost+labourCost;

// if (totalCost===materialCost+labourCost){
//     alert("The cost Equals")
// }

// if (true){
//     alert("True")
// }

// if (false){
//     alert("False")
// }

// if ("car"<"cat"){
//     alert("car is smaller than cat")
// }

//Qustion 6

// document.write(`<h1>Mark Sheet</h1>`)

// var totalMarksOfThreeSub = +prompt("Enter your total Marks")
// document.write(`Total Marks : ${totalMarksOfThreeSub}<br>`)
// var obainedlMArksOfThreeSub = +prompt("Enter your Obtained Marks")
// document.write(`Obatined Marks : ${obainedlMArksOfThreeSub}<br>`)
// var percentageOfThreeSub = (obainedlMArksOfThreeSub/totalMarksOfThreeSub)*100
// document.write(`Percentage : ${percentageOfThreeSub}%<br>`)

// if (percentageOfThreeSub < "60") {
//     document.write(`Grade : Fail`)

// }

// if (percentageOfThreeSub >= "60"&&percentageOfThreeSub<"70") {
//     document.write(`Grade : B<br>`)
//     document.write(`Remarks : You need to improve`)

// }

// if (percentageOfThreeSub >= "70"&&percentageOfThreeSub<"80") {
//     document.write(`Grade : A`)

// }

// if (percentageOfThreeSub >= "80") {
//     document.write(`Grade : A-One`)

// }

//Qustion 7

// document.write(`<h1>GUESS GAME</h1>`)

// var secretNum = Math.floor(Math.random()*10) + 1;
// var userGuess = +prompt("Guess the num between (1 and 10):");
// document.write(`You Guess : ${userGuess}<br>`)

// if (userGuess === secretNum) {
//     document.write(`"Bingo! Correct answer"`);
// }
// else if ( userGuess === secretNum + 1 || userGuess === secretNum - 1 ) {
//     document.write(`"Close enough to the correct answer"`)
// }
// else {
//     document.write(`Sorry, the correct answer was ${secretNum}`)
// }

//Question 8

// var userGivenNum = +prompt(`Enter your Number`)

// if (userGivenNum % 3 ===0) {
//     alert(`yes your Num is Divisible by 3 \n and the Answer is ${userGivenNum / 3}`)
// }
// else{
//     alert(`your num ${userGivenNum} is not Divisible by 3`)
// }

//Question 9

// var userGivenNum = +prompt("ENter your number")

// if (userGivenNum % 2 === 0) {
//     alert(`Your number ${userGivenNum} is Even `)
// }
// else {
//     alert(`Your number ${userGivenNum} is Odd`)
// }


//Question 10

// var temperature = +prompt(`Enter the centigrate of Temperature`)
// document.write(`The Temperature is : ${temperature}<br>`)

// if (temperature > "10"&& temperature<="20") {
//     document.write(` “OMG! Today’s weather is so Cool.”`)
// }
// if (temperature>"20" && temperature<="30") {
//     document.write(`“Today’s Weather is cool.”`)
// }
// if (temperature>"30" && temperature<="40") {
//     document.write(`“The Weather today is Normal.”`)
// }
// if (temperature>="40") {
//     document.write(`“It is too hot outside.”`)
// }

//Question 11

// var firstNum = +prompt("Enter your First Num");
// document.write(`Your first num is : ${firstNum}<br>`);
// var secondNum = +prompt("Enter your Second Num");
// document.write(`Your second num is : ${secondNum}<br>`);
// var operator = prompt("Enter your Operator");
// document.write(`Your operation is ${firstNum} ${operator} ${secondNum}<br> `);

// if (
//   operator === "+" ||
//   operator === "-" ||
//   operator === "*" ||
//   operator === "/" ||
//   operator === "%"
// ) {
//   if (operator === "+") {
//     document.write(`Your Answer is ${firstNum + secondNum}`);
//   }
//   if (operator === "-") {
//     document.write(`Your Answer is ${firstNum - secondNum}`);
//   }
//   if (operator === "*") {
//     document.write(`Your Answer is ${firstNum * secondNum}`);
//   }
//   if (operator === "/") {
//     document.write(`Your Answer is ${firstNum / secondNum}`);
//   }
//   if (operator === "%") {
//     document.write(`Your Answer is ${firstNum % secondNum}`);
//   }
// } else {
//   alert("Invalid operator please use +,-,*,/,%");
// }
