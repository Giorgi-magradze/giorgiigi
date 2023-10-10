// // // // // // // // // // 
// // // // // // // // // // function positiveSum(arr){
// // // // // // // // // //   var total = 0
// // // // // // // // // //   for (i = 0; i < arr.lenght; i++) {
// // // // // // // // // //     if(arr[i] > 0 ) {
// // // // // // // // // //       total += arr[i]
// // // // // // // // // //     }
// // // // // // // // // //   }
// // // // // // // // // // return total
// // // // // // // // // // }

// // // // // // // // // // console.log(calculateSum1(4,5));

// // // // // // // // // function calculateSum1 (a, b){
// // // // // // // // // return (a+b);
// // // // // // // // // }

// // // // // // // // // const calculateSum2 = function (a, b){
// // // // // // // // //   return(a+b);
// // // // // // // // // }


// // // // // // // // let company = 'skillwill';

// // // // // // // // function changeCompany(company){
// // // // // // // //   company = 'sweeft';

// // // // // // // // }
// // // // // // // // changeCompany(company);
// // // // // // // // console.log(company);

// // // // // // // const user = {
// // // // // // //   name:'giorgi',
// // // // // // //   lastName: 'magradze',
// // // // // // //   userName: 'cody',
  
// // // // // // // }

// // // // // // // const newUser = user;
// // // // // // // newUser.userName = ' 007 cody';
// // // // // // // console.log(user.username);


// // // // // // // const age = 30;
// // // // // // // let newAge = age;
// // // // // // // newAge = 40
// // // // // // // console.log(age);

// // // // // // const arr = ['skillwil','sweeft',30,null]
// // // // // // // for (i = 0; i < arr.length; i++) {
// // // // // // //   console.log(arr[i])
// // // // // // // }
// // // // // // // console.log(typeof arr)

// // // // // // const arr = [14,'giotgi', 'akaki']
// // // // // // for ( let item of arr) {
// // // // // //   console.log(item)
// // // // // // }


// // // // // const arr = ['skillwil','sweeft',30,null]
// // // // // for(let useritem in user){
// // // // //   console.log( userkey, user[userKey]);

// // // // // }



// // // // function generateRandomNumber() {
// // // //   return parseInt (Math.random() * 10) + 1
// // // // }

// // // // // let randomNUmber = getRandomNumber();

// // // // // while( randomNUmber !== 7) {

// // // // //   randomNUmber = getRandomNumber();
// // // // // console.log(randomNUmber);
// // // // // }


// // // // let randomNUmber;



// // // // do {
// // // // randomNUmber = generateRandomNumber{};
// // // // console.log(randomNUmber);
// // // // }while(randomNUmber !== 7)



// // // const numbers = [1, 2, 5, 4, 3];

// // // numbers.forEach(function(item, index){
// // //   console.log(`${item} => ${index}`)
// // // })


// // // console.log(numbers.map(function(item, index){
// // //   return `${index} => ${item}`

// // // }))


// // // console.log(
// // //   numbers.filter(function(item,index){
// // //     return item > 3
  
// // //   })
// // // )

// // // console.log(
// // //   numbers.find(function(item,index){
// // //     return item > 3
  
// // //   })
// // // )

// // // const newNumbers = numbers;
// // // newNumbers[2] = 8;
// // // console.log(numbers);



// // // const car = {
// // //   manufacturer: 'porche',
// // //   brand: 'cayenne,'
// // //   year: 2022,
// // //   color: 'black'
// // // }
// // // const{manufacturer, brand,year,color} = car;
// // // console.log(manufacturer,brand,year,color);


// // // const brand = ['apple','samsung','hp','asus'];

// // // const [apple,samsung,hp,asus] = brand;
// // // console.log(apple,samsung,hp,asus);


// // // const cars =[
// // //   (manufacturer: 'porsche', owner: 'james bond'  ),
// // //   (manufacturer: 'lamborgini', owner: 'giorgi magradze'),
// // // ]

// // // const [
// // //   (manufacturer: porschemanuacturer, owner: porscheOwner  ),
// // //   (manufacturer: lamborginiManufacturer, owner: lamborginiOwner),
// // // ] = cars

// // // console.log(popscheManufacturer,porscheOwner,lamborginiManufacturer,lamborginiOwner);


// // // const sayHello = fullName => 'hello,' +fullName;
// // // console.log(sayHello('james bond'));


// // // const sayHello = (name1,name2)=> 'hello,' +name1+''+name2;
// // // console.log(sayHello{'giorgi', 'mate'});

// // // const user= {
// // //   name:'giorgi magradze',
// // //   sayHello() => {
// // //     console.log(this);
// // //     return 'hello,' + this.name;
// // //   }
// // // }
// // // console.log(user.sayHello);


// // // const calculateSum = (a,b,c) => {
// // //   return a+b+c;
// // //}
// // // console.log(calculateSum(2));
// // // console.log(calculateSum(2,5));

// // // const calculateSum2 = (a, b = 1, c = 1)=>{
// // //   return a+b+c;
// // // }

// // // console.log(calculateSum2(2));
// // // console.log(calculateSum2(2,undefined,5));
// // // console.log(calculateSum2(2,5));


// // // const users = {
// // //   fullName:'giorgi magradze',
// // // }

// // // const {fullName, adress:{city}= (city: ' ttbilisi')} = users;
// // // console.log(fullName, adress);


// // // davaleba 

// // // const calculatePercentage = (data) =>{
// // //   let sum = 0;
// // //   for (const num of data) {
// // //     sum += num;
// // //   }
// // //   const result = data.map((num)=>{
// // //     return(num / sum)*100;

// // //   })
// // //   console.log(result);
// // // }
// // // console.log(calculatePercentage([30,40,50,100]))


// // // const calculatePercentage = (data) =>{
// // //   let sum = 0;
// // //   for (const num of data) {
// // //     sum += num;
// // //   }
// // //   return data.map (num =>((num / sum)*100).toFixed());

// // //   }
 

// // // console.log(calculatePercentage([30,40,50,100]))

// // // davaleba 2

// // // const combineArrays = ({first,second},b)=>{

// // // return[first, ...b, second]
// // // }

// // // console.log(combineArrays([1,5],[2,3,4]));


// // // davaleba 3

// // // const capitalizeWords = (words)=> {
// // //   const result = []

// // //  for(const word of words){
// // //   const wordAsArray = word.split('_');
// // //   const capitalizedWords
// // //   for(const w of wordAsArray) {
// // //     capitalizedWords,push (w[0].toUpperCase() + w.slice(1));
// // //   }
// // //   result.push(capitalizedWords.join(' '));
// // //  }  
// // //  return result
// // // }
// // // console.log(capitalizeWords(['hello_world', 'james_bond', 'world_cup_2022']))


// // // console.log(document.documentElement);
// // //console.log(document.body.firstElementChild);
// // // console.log(document.head);


// // const meneger ={
// //   name: 'giorgi',
// //   lastName: 'magradze',
// //   address:'tbilisi'
// // }
// // const {name, lastName,address}=meneger


// //   console.log(name,lastame,address);

// const number = Math.floor(Math.random()*20 + 1);
 

// const input = document.getElementById('number');
// const guessBtn = document.querySelector('button');

// guessBtn.addEventListener('click', function() {

//   const userInput = number(input.value);
//   console.log(number);
//   if(!userInput) alert('you should enter the number');
//   return;
  
//   if(userInput === number) {
//     alert('you are a genius');
//   }
//   if(userInput< number) {
//     alert('your guess  is too low');
//   }
//   if(userInput > number) {
//     alert('your guess is too high')
//   }
// }
// )

// const promise = new Promise[(resolve,reject){

//   Math.random*+() > 0.5 ? resolve('music is ready, name:sixnine00') 
//   : reject('sorry,music is not ready');

// }]
// promise.then[(musicInfo) => {
// //listen to music

// }]
// catch.[() => {
//   //...

// }]



// function repeat [(str,n,cb)] {
//   let result= str;
//   for(let i = 0; i<n; i++){
//     result = cb(result);
//   }

// return(result;
//   )

// }
// const result = repeat('giorgi', 4, (t)=> `$(t)`);
// console.log(result);

// const myBoolean = true
// console.log(true);

// const myString = "hello world"
// console.log('hello world')

// const firstNumber = 20
// console.log(firstNumber)

// let secondNumber = 40
// console.log(secondNumber)


//  secondNumber = 80;
//  console.log(secondNumber)

//  const myArray = ['myBoolean', 'myString']
//  console.log(myArray);

//  const myOBject = {
//   firstProperty:myArray,
//   secondPropety:firstNumber+ secondNumber }
//   console.log(myString)


// const car = {
//   manufacturer: 'porche',
//   brand:'caynno',
//   year:2023,
//   color: 'black'
// }

// const {manufacturer,brand,year,color}=car
// console.log(manufacturer,brand,year,color)
  

const calculatePercentage =(data) =>{
let sum =0;
for(const num of data) {
sum= sum+num;
}
return data.map(num=>((num/sum)*100).toFixed(2));
}

console.log((calculatePercentage[30,40,50]))

