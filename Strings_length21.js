// Write a function that takes 2 strings as parameters and prints 
// whose length is bigger, if both lengths are equal print two strings.
function equal_length(str1,str2){
    if(str1.length === str2.length){
        console.log(str1);
        console.log(str2);
    }
    else if(str1.length > str2.length){
        console.log(str1);
    }
    else{
        console.log(str2);
    }
}
var user = require('readline-sync');
var str1 = user.question('Enter the your any thing ');
var str2 = user.question('Enter the your any thing ');
equal_length(str1,str2)