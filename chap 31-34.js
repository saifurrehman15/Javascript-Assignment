//Q1

// var now = new Date();

// document.write(now);


//Q2
// var arr = ['Jan','Feb','March','April','may']
// var now2 = new Date().getMonth();
// for(var i=0; i < arr.length;i++){
// document.write(`Current Month : ${arr[now2]}`)
// break
// }


//Q3

// var arr = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
// var now2 = new Date().getDay();
// for(var i=0; i < arr.length;i++){
// alert(`Current Day: ${arr[now2]}`)
// break
// }


//Q4

// var now3 = new Date().getDay();


// if(now3 === 0 || now3 === 3){
//     alert("It's funday")
// }


//Q5


// var now4 = new Date().getDay();
// if(now4 <= 15){
// document.write("First Fifteen days of month.")
// }else{
//     document.write("Last Fifteen days of month.")  
// }


//Q6

// var now5 = new Date();
// var milis = new Date("1 jan,1970").getTime();
// var today = now5.getTime();
// var miliCon =  today - milis;
// var minMili = today /(1000 * 60);
// document.write(`Current time : ${now5}<br> Elaspsed milliseconds since 1 jan,1970 : ${miliCon} <br>Elaspsed minutes since 1 jan,1970 : ${minMili} `);


//Q7

// var hours = new Date().getHours();
// if(hours >= 12){
// alert(`It's PM`)
// }else{
//     alert(`It's Am`)

// }


//Q8


// var lastDate = new Date("30 apr,2024");

// document.write(`Later Date: ${lastDate}`)



//Q9

// var firstRamzan = new Date("12 Mar,2024").getTime();
// var today = new Date().getTime();
// var conversion = today - firstRamzan;
// var dayss = conversion  / (1000 * 60 * 60 * 24)
// document.write(`${Math.floor(dayss)} days have passed since 1st Ramzan,2024.`)



//Q10


// var datee = new Date();
// var sinceThisYear = new Date("1 jan,2024").getTime();
// var today1 = new Date().getTime();
// var conversion2 = today1 - sinceThisYear;
// var secondss = conversion2 / (1000);

// document.write(`On reference date ${datee} <br>${Math.floor(secondss)} seconds had passed since beginning of 2024`)


//Q11

// var datee2 = new Date();
// document.write(`Current Date :${datee2} <br><br>`)
// var hours2 = datee2.getHours() - 1;

// datee2.setHours(hours2 + 1);

// document.write(`${hours2} hour ago,it was ${datee2}`)


//Q12


// var datee3 = new Date();
// document.write(`Current Date :  ${datee3}<br><br>`)
// var yearr = datee3.getFullYear();

// datee3.setFullYear(yearr - 100);

// document.write(`100 years ago,it was ${datee3}`)



//Q13

// var userInpt = prompt("Enter your Date of Birth");

// var date4 = new Date(userInpt).getTime();
// var today3 = new Date().getTime();
// var birthYear = new Date(userInpt).getFullYear();
// var conversion3 = today3 - date4;
// var birthh = conversion3 / (1000 * 60 * 60 * 24 * 365);

// document.write(`Your Age is : ${Math.floor(birthh)} <br> Your birth Year is : ${birthYear}`)

//Q14

//on index Page




