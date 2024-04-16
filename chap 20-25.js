//Chapter 21

//Q1

// var firstName = prompt("Enter your fisrt Name");
// var lastName = prompt("Enter your last Name");
// var merge = firstName + lastName;


// alert("Hello" + " " + merge);


//Q2

// var favouriteMobile = prompt("Enter your favourite Mobile phone model");

// var len = favouriteMobile.length;

// document.write(`My favourite phone is :  ${favouriteMobile} <br> Length of Strings is: ${len}`)


//Q3

// var country = "Pakistani";
// var len2 = country.indexOf('n');

// document.write(`String: ${country} <br> Index of 'n': ${len2} `)


//Q4

// var greet = "Hello World";
// var len3 = greet.lastIndexOf('l');

// document.write(`String : ${greet} <br> Last Index of 'l' : ${len3}`);


//Q5

// var country2 = "Pakistani";
// var len4 = country2[3];

// document.write(`String : ${country2} <br> Character at 3 index is: ${len4}`)


//Q6


// var firstName = prompt("Enter your fisrt Name");
// var lastName = prompt("Enter your last Name");
// var merge = firstName.concat( " " + lastName);

// alert("Hello" + " " + merge);



//Q7

// var hyd = "Hyderabad";

// var rep2 = hyd.replace("Hyder","Islam");

// document.write(`City: ${hyd} <br> After replacement : ${rep2}`);

//Q8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';

// var rep3 = message.replaceAll("and","&");

// document.write(rep3)





//Q9
// var str = "472";
// var typ = typeof str;
// var  num= parseInt(str);
// var typ2 = typeof num;

// document.write(`Value : ${str} <br> Type : ${typ} <br>Value : ${num} <br> Type : ${typ2}`);



//Q10

// var userInp = prompt("Enter any word");

// var  upp = userInp.toUpperCase();

// document.write(upp);

//Q11

// var userInp2 = prompt("Enter","javascript");
// var upp2 = userInp2.slice(0,1).toUpperCase();
// var low = userInp2.slice(1).toLowerCase();
// var merge2 = upp2 + low;

// document.write(`User Input: ${userInp2} <br> Title Case: ${merge2}`);




//Q12
// var num2 = 35.36;
// var porem = 35.36.toFixed(2).replace(".",'');
// document.write(`Number : ${num2} <br> Result : ${porem}`);


//Q13


// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userInp3 = prompt("Enter Username");
// var charcode = userInp3.charCodeAt();
// var match = true;

// for(var i =0;i < userInp3.length;i++){
//     if(charcode === 33 || charcode === 44 || charcode || 46 || charcode === 64){
//         match = false;
//         break
//     }
// }
// if(match){
//     document.write("Username accepted");
// }else{
//     document.write("Please enter username without '!', '@' , ',' , '.' ")
// };



//Q14


// var arr = ['Cake','Apple pie','Cookie','Chips','Patties'];
// var userInp4 = prompt("Welcome to Abc Bakery.What do you want to order sir/madam");
// var upp3 = userInp4.slice(0,1).toUpperCase();
// var low1 = userInp4.slice(1).toLowerCase();
// var merge3 = upp3 + low1;

// var match2 = false;

// for(var i = 0; i < arr.length ; i++){
// if(merge3 === arr[i]){
//     match2 = true;
//     document.write(`${arr[i]} is available at index ${i} in our bakery`);
//     break
// }
// }

// if(!match2){
//     document.write("Sorry sir this item is not available in our baskery")
// }


//Q15

//    /[]/  (this is alphabet characters and number) /\d/  digit character    .test test the values
// var password = prompt("Enter Password");

// var match = false;

// if (password.length == 6 && NaN !== password[0] && /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[A-Z]/.test(password)){
//     match = true;
//     document.write(`Entered Password : ${password} <br>Status: <span style='color:green'>Correct</span>`);
// } else {
//     document.write(`Password should not include special characters like '@' , ',' , '!' <br>Status<span style='color:red'> Password Incorrect</span> `);
// }



//Q16

// var str2 = "University Of Karachi";

// var spl = str2.split(" ");

// document.write(`${spl[0][0]}<br>${spl[0][1]}<br>${spl[0][2]}<br>${spl[0][3]}<br>${spl[0][4]}<br>${spl[0][5]}<br>${spl[0][6]}<br>${spl[0][7]}<br>${spl[0][8]}<br>${spl[0][9]}<br>`)
// document.write(`<br><br>${spl[1][0]}<br>${spl[1][1]}<br>`)
// document.write(`<br><br>${spl[2][0]}<br>${spl[2][1]}<br>${spl[2][2]}<br>${spl[2][3]}<br>${spl[2][4]}<br>${spl[2][5]}<br>${spl[2][6]}<br>`)


//Q19

// var upp6 = prompt("Enter any word");

// var rever = upp6.split("").reverse();

// var last = rever[0];



// document.write(`User Input :${upp6} <br> Last Character : ${last} `)



//Q20

// var textpara = "The quick brown fox jumps over the two lazy dogs."
// var low2 = textpara.toLowerCase();
// var spl = low2.split(" ");
// var word = "the";

// var counter=0;

// for(var i = 0; i < spl.length;i++){
//     if(spl[i] === word){
//         counter++
//     }
// }

// document.write(`Text : ${textpara} <br> There are ${counter} appearance(s) of word 'the'`)