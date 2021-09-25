// 1.Define an Self invoking function and call it by taking two 
// arguments to checkwhether they are equal or not?
(function(name,name2){
    console.log(name===name2)
    })("preeti","preeti");  


(function myName (){
    var x = "Hello Preeti Thakur";  // I will invoke myself
    console.log(x);
    })();