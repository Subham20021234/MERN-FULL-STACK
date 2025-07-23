//  print even numbers
let i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}


// print hellow 5 times 
let c = 1;
do {
  console.log("Welcome!");
  c++;
} while (c <= 5);


// break in loops
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// output:  [Running] node "c:\Users\SubhamSovenduDas\OneDrive - engineersmind\Desktop\MERN_TRAINING\DAY-4\problems.js"
// 1
// 2
// 3
// 4



// print 1 to 10 skipping 5
for (let i = 1; i <= 10; i++){
    if(i==5)continue
    console.log(i);
}
// output:[Running] node "c:\Users\SubhamSovenduDas\OneDrive - engineersmind\Desktop\MERN_TRAINING\DAY-4\problems.js"
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10






// nested loop for pattern
for (let i = 1; i <= 3; i++) {
  console.log(i, i);
}



// difference between == and ===
console.log(5 == "5");   // true (checks only the value)
console.log(5 === "5");  // false (checks the value and type)






// logical AND(&&) and logical OR(||)
let a = 10, b = 5;
// &&(AND): all conditions must be true
if (a > 5 && b < 10)
console.log("Both are true");
// ||(OR): at least one condition is true
if (a > 5 || b > 10)
console.log("One of them is true");





// nummber is divisble by 3 or 5
let z = 12;
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Divisible by 3 and 5");
}
else{
    console.log("not divisible");
}






// modulus perator(%)
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
// output:[Running] node "c:\Users\SubhamSovenduDas\OneDrive - engineersmind\Desktop\MERN_TRAINING\DAY-4\problems.js"
// 4
// 8
// 12
// 16
// 20





// vote eligibilty
let age = 17
vote = (age >= 18 ? "ELIGIBLE TO VOTE":"NOT ELIGIBLE")
console.log(vote);


// Grading System 
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");    
} 
else if (marks >= 75) {
  console.log("Grade B");
} 
else if (marks >= 50) {
  console.log("Grade C");
} 
else {
  console.log("Grade F");
}




// output (12)
// let x = 5;
// console.log(x++ + ++x);




// check if a number is positive or negative or zero
let nm = 5
if(num === 0){
    console.log("number is zero");
}
else if (num > 0) {
    console.log("Positive number");
}
else {
    console.log("negative number");
}



// ternary operator 
let num = 5 
r = (num % 2 == 0 ? "EVEN":"ODD")
console.log(r);







// nested if to print numbr is even and greater than 10
let n = 8
if(num % 2 == 0){
    if(num > 10){
        console.log("number is greater than 10 and is also even");
    }
    console.log("number did not satisfy the condition");
}



// loggedIn using ternary operators 
// let isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("Welcome back!");
// } else {
//   console.log("Please log in.");
// }


let isLoggedIn = true
login = (isLoggedIn ? "welcome Back" : "Please Loggin")
console.log(login);




// print 1 to 10 on same line 
let op = ""
for(let i = 1; i <=10 ;i++){
    op += " " + i
}
console.log(op.trim());


// 