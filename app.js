

// TODO Chapter # 17 - 20 


// Question # 1

// var array = [[] , [] , []]


// Question # 2

// var array = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]]


// Question # 3

// for (var i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }


// Question # 4

// var table = + prompt("Enter a number :");
// var length = + prompt("Enter length where you want to :")
// for(var i = 1 ; i <= length ; i++){
//     console.log(table + " X " + i + " = " + table*i)
// }


// Question # 5

// var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"]
// for(i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i])
//     console.log("Element at index " + i + " is " + fruits[i])
// }


// Question # 6

// A 
// for (i = 1 ; i <= 15 ; i++){
//     console.log(i)
// }

// B
// for(i = 10 ; i >= 1 ; i--){
//     console.log(i)
// }

// C
// for (i = 0 ; i <= 20 ; i++){
//     if (i % 2 === 0 ){
//         console.log(i)
//     }
// }

// D
// for (i = 0 ; i <= 20 ; i++){
//     if (i % 2 != 0 ){
//     console.log(i)
//     }
// }

// E
// for (i = 2 ; i <= 20 ; i++){
//     if (i % 2 === 0 ){
//     console.log(i+"k")
//     }
// }


// Question # 7

// var input = prompt("Enter an item")
// items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"]
// available = false
// for(var i = 0 ; i < items.length ; i++){
//     if (items[i] === input){
//         available = true
//         console.log("Available")

//     }
// }
// if (!available){
//     console.log("Not Available")
// }


// Question # 8

// var array = [24 , 53 , 78 , 91 , 12]
// var largest = array[0];
// for (i = 0 ; i < array.length ; i++){
//     if (array[i] > largest){
//         largest = array[i]
//     }
// }
// console.log("The largest number in the array is " + largest)


// Question # 9

// var array = [24 , 53 , 78 , 91 , 12]
// var smallest = array[0]
// for (var i = 0 ; i < array.length ; i++){
//      if(array[i] < smallest)
//      smallest = array[i]
// }
// console.log("The smallest number in the array is " + smallest)


// Question # 10

// for (var i = 1 ; i <= 100 ; i++){
//     if (i <= 100 && i % 5 === 0){
//         console.log(i)
//     }
// }







// TODO Chapter # 21 - 25


// Question # 1

// var firstName = prompt("Enter First Name: ")
// var lastName = prompt("Enter Last Name: ")
// var fullName = firstName + " " + lastName
// console.log("Hello " + fullName)


// Question # 2

// var input = prompt ("Name your favourite mobile :" )
// console.log(input.length)


// Question # 3

// var word = "Pakistani"
// var letterToFind = "n"
// var index = word.indexOf(letterToFind)
// if (index !== -1 ){                       // if nothing is found then ".indexof " returns value -1 thats's why we've made this condition
//     console.log(index)
// }else{
//     console.log("Does not exist at any index")
// }


// Question # 4

// var word = "Hello World"
// var letterToFind = "l"
// var index = word.lastIndexOf(letterToFind)
// if(index !== -1){
//     console.log(index)
// }else {
//     console.log("Not found")
// }


// Question # 5

// var word = "pakistani"
// var indexToFind = word[3]
// console.log(indexToFind)


// Question # 7

// var city = "Hyderabaad"
// var updatedCity = city.replace("Hyder", "Islam")
// console.log("Updated city is " + updatedCity)
// console.log("Original city is " + city)


// Question # 8

// var message ="Ali and Sami are best friends. They play cricket and football together."
// var updatedmessage = message.replace(/and/g , "&&")  // The /g flag tells JavaScript to replace all occurrences of "and" in the string, not just the first one.
// console.log(message)
// console.log(updatedmessage)


// Question # 9

// var stringNumber = "472"
// var integerNumber = parseInt(stringNumber)
// console.log(stringNumber + " " +  typeof(stringNumber))
// console.log(integerNumber + " " +  typeof(integerNumber))


// Question # 10

// var input = prompt("Enter anything: ")
// var updatedInput = input.toUpperCase()
// console.log("User Input : " + input)
// console.log("Upper Case : " + updatedInput)


// Question # 11

// var word = "javascript"
// var updatedWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
// console.log(updatedWord)


// Question # 12

// var integerNumber = 35.36
// var stringNumber = integerNumber.toString()
// stringNumber = stringNumber.replace("." , "")
// console.log(integerNumber + " " +  typeof(integerNumber))
// console.log(stringNumber + " " +  typeof(stringNumber))


// Question # 13

// var userName = prompt("Enter anything : ")
// var specialCharacter = /[.,@#$%^&*!]/
// if (specialCharacter.test(userName)){
//     console.log("Please enter a valid Username !")
// }else{
//     console.log(userName)
// }


// Question # 14

// var input = prompt("Enter an item")
// items = ["cake" , "apple pie" , "cookies" , "chips" , "patties"]
// available = false
// for(var i = 0 ; i < items.length ; i++){
//     if (items[i] === input){
//         available = true
//         console.log("Available")

//     }
// }
// if (!available){
//     console.log("Not Available")
// }


// Question # 16

// var university = "University of Karachi "
// university = university.split("")
// for (var i = 0 ; i < university.length ; i++){
//     console.log(university[i])
//     // document.write("<br>")
// }