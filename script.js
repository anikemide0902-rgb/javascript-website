// //writing output
//  alert ( 'Welcome to my website');
// console.log('Mr. Isiah loves making money');
// document.write('Aisha, Oba, Mr. Isiah are cpism7 students');




// //writing input (forms and prompt)
//  var userInput = prompt('Type in your name');
//  document.write(userInput);


// //let, var, const
// let age = 20;
// const pi = 3.14;
// var course = 'cpism7';



// //data types 
// //primitive data types 
// //number, string, boolean, undefined, null, symbol, BigInt
// let name = 'Mr. Isiah';
// console.log(typeof name);
// var newAge = 50;
// const areYouStudent = true;
// console.log(typeof areYouStudent);
// var middleName;
// console.log(typeof middleName);
// var pocketMoney = null;
// console.log(typeof pocketMoney);

// //operations in javascript
// //Arithmetic opertors (+, -,  *, /, %, ++, --)

// let a = 10;
// let b = 5;
// let c = 3;
// let d = 7;
// let w = '7';

// var e = a + b;
// console.log(e);
// var f = a - b;
// console.log(f);
// var g = a * b;
// console.log(g);
// var h = a / c;
// console.log(h);
// var i = a % c;
// console.log(i);
// a++;
// console.log(a);
// b--;
// console.log(b);

// //assignment operators(=, +=, -=, *=, /=, %=)

// a += 6;
// console.log(a);

// //relational or comparison operators(==, ===, !=, !==, <, >, <=, >=)

// var j = a > b;
// console.log(j);
// var k = d === w;
// console.log(k);

// //logical operators(&&, ||, !)
// var q = (a > b) && (d > c);
// console.log(q);//true
// var r = (a < b ) || (d > c);
// console.log(r); //true
// var s = !(a > b);
// console.log(s); //false


// //non-primitive data types
// //array, objects, functions

// var person = {
//     name: 'Aisha',
//     age: 17,
//     isStudent: true,
//     bestFood: 'pounded yam',
// }

// console.log(person);
// console.log(person.bestFood);
// console.log(person.age);

// //arrays: is a collection of items that are stores in a variable
// var fruits = ['apple', 'banana', 'orange', 'mango']
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);


// //array methods
// var number = [1, 3, 2, 4, 5];

// number.push(10);
// console.log(number);

// number.pop();
// console.log(number);

// number.shift();
// console.log(number);

// number.unshift(0);
// console.log(number);

// number.sort();
// console.log(number);

// number.reverse();
// console.log(number);

// number.splice(1, 2);
// console.log(number);


// //array methods that creates new array
// var numbers = [1, 3, 2, 4, 5];
// var no = [6, 7, 8, 9, 0];

// var newArray = numbers.slice(0,2)
// console.log(newArray);

// var con = numbers.concat(no);
// console.log(con);

// var num = numbers.map(el => el*2);
// console.log(num);

// var filterNo = numbers.filter(el => el % 2 === 0);
// console.log(filterNo);

// var myStudents = [
//     {
//         name: 'Habib',
//         age: 14,
//         isStudent: false,
//         bestFood: 'pounded yam'
//     },
//     {
//         name: 'Aisha',
//         age: 12,
//         isStudent: true,
//         bestFood: 'jollof rice'
//     },
//     {
//         name: 'Oba',
//         age: 13,
//         isStudent: true,
//         bestFood: 'fried rice'
//     }
// ]

// var searchArray = myStudents.filter(student => student.bestFood === 'pounded yam');
// console.log ('the search array', searchArray);

// //selection construct (if, if and else, if else if, switch case)
// var userAge = prompt('kindly type in your age');

// if (userAge >= 18){
//     alert ('You are eligible to drive');
// }else {
//     alert('You can not drive because you are not up to 18 years old');
// }

// var userScore = prompt('Type in your score');

// if(userScore >= 70 && userScore <=100){
//     alert('You got an A');
// }else if (userScore >= 60 && userScore < 70){
//     alert('You got a B');
// }else if(userScore >= 50 && userScore < 60){
//     alert('You got a C');
// }else if(userScore >= 45 && userScore < 50){
//     alert('You got a D');
// }else if(userScore >= 40 && userScore < 45){
//     alert('You got a E');
// }else if(userScore >= 0 && userScore < 40){
//     alert('You got a F');
// }else{
//     alert('Invalid score');
// }


// alert('What is the capital of Ghana \n a. Accra \n b. Lagos \n c. Nairobi \n d. Dakar');

// var userAnswer = prompt('Type in your answer');

// switch(userAnswer){
//     case 'a':
//         alert('Correct answer');
//         break;
//     case 'b':
//         alert('Wrong answer');
//         break;   
//     case 'c':
//         alert('Wrong answer');
//         break;
//     case 'd':
//         alert('Wrong answer');
//         break; 
//     default:
//         alert('Invalid answer');                  
// }

// //iteration construct (for loop, while loop, do while loop)

// for (let i = 1; i < 11; i++){
//     console.log( 'I love programming', i);
// }

// var count = 1;

// while (count <= 10){
//     console.log('I love programming', count);
//     count++;
// }


// do{
//     console.log('I love programming', count);
//     count++;
// }while(count < 0);

// //functions 
// //functions without an argument 
// function calculator(){

//     let number1 = 30;
//     let number2 = 40;

//     let sum = number1 + number2;
//     console.log('The result of your calculation is ' + sum);
//     console.log(`The result is ${sum}`);
// };
// calculator();
// calculator();


// //function with arguments 
// function addUserNumber(num1, num2){

//     let sum = num1 + num2;
//     console.log('Another way of writing rseult of adding ' + ' ' + num1 + ' ' + 'and ' + ' ' + num2 + ' ' + 'is ' + sum);
//     console.log(`The result of adding ${num1} and ${num2} is ${sum}`);

// }

// addUserNumber(10, 40);
// addUserNumber(30, 5);


// //function with return statement

// function multiplyUserNumbers( num1, num2){

//     let product = num1 * num2;
//     return product;

// }

// var calculatedResult = multiplyUserNumbers(30, 40);

// console.log('The result of multiplying 30 and 40 is ' + calculatedResult);

//no 1
var userAge = prompt('Type in your age');

if(userAge <=13){
   console.log('You are a child');
}else if (userAge > 13 && userAge <= 19){
    console.log('You are a teenager');
}else if(userAge >= 20 && userAge <= 59){
    console.log('You are an adult');
}else if (userAge >= 60) {
    console.log('You are a senior citizen');
}

//no 2

var unitUsed = prompt('Enter the number of unit you used');

if(unitUsed <= 100){
    console.log('Amount to be paid is $' + unitUsed*5);
}else if(unitUsed <= 200){
    console.log('Amount to be paid is $' + unitUsed*7);
}else if(unitUsed > 200){
    console.log('Amount to be paid is $' + unitUsed*10);
}

//no 3


let acctBal = 5000;
var withdraw = prompt('Enter the amount you wanna withdraw');

if(withdraw <= 0){
    console.log('Invalid amount');
}else if( withdraw > 5000){
    console.log('Insufficient funds');
}else {
    console.log(`$${withdraw} has been debitted from your account. Your available balance is $${acctBal-withdraw}`);
}

//no 4

var shoppingAmt = prompt('Enter the amount spent on goods bought');
let discounta = (20/100)*shoppingAmt;
let totala = shoppingAmt-discounta;

let discountb = (10/100)*shoppingAmt;
let totalb = shoppingAmt-discountb;

let discountc = (5/100)*shoppingAmt;
let totalc = shoppingAmt-discountc;


if(shoppingAmt >= 10000){
    console.log(`The discount given is $${discounta} and the total amount to be paid is $${totala}`);
}else if(shoppingAmt >= 5000 && shoppingAmt < 10000){
    console.log(`The discount given is $${discountb} and the total amount to be paid is $${totalb}`);
}else if(shoppingAmt >= 2000 && shoppingAmt < 5000){
    console.log(`The discount given is $${discountc} and the total amount to be paid is $${totalc}`);
}else{
    console.log('No discount given, so the total amount to be paid is $' + shoppingAmt)
}

//no 5

var color = prompt('Enter a traffic color');

switch(color){
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Get Ready!');
        break;
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Invalid input');            
}

//no 6

var pin = prompt('Input your pin');
let c = 0;
for(let i = 1; i < 6; i++){
    let trial = 5-c;
    var one = prompt('Input your four digit pin');
    console.log(`You have ${trial} trials left.`);


    if(one == pin){
        console.log('You are correct');
        break;
    }

    c = c+1;
}
if(c==5){
    console.log('Your account has been blocked')
}