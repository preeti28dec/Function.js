// Write a function named eligible_for_vote which takes age as a 
// parameter and prints if he/she is eligible to vote or not. 
// ( Consider minimum age of voting to be 18. )
function eligible_for_vote(age){
    if (age>18){
        console.log(age,"You are eligible for voting ")
    }
    else{
        console.log(age,"You are not eligible for voting ")
    }
}
var user=require("readline-sync");
var age=user.question("Enter your age !")
eligible_for_vote(age)