// Write a function named showNumbers() which takes 1 argument
// named limit and program starts from o to limit and checks the 
// numbers in between 0 to limit and prints whether the number is 
// Even or odd like the below.
function showNumbers(num){
    for(var i=0;i<=number;i++){
        if (i%2==0){
            console.log(i,"this is even")
        }
        else{
            console.log(i,"this is odd")
        }
    }
}
var user = require('readline-sync');
var number = user.questionInt('Enter the number1 ');
showNumbers(number)