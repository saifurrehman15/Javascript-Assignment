// //Q1

// var userInp = parseFloat(prompt("Enter any positive number"));
// var roun = Math.round(userInp);
// var floo = Math.floor(userInp);
// var ceilM = Math.ceil(userInp);


// document.write(`Number : ${userInp} <br> Round off value : ${roun} <br> Floor value: ${floo} <br> Ceil value ${ceilM}`)



// //Q2

// var userInp2 = parseFloat(prompt("Enter any positive number"));
// var roun2 = Math.round(userInp2);
// var floo2 = Math.floor(userInp2);
// var ceilM2 = Math.ceil(userInp2);


// document.write(`Number : ${userInp2} <br> Round off value : ${roun2} <br> Floor value: ${floo2} <br> Ceil value ${ceilM2}`)




//Q3

// var num = -4;
// var ab = Math.abs(num);
// var num2 = 5;
// var ab2 = Math.abs(num2);
// document.write(`The absolute value value of ${num} is ${ab} <br>The absolute value value of ${num2} is ${ab2}  `)


// Q4

// var dice = Math.random()*6+1;

// var roun2 = Math.floor(dice);
// document.write(`Random Dice Value is: ${roun2}`)


//Q5

// var ranNum = Math.random()*2+1;

// var roun3 = Math.floor(ranNum);
// if(roun3 === 2){
// document.write(`${roun3} <br>Random Coin value is Heads`)
// }else{
//     document.write(`${roun3}<br>Random Coin value is Tails`)
 
// }



//Q6

// var ranNum2 = Math.random()*100+1;
// var roun4 = Math.floor(ranNum2);


// document.write(`Random number between 1 and 100 : ${roun4}`)


//Q7

// var userInp3 = prompt("Enter your Weight");


// document.write(userInp3)



//Q8


// var secretNum = Math.random()*10+1;
// var floo3 = Math.floor(secretNum);
// var userInp4 = parseInt(prompt("Enter any secret number"));
// if(floo3 === userInp4){
//     alert("Congrats,You Won")
// }else if(/[a-zA-Z]/.test(userInp4)){
//     alert("Try Again \n Please write a number instead of letters!")
// }
// else{
//     alert("Try Again \nThe secret number was " + floo3)
// }