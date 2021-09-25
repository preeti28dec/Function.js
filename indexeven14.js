// Write a function named check_numbers_list which takes two 
// lists of integers and checks the numbers of the same index 
// numbers whether they both are even or not. For checking both
// even or not you can use the function written in the previous question.
// If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] 
// then the output should come like this.
function number_list(list1,list2){
    for(var i=0;i<6;i++){
        if(list1[i]%2===0 && list2[i]%2===0){
            console.log("Both are Even",list1[i],list2[i]);
            console.log("--------------------------------------------");
        }
        else{
            console.log("Both are not Even",list1[i],list2[i]);
            console.log("--------------------------------------------");
        }
    }
}    
number_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])