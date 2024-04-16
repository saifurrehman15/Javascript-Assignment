//Q1


// var now = new Date();

// function time(tell){
//     document.write(tell);
// }

// time(now);


//Q2

// var userInpt = prompt("Enter first Name");
// var userInpt2 = prompt("Enter last name");

// function greet(firstLastName){
//         document.write(firstLastName);
// }

// greet(userInpt + " " + userInpt2);

//Q3


// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));

// function sum(plus){
//     document.write(plus);
// }

// sum(num1 + num2);


//Q4

// var num3 = parseInt(prompt("Enter first number"));
// var oper = prompt("Enter Operator");
// var num4 = parseInt(prompt("Enter second number"));

// function sumWithOperator(Evaluation) {
//     document.write(Evaluation);
// }
// if (oper === "+") {
//     sumWithOperator(num3 + num4);
// }
// else if (oper === "-") {
//     sumWithOperator(num3 - num4);

// }

// else if (oper === "*") {
//     sumWithOperator(num3 * num4);

// }
// else if (oper === "/") {
//     sumWithOperator(num3 / num4);

// }

// else if (oper === "%") {
//     sumWithOperator((num3 * 100) / num4 + "%");

// }



//Q5


// var square = parseInt(prompt("Enter Square root of"));

// function sq(root){
//     document.write(root);
// }

// sq(square * square);



//Q6

// var factorial = parseInt(prompt("Enter number"));
// document.write("<h1>Factorial of " + factorial + "</h1>")

// function fac(facNum) {
//     document.write(facNum);
// }

// for (var i = factorial - 1; i >= 0; i--) {

//     fac(factorial + "x" + i + "=" + factorial * i + "<br>");

// }



//Q7


// var firstNum = parseInt(prompt("Enter number"));
// var lastNum = parseInt(prompt("Enter Last Number"));


// function count(inc) {
//     document.write(inc);
// }

// for (var i = firstNum; i <=lastNum; i++) {
//     count(i + "<br>");
// }



//Q8


// var base = parseInt(prompt("Enter Base"));
// var perpendicular = parseInt(prompt("Enter Perpendicular"));

// function outer(base,perpendicular) {
//     function inner(base,perpendicular) {
//     return Math.sqrt(base + perpendicular);
//     }
//     var sum = Math.pow(base,2) +  Math.pow(perpendicular,2);

//  return inner(sum,sum)
// }

// var lastCal=outer(base,perpendicular)

// document.write("Hypotenuse = " + lastCal)



//Q9



// var height = 20;
// var width = 15;

// function areaOfRectangle(width, height) {
//     return width * height
// }

// var val = areaOfRectangle(width, height);
// document.write("By Value method : " + val + "<br>")

// var val1 = parseInt(prompt("Enter width"));
// var val2 = parseInt(prompt("Enter height"))

// function areaOfRectangleVar(val1, val2) {
//     return val1 * val2;
// }

// document.write("By Variables Method : "+areaOfRectangleVar(val1, val2))


//Q10

// var palindrome = prompt("Enter palindrome Words");

// var my = palindrome.slice(0,1).toUpperCase();
// var my2 = palindrome.slice(1).toLowerCase();
// var convert = my + my2;

// function palin(palindrome) {
//     return  palindrome.split("").reverse("").join("")
// }
// var con = palin(palindrome);
// var upp = con.slice(0,1).toUpperCase();
// var low = con.slice(1).toLowerCase();
// var merge = upp + low;
// if (convert === merge) {
//     alert("match")
// } else {
//     alert(" not match")

// }



//Q11


// var text = "the quick brown fox";
// function upperCase(text) {
//     var words = text.split(" ");
//     var result = [];
//     for (var i = 0; i < words.length; i++) {
//         var firstLetter = words[i].slice(0, 1).toUpperCase();
//         var rema = words[i].slice(1).toLowerCase();
//         result.push(firstLetter + rema + " ");
//     }
//     return result.join("")
// }


// document.write(upperCase(text))


//Q12

// var text = "Web Development Tutorial";
// function upperCase(text) {
//     var words = text.split(" ");
//     var assume = words[0].length;

//     for (var i = 0; i < words.length; i++) {
//         var wordl = words[i];
//         if(assume < wordl.length){

//           assume= wordl;
//         }
//     }
//     return assume;
// }



// document.write(upperCase(text))


//Q13



// var letter = "JSResourcesS.com";
// var str = "o"



// function occurences(str, letter) {
//     var counter = 0;

//     for (var i = 0; i < letter.length; i++) {
//         if (letter[i] === str) {
//             counter++
//         }
//     }
//     return counter
// }

// document.write("Letters :" + letter + "<br>"+ "String :"+ str +"<br>The specified letter within the string comes " + occurences(str, letter) + " times")




//Q14

// var cirRad = 10;

// function calCircumference(cirRad){
//   return  2 * 3.142 * cirRad
// }

// document.write("Radius = "+ cirRad + "<br>The circumference is " + calCircumference(cirRad) + "<br>");




// function calAreaOfCircle(area){
//     document.write("The area of circle is "+area)
// }
// calAreaOfCircle(Math.PI * Math.pow(cirRad,2))


// function myfunc() {
//     var inp = document.getElementById("inp").value;
//     document.getElementById("shw").innerHTML += "<div style='width: 50%;background-color: antiquewhite;height: 40px;border-radius: 5px;display:flex;gap:10px;justify-content:space-between;padding:10px;margin:20px 0px;align-items:center'>" + inp + "<div><button onclick='myfunc2()' >Remove</button><button onclick='downloadFile()' >Download</button><div>" + "</div>";
// }

// function myfunc2(button) {
//     document.getElementById("shw").innerHTML = ""
// }

// function downloadFile() {
//     var inp = document.getElementById("inp").value;

//     var text = inp; // Replace this with the content you want to download
//     var blob = new Blob([text], { type: "pdf" });
//     var url = URL.createObjectURL(blob);

//     var downloadLink = document.getElementById("downloadLink");
//     downloadLink.href = url;
//     downloadLink.click();

//     URL.revokeObjectURL(url);
// }



// function my() {

//     var randomValues = "AbC124nmoplkjhbkiwndoliwphcnxoann1$#@!)(*&y7dtgbxhBQrStuZXX992134%^-";


//     var password = "";

//     for (var i = 0; i < 6; i++) {

//         var random = Math.floor(Math.random() * randomValues.length);
//         password += randomValues[random];
//     }
//     document.getElementById("change").innerHTML = password;
//     return password
// }

// var save = my();

// console.log(save)

// function sub(){
//     var save = my();
//     document.getElementById('chaneg').textContent = save;
//     var inp = document.getElementById('inp').value;

//     if(save === inp ){
//         alert('Correct')
//     }else{
//         alert('wrong')
//     }
// }



// function myfunc(){
//     return 5*5
// }

// document.write(myfunc())