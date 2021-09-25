// Write a function named average which takes 3 numbers and prints
// the sum of 3 numbers and the average of 3 numbers.
function average(num1,num2,num3){
    console.log("Three numbers of sum",num1+num2+num3);
    console.log("Three numbers of average",(num1+num2+num3)/3);
    }
    
var user = require('readline-sync');
var number1 = user.questionInt('Enter the number1 ');
var number2 = user.questionInt('Enter the number2 ');
var number3 = user.questionInt('Enter the number3 ');
average(number1,number2,number3);