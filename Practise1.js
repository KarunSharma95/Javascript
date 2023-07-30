/*
var a = 2;
function square (num){
    var result =num *num;
    return result;
}
var b = square (a);
console.log(b);
*/

/*
var x=2;
function getName(){
    console.log("Starting Revision of javascript")
}

getName();
console.log(x);
console.log(getName);
*/

/*
var x = 1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}
*/

/*
var x = 10;
function k(){
var a=10;
}
console.log(window.x);
console.log(a);
console.log(this.x);
*/

/*
function a(){
    var b = 10;
    function c(){
        console.log (b);
    }
    c();
}
a();
console.log(b);
*/



// const b = 100;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b)

// const b=10;
// {
//     const b=20;
//     {
//         const b=30;
//         {
//             const b=40;
//         console.log(b);
//         }
//     console.log(b);
//     }
// console.log(b)
// }
// console.log(b);

// let a=10;
// {
//     var a=20;
// }
// console.log(a)

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// let z = x();
// z();


// SetTimeout function glimpse for more closure understanding

// 1. 

// function x(){
//     var x =1;
//     setTimeout(function(){
//         console.log(x);
//     },1000)
// }
// x();

// 2.

// function x(){
//     for(let i=1 ; i<=5 ;i++ ){
//       setTimeout(function(){
//             console.log(i);
//         },i * 1000)
//     }
//     console.log ("Namaste Javascript")
// }
// x();

// 3.
// function x(){

//     for(var i=1 ; i<=5 ;i++ ){
//         function close(i){

//             setTimeout(function(){
//                   console.log(i);
//               },i * 1000)
//         }
//         close(i)
//     }
//     console.log ("Namaste Javascript")
// }
// x();

// 1. Counter

// function outer(){
//     var count=0;
//     return function counter(){
//         console.log(count);
//         count ++;
//     }
// }
// var outest = outer();
// outest();
// outest();

// var outest1 =outer();
// outest1();
// outest1();

//2. Counter 2 with constructor function

// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count--
//         console.log(count);
//     }
// }
// var outest = new Counter();
// outest.incrementCounter();
// outest.decrementCounter();