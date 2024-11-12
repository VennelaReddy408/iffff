const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);


const a = 48;
const isAdult = (a >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);


var day = "sunday";
if (day == "saturday" || day == "sunday" ){
    console.log("It is weekend ")
}else{
    console.log("It is not weekend")
}


var age=18;
var citizenship="true";
if (age >=18 && citizenship){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}



var u_name=prompt("Enter your name");
var password=prompt("Enter your password");
var pass_word="12345";
if ((u_name.toLowerCase()==="admin") && (password === pass_word)){
    console.log("You are logged in successfully")
}else(
    console.log("You entered wrong credentials....plz check")
)
