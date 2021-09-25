// Write a function named function_print_lines which will take 
// two strings as inputs and it will print according to the text given below
// If we are giving "Mera naam Nayak hai." and "Main NavGurukul
// ka Academic Associate hun." then it has to print like
function function_print_lines(user1,user2){
    console.log(user1);
    console.log(user2);
    }
var user=require("readline-sync");
var user1=user.question("Enter the any thing abou you !")
var user2=user.question("Enter something about you")
function_print_lines(user1,user2)
 