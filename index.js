// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.

// var nam = prompt()
// var nam1 = prompt()
// document.write(`Welcome ${nam} ${nam1}`)


// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

// var myMb = prompt(" Enter Mob Name")
// var fav =myMb.length
// document.write(`My favorite phone is : ${myMb} <br> Lenght of String : ${fav} `)



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var nam = "Pakistani"
// document.write(`String : ${nam} <br> index of "n" ${nam.indexOf("n")}`)

// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.


// var nam = "Hello World"
// document.write(`String : ${nam} <br> index of "L" ${nam.lastIndexOf("l")}`)

// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser

// var nam = "Pakistani"
// document.write(`String : ${nam} <br> Character at index 3: ${nam.charAt(3)}`)



// 6. Repeat Q1 using string concat() method.
//  Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.


// var nam = prompt()
// var nam1 = prompt()
// document.write(`Welcome ${nam.concat(nam1)} ${nam1.concat(nam)}`)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceData = message.replaceAll("and", "&")
// document.write(`${replaceData}`)

// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// var num = "472"
// var num1 =472
// document.write(`Value : ${num} <br> Type : ${typeof num}<br> Value : ${num1} <br> Type : ${typeof num1} ` )

// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// var num = prompt('Enter URL')
// var repData = num.replace("www.", "")
// document.write(`URL: ${num} <br> Domain: ${repData}`)


// 11. Write a program that takes user input. Convert and show the
// input in capital letters

// var nam = prompt('Enter input')
// document.write(`User Input : ${nam} <br> Upper case : ${nam.toUpperCase()}`)


// 12. Write a program that takes user input. Convert and show the
// input in small letters.

// var nam = prompt('Enter input')
// document.write(`User Input : ${nam} <br> Lower case : ${nam.toLowerCase()}`)


// 13. Write a program that takes user input. Convert and show the
// input in title case


// var nam =  prompt('Enter input').trim();
// var fLeter = nam.charAt(0).toUpperCase();
// var baaki =nam.slice(1);
// document.write(`User Input : ${nam} <br> title case : ${fLeter}${baaki}`);


// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36
// var num1 = num.toString().replace(".", "")
// document.write(`Number : 35.36 <br> Result : ${num1}`)

// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?

// var a = '3'
// var b = '3'
// document.write(`a is 3 <br> b is 3 <br> a+b is ${a+b}`)

// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?

// var a = '3'
// var b = '3'
// document.write(`a is 3 <br> b is 3 <br> a-b is ${a-b}`)



// 17. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of [@ . , !], refer to ASCII table at the end of
// this document.
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// var nam = prompt()
// for (let index = 0; index < nam.length; index++) {
//     var code = nam.charCodeAt(index)
// console.log(code)
// if (code ==33 || code ==64 ) {
//     alert('Please Enter Valid User Name')
// }else if (code == 65 || code == 90) {
//     alert('Hello World')    
// } else if (code == 97 || code == 122){
//     alert('Hello World')
// } 
// }


// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:


// var item = prompt("What you Want").toLowerCase().trim()
// var item1 = ['cake', "apple", "pie", "cookie", "chips", "patties"] //item1.length=6-1

// for (let index = 0; index < item1.length; index++) {
//     console.log(item1);
//     if (item == item1[index]) {
//         document.write(`${item} is <b>Available<b> at index ${index}`)
//         break
//     }
//     else if (index == item1.length - 1 && item !== item1[item1.length - 1]) {
//         document.write(`We are Sorry ${item} is <b> not Available</b> in our bakary. `)
//     }
// }



// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.


// var nam = prompt('enter first element')
// var nam1 = prompt('enter Second element')
// if (nam > nam1) {
//     document.write(`${nam} is greater than ${nam1}`)
// }else
//  if (nam < nam1) {
//     document.write(`${nam} is Less than ${nam1}`)  
// }else
//     if (nam == nam1) {
//         document.write(`${nam} is equal ${nam1}`)
       
// }




// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var nam =  prompt('Enter input').trim();
// var fLeter = nam.charAt(0).toUpperCase();
// var baaki =nam.slice(1);
// document.write(`User Input : ${nam} <br> title case : ${fLeter}${baaki}`);


// var paswd = prompt("Enter Password It must at least 6 characters long").trim()
 
// console.log(paswd);
// if (!isNaN(paswd.charAt(0))) {
//     document.write(`Entered Password ${paswd} <br> Password can not begin with a number, <br> Please Enter Valid Password <br>` )
// }else if (paswd.length <= 6 ) {
//     alert("It must at least 6 characters long")
//     // document.write(`Enter Max 6 Number`)
// } else {
// document.write(`Welcome World`)
// }





// 21. Write a program to convert the following string to an array
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser.


//  var university = "University of Karachi"

//  var arr = university.split("")
// for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr[index].length; j++) {
//                 document.write(`${arr[index][j]}`)
//         document.write(`<br>`)   
//     }
    
// }


// 22. Write a program to display the last character of a user input.


// var inp = prompt("Enter input")
// var inp1 = inp.charAt(inp.length -1)
// document.write(`User Input: ${inp} <br> Last Character of input: ${inp1}`)



// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.


// var sen = "The quick brown fox jumps over the lazy dog".toLocaleLowerCase()
// var mySen = "the"

// var count = sen.split(mySen).length -1 
// document.write(`Text: ${sen} <br> There are 2 occurrences(s) of word ${count}`)



// 24. Write a program to count number of vowels & consonants in
// given string
//  var str = “Pakistan”;

// var str = 'Pakistan';
// var vol = ['a', 'e', 'i', 'o', 'u']
// var count = 0  

// for (let index = 0; index < str.length; index++) {
// if(str.includes(vol[index])){
//     count+=1
// }
// }
// console.log(count);

