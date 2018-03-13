// //Javascript Practice
// /*
// Date: 18/07/16
// Javascript for my portfolio
// */
//
// //All variable declarations go at the top
//
//
// console.log("This is embedded javascript");
//
// //Control Flow
// //If-statement
// var input = NaN;
// if (input) {
//   console.log(input);
// } else {
//   console.log("It's not defined.");
// }
// //ternary
// var test = false;
// var output = test ? "Passed" : "Failed";
// console.log(output);
//
// //if/else if/else
//  var value = 1;
//  if (value === 0) {
//    console.log("zero");
//  } else if (value === 1) {
//    console.log("one");
//  } else {
//    console.log("something else");
//  }
//
//  //switch case syntax
//
//  var value = 0;
//  switch (value) {
//   case 0:
//   console.log('zero');
//   break;
//   case 1:
//   console.log('one');
//   break;
//   default:
//   console.log('something else');
//   break;
//  }
//
//  //while loop
//  var x = 0;
//  while (x < 10) {
//    console.log(x);
//    x++;
//  }
//
// var a = 0;
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//    a++;
//  }
// }
//
// //for loops (rarely have cases of infinite loop)
// for (var i = 0; i < 10; i++) {
//   console.log()
// }
//
// //functions
// function my_function_statement(arg) {
//   console.log(arg);
// }
//
// my_function_statement("hello");
//
// //function expressions = what you can set a variable to
// var fun_exp = function(arg) {
//   console.log(arg);
// }
//
// fun_exp("world");
//
// //no implied return aka explicit return
// function one() {
//   1;
// }
// console.log(one());
//
// //rest arguments
// function addTwo(n) {
//   console.log(arguments)
//   return n + 2;
// }
//  console.log(addTwo(1));
//  console.log(addTwo("1.5"));
//  console.log(addTwo(true));
//  console.log(addTwo(1, 2, 3, 4, 5, 6));
//
//
// //iterating over an array
// function addAll() {
//    console.log(arguments);
//    var sum = 0;
//    for (var i = 0; i < arguments.length; i++) {
//      sum += arguments[i];
//    }
//    return sum;
//  }
//
// console.log(addAll(1, 2, 3, 4, 5, 6));
//
// function addTogether(a, b) {
//   if (typeof(a) === "undefined") {
//     a = 0;
//   }
//   if (typeof(b) === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }
//
// console.log(addTogether(1, 2));
// console.log(addTogether(1));
// console.log(addTogether());
//
//
// //Exercise 1
// var number = 10;
// if (number % 3 === 0) {
//   console.log("Divisible by 3");
// } else if (number % 5 === 0) {
//   console.log("Divisble by 5");
// }
//
// //Exercise 2
// var statesAndAbbrevs = {
//   FL: "Florida",
//   CA: "Cali",
//   NY: "New York"
// };
//
// var input = "TX";
//
// switch (input) {
// case "FL":
//   console.log(statesAndAbbrevs["FL"]);
//   break;
// case "CA":
//   console.log(statesAndAbbrevs["CA"]);
//   break;
// case "NY":
//   console.log(statesAndAbbrevs["NY"]);
//   break;
//   default:
//   console.log("Another state not on the list");
//   break;
// }
//
// //Exercise 3
// var i = 5;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//
// //Exercise 4
//
// var students = [
//   {firstName: "Ed", lastName: "Toro"},
//   {firstName: "Zach", lastName: "Roberts"},
//   {firstName: "Sergio", lastName: "Velez"}
// ];
//
// console.log(students);
//
// for (i = 0; i < students.length; i++) {
//   console.log(students[i].firstName);
// }
//
// //Exercise 5
//
// var item = {
//   text: "hello!"
// }
//
// function my_func(arg) {
//   alert(arg.text);
// }
//
// my_func(item);
//
//
// //Date: 19/07/2016
// //Block style programming
// function times(number, block) {
//   for (var i = 0; i < number; i++) {
//     block();
//   }
// }
//
// //named block
// function sayHello() {
//   console.log("hello");
// }
// times(5, sayHello);
//
// //could also be written like the following:
// var sayHello = function() {
//   console.log("Hello");
// }
// times(5, sayHello);
//
// //could also be written like the following:
// times(5, function() {
//   console.log("hello");
// });
//
// //iterating over hashes
//
// for (var key in arr) {
//   console.log(key);
//   console.log(arr[key]);
// }
//
// //iterating over real hashes
// var hsh = {name: "Ed", school: "Wyncode"};
// console.dir(hsh);
// var size = 0;
// for (var key in hsh) {
//   console.log(key);
//   console.log(hsh[key]);
//   size++;
// }
// console.log(size);
//
//
// //hoisting
// console.log(x);
// var x = "hello";
//
// function aFunction() {
//   var h = "Heyo";
//   console.log(h);
// }
//
// aFunction();
//
// //scope
// function scopeFunction() {
//   var myOwnVar = "hello1"; //guarantees privacy
//   window.myOwnVar = "hello1"; || myOwnVar = "hello1"; // allows it to be used elsewhere
//
//
//   window.hello1 = function() {
//     console.log(myOwnVar);
//   }
// }
//
// scopeFunction();
//
// //prototypal inheritance
// console.dir({});
//
// var dog = {
//   name: "Fido",
//   bark: function() {
//     console.log("bow wow!");
//   },
//   speak: function(message) {
//     console.log(this.name + ": " + message);
//   }
// }
//
//  dog.speak = function() {
//    console.log("Herro!");
//  };
//
//  var anotherDog = Object.create(dog);
//  anotherDog.name = "Rufus";
//
//  anotherDog.type = "Chihuahua";
//
//  function addTwo(number) {
//    return number + 2;
//  }
//
//
//  function addTwoToArray(arr) {
//   //  if (typeof(arr) === "object") {
//
//   if (arr.push !== undefined) {
//    arr.push(2);
//   }
//    return arr;
//  }
//
// console.log(addTwoToArray([]));
// console.log(addTwoToArray([0, 1]));
// console.log(addTwoToArray(""));
//
// console.log(addTwoToArray(0));
// console.log(addTwoToArray(1.5));
// console.log(addTwoToArray(undefined));
// console.log(addTwoToArray(null));
// console.log(addTwoToArray(NaN));
// console.log(addTwoToArray([]));
// console.log(addTwoToArray({}));
// console.log(addTwoToArray(""));
// console.log(addTwoToArray(true));
//
//
// //free scope_function (JS runs this for free)
// window.onload = function() {
//   var input = document.getElementsByTagName('input')[0];
//   console.log(input);
//   input.value = "hello";
// }
//
// var actors = ['Michael Fox', 'Christopher Lloyd', 'Lea Thompson', 'Claudia Wells'];
//
//
// for (i = 0; i < actors.length; i++) {
//   console.log(actors[i] + " is so cool.");
// }
//
//
//  function onChangeHandler(input) {
//    console.log('change detected');
//    console.log(input);
//    // var input = document.getElementsByTagName('input')[0];
//    console.log(input.value);
//
//    input.value = "Thanks!";
//  }
//
//    <input type="text" name="name"
//   value="" onChange="onChangeHandler();">
//
//  function onLinkClicked() {
//    console.log('click!');
//    var input = document.getElementsByTagName('input')[0];
//    input.value = "link clicked";
//  }
//
//  // free scope_func (JS runs this for free)
//  window.onload = function() {
//    var input = document.getElementsByTagName('input')[0];
//    console.log(input);
//    input.value = "hello";
 // }

 function ready() {
  //  var input = document.getElementsByTagName('input')[0];
  //  console.log(input);
  //  input.value = "hello";
  var input = $('input');
  input.val("hello");
 }

 $(ready);
