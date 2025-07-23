// REVERSE A STRING
let str = "hellow";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);

// *********************************************************************************************
palindrome 
let n = 534;
let temp = n;
function pallindrome(n){
    if(String(temp) == String(n).split('').reverse().join('')){
        console.log("palindrome");
    }
    else{
        console.log("not pallindrome");
    }
}
pallindrome(n)

// alternative for pallindrome
function isNumberPalindrome(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;              
    reversed = reversed * 10 + digit;  
    num = Math.floor(num / 10);        
  }

  return original === reversed;
}
console.log(isNumberPalindrome(121));    
console.log(isNumberPalindrome(12321));  
console.log(isNumberPalindrome(123));     


// *********************************************************************************************


// longest word in a sequence 
let seq = "This is Subham from Odisha. Currently I am Working as Associate Trainee at EngineersMind.";
seq = seq.split(".").join("");
let words = seq.split(" ");
let longest = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log("Longest word:", longest);
console.log("Length:", longest.length);

// *********************************************************************************************


// remove duplicates form array 
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }

    return unique;
}
let res = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(res);

// *********************************************************************************************


// function to check if its anagram
function Anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}

console.log(Anagram("listen", "silent"));
console.log(Anagram("hello", "world"));

// *********************************************************************************************


// fetch api using async and await 
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("User Data:", data);
    } catch (e) {
        console.log("Error fetching data:", e);
    }
}
await fetchData("https://jsonplaceholder.typicode.com/users");

// *********************************************************************************************



class Student {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  greet() {
    console.log(`Hello, I'm ${this.name} and I study ${this.subject}`);
  }
}
const student = new Student("Alice", "Math");
student.greet();


// *********************************************************************************************



// flatten array : [[1,[2,3],4],5]
function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

// *********************************************************************************************


// capitalize the first letter of each word 
function capitalize(string) {
    return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalize("hello world from javascript"));


console.log("hello".slice(0,3));