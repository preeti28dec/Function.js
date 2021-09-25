// Write a function named perfect() which takes 1 parameter and 
// checks that given parameter is a perfect number or not.
// Perfect number means we will count the factors of a given number 
// including 1 but you need to exclude the own number as its factor.
function perfect(num){
    sum=0
    for(var i=1;i<num;i++){
        if(num%i === 0){
            sum+=i
        }
    }
    if(sum === num){
    console.log(num," is a perfect number");
    }
    else{
        console.log(num," is not a perfect number");
    }
}
var user=require("readline-sync");
var num=user.questionInt("Enter your number !")
perfect(num);
