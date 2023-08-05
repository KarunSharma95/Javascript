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

//Btn click count

// // document.getElementById('btnClick')
// document.addEventListener('DOMContentLoaded', function () {
//     // Ensure that the DOM content is loaded before trying to access elements.
//     const myButton = document.getElementById('btnClick');
//     let count =0;
//     if (myButton) {
//       // Check if the button element exists before adding the event listener.
//       myButton.addEventListener('click', function () {
//         console.log('Button clicked!',++count);
//       });
//     }
//   });

// console.log("start");

// setTimeout(function xy(){
// console.log("callback");
// },5000);

// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;
//  while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
//  }
//  console.log("while expires");

//Higher Order Function

// let radius = [3,1,2,4];

// function calcArea(radiusArr){
//     const output=[];
// for (let i=0 ; i<radiusArr.length ; i++){
//      output.push(Math.PI * radiusArr[i] * radiusArr[i]);
// }
// return output;
// };
// console.log(calcArea(radius));

// function calcPara(radiusArr){
//     const output= [];
// for (let i=0 ; i<radiusArr.length ; i++){
//     output.push(2 * Math.PI *  radiusArr[i]);
// }
// return output;
// };
// console.log (calcPara(radius));

// function calcDiameter(radiusArr){
//     const output = [];
// for (let i=0 ; i<radiusArr.length ; i++){
//     output.push(2 * radiusArr[i]);
// }
// return output;
// };
// console.log(calcDiameter(radius));

// const radius = [3,1,2,4];

// let Area = function(x){
//     return Math.PI * x * x ;
// }
// let Para = function(x){
//     return  2 * Math.PI * x ;
// }
// let Dia = function(x){
//     return 2 * x;
// }
// function Generator (arr, logic){
//     const out = [];
//     for (let i=0; i<arr.length ;i++){
//       out.push(logic(arr[i]));
//     }
//     return out;
// }
// console.log (Generator(radius,Area));
// console.log(Generator(radius,Para));
// console.log(Generator(radius,Dia));

// const radius = [3,1,2,4];

// let Area = function(x){
//     return Math.PI * x * x ;
// }
// let Para = function(x){
//     return  2 * Math.PI * x ;
// }
// let Dia = function(x){
//     return 2 * x;
// }
// Array.prototype.Generator = function(logic){
//     const out = [];
//     for (let i=0; i<this.length ;i++){
//       out.push(logic(this[i]));
//     }
//     return out;
// }
// console.log (radius.Generator(Area));
// console.log(radius.Generator(Para));
// console.log(radius.Generator(Dia));

// const arr =[
//     {first:'Karun', last:'Sharma', Age:27},
//     {first:'Balraj', last:'Sharma', Age:62},
//     {first:'Shweta', last:'Sharma', Age:29},
//     {first:'Usha', last:'Sharma', Age:58}
// ];

//  const  x = arr.reduce(function(acc,curr){
 
//  if (curr.Age <30){
//    acc.push (curr.first + ' ' +curr.last)
//  }
//  return acc;
// },[]);
// console.log(x);

/// Promises

const cart = ["Tshirts","Pants"," Kurtas"];
const Promise1 = createOrder(cart);
console.log(Promise1);
Promise1
.then(function (orderId){
console.log(orderId)
})
.catch(function (err){
console.log(err.message);
});

//Producer

function createOrder(cart){

    const Pr = new Promise(function(resolve, reject){

        if(!validateCart(cart)){
         const err= new Error("Cart is not validate");
         reject (err);
        }

        const orderId = "12345";
        if(orderId){
            setTimeout(function(){

                resolve(orderId);
            },5000)
        }

    });

    return Pr;
}
function validateCart(cart){
  return true;
}


