console.log("Divyesh");

//pastCode


console.log("Let's learn JavaScript");
console.log("My name is Divyesh");

//Variables

age=24
console.log(age);   //Output : 24
console.log(age + 1);   //Output : 25

name = "JavaScript"
console.log(name)  //Output : JavaScript
console.log(name + 1);  //Output : JavaScript1
console.log(name + "1");    //Output : JavaScript1

price=158.80
console.log(price);  //Output : 158.8
console.log(price + 1);  //Output : 159.8
console.log(price + "1");  //Output : 158.81

you = "n"
console.log(you);
console.log(you + "1");

you = 4
console.log(you);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = false;
console.log(isFollow);

isNotFollow = true;
console.log(isNotFollow);

//var is not used now after 2015 due to ES4

// var name = "Divyeshbhai"
// var fullName = "Divyeshbhai Rupapara"
// var number = 1

//let is used when need
let fullName = "Divyansh";
console.log(fullName);

fullName = "Divyeshbhai";
console.log(fullName);

let number = 353;
console.log(number);

let totalPrice;
console.log(price)

//const is used and prefered
const pureName = "DG";
console.log(pureName);

// const tPrice; //error
// console.log(tPrice);


//DataType
//Primitive DataType :  Number, String, Boolean, Undefined, Null, BigInt, Symbol
console.log("Primitive DataType");
let m = 24;
console.log(m);
console.log(typeof m);   //Output : "number"

let myName = "Divyeshbhai";
console.log(myName);
console.log(typeof myName);  //Output : "string"

let isFall = true;
console.log(isFall);
console.log(typeof isFall);  //Output : "boolean"

let n;
console.log("nothing for undefined");
console.log(typeof n);   //Output : "undefined"

let p = null;
console.log(p);
console.log(typeof p);   //Output : "object"

let peak = BigInt("123");
console.log(peak);
console.log(typeof peak);   //Output : "bigint"

let special = Symbol("Hello!");
console.log(special);
console.log(typeof special);    //Output : "symbol"


//Non-Primitive DataType : Object - Array & Function 

const student = {   //student is object
    myName : "Divyeshbhai",
    cpi : 8.0,
    enrollment : 353,
    isPass : true
};

console.log(student);
console.log(typeof student);
//two ways to access the object
console.log(student["myName"]);
console.log(student.myName);


//Example1 - Given Product page and need to create a const object called "product" to store information shown in the page :

const product = {
    title : "Parker Jotter Standard CT Ball Pen(Black)",
    rating : 4,
    isDeal : true,
    productPrice : 270,
    offer : 5 
};

console.log(product);


//Example2 - Given Profile page and need to create a const object called "profile" to store information shown in the page :

const profile = {
    username : "@_itz_dg__6",
    isFollow : true,
    post : 10,
    followers : 469,
    following : 350,
    myName : "Divyansh Patel",
    bioDetails : "nothing to view here.."
};

console.log(profile);