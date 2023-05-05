// console.log('SUSHEEL')
// name='sushil'
// console.log(name)
// sentence='hello its me susheel.. how are you i hope you are doing fine'
// console.log(sentence)
/*
let weather=prompt('Is it rainy or not outside?')
if(weather=='rainy')
{console.log('GRAB YOUR UMBRELLA')}
else
 {console.log('wear your freaking sunglasses')} */

//function initialization 
/* function sum(a,b)
  {
    return a + b
  } */

//console.log (sum(3,5))
//num=sum(1,2)
//console.log(num)

//arrow function
//const sum2=(a,b) => a+b  //it automatically returns the value
//console.log(sum2(5,5))

//exercises of the arrow function
//const add=(a,b) => a+b

//const sub=(a,b) => a-b

//const div=(a,b) => a/b

//const mul=(a,b) => a*b

//console.log(add(5,5))

//console.log(sub(6,5))

//console.log(div(10,5))

//console.log(mul(2,3))
/* food=Number(prompt('what is the price of the food?'))
console.log('food:',food)
tippercentage=Number(prompt('what is the tip percent?') / 100)
console.log('tippercent:',tippercentage)
tipamt= food*tippercentage
console.log('tipamount:',tipamt)
total= food + tipamt
console.log('the total amount to pay is:',total) */
// function sum(a,b)
// {
//   let c= a+b
//   return c
// }
// add=sum(3,4)
// console.log(add)

// function differ(d,e)
// {
//   let f=d-e
//   return f
// }
// diff=differ(9,5)
// console.log(diff)
// console.log(add*diff)

// arrays
// const groceries =['apple','banana','cucumber','orange']
// console.log(groceries)
// //groceries.push('lemon')
// groceries.pop()
// groceries.pop()
//console.log(groceries.slice(1,3))

// OBJECTS
// const person ={
//   name:'SUSHEEL',
//   surname:'BARAL'
// }
// console.log(person.name)
// console.log(person['surname'])

// function with object
// function introduce (name,shirt){  // function
//   const person={      //to create objects
//     name,shirt,// passing an argument as a object
//     total:10000,
//     debt: 1000,
//     net: function(){
//     return this.total-this.debt
//     }
    
//   }
//   const intro=`hi i am ${person.name} and my shirt is ${person.shirt} and my net balance is ${person.net()}`
//   return intro
// }
// console.log(introduce('susheel','white'))
//console.log(introduce('happy','red'))

// for loops
//const fruits=['banana','orange','apple','mango','grapes','kiwi']
// let n = fruits.length
// for (let i=0;i<n;i++)
//   {
//     console.log(fruits[i])
//   }

// new way to implement for loops without indexing
// for(const dog of fruits)
//   {
//     console.log(dog)
//   }
// const double=(numbers) => {
// //const numbers=[1,2,3,4,5,6]
// let result=[]
// for(const no of numbers)
//   {
//     //console.log(no+3)
//     result.push(no**5)
//   }
//   return result
// }
//    console.log(double([1,2,3,4,5]))

// const count=() => {
//   let phrase='hey do you know how many letters i have used here?'
//   for (const letters of phrase)
//     {
//       console.log(letters)
//     }
// }
//count()

 // const susheel=(write) => {
  
 //   let result=0
 //   for (const my in write)
 //     {
 //       console.log(Number(my)+1)
 //       result=Number(my)+1
 //     }
 //   return { result }
 // }
 //const uniform='i have to get my uniform as soon as possible'
//const write=prompt(console.log('write any thing whose length is to be calculated'))
//console.log(write)
 //console.log(susheel(write))

//sum of number of arrays ie total arrays
// const sum=(num) =>
// {
//   let result=0
//   //for loop
//   for(const susheel of num)
//     {
//       console.log(susheel)
//       result=result+ susheel
//     }
//   return {result}
  
// }
// const number=[1,2,3,4,5]
// console.log(sum(number))

// const max=(num) =>
//   {
//     let result =num[0]
//     for(const susheel of num)
//       {
//         console.log(susheel)
//         if(susheel > result)
//         {
//           result=susheel
//         }
        
//       }
//     return { result }
//   }
// console.log(max(prompt('enter the number')))

// function to calculate letter frequency i.e occurance
// const frequency=(phrase) =>
//   {
//     console.log(phrase)
//     // make a object called `freq`
//     let freq={}
//     for(const letter of phrase)
//       {
//         //check if letter exists in freq
        
//         if(letter in freq)
//         {
//           //if it exists then flag or increase the value by 1
//           freq[letter]+=1
//         }
//         else
//         {
//           freq[letter]=1
//         }
//       }
//     return freq  //returning an object
//   }
//    //console.log(frequency("susheeel"))
// //frequency of words
// const wordfreq=(phrase) => //arrow function
//   {
//     const word =phrase.split(' ') //to split words with space and make a single word as a single array and so on
    
//     return frequency(word) //calling the previous function we made for frequency of letters
//   }
// console.log(wordfreq('hey lol yo lol lol what lol yo hey'))