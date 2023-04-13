// What is an Array

// Declaring an Array

const groceryList = ["Cheese", "Chocolate"]
//                      0            1

// Adding new elements to an Array

const amountOfElements = groceryList.push("Milk")

console.log(amountOfElements)
console.log(groceryList)

// Removing from an Array
// const removedElement = groceryList.pop()
// console.log("Removed element", removedElement)
// console.log("Removed milk", groceryList)
groceryList.unshift("Wine")

// console.log(groceryList)

// groceryList.splice(2)

console.log(groceryList)
// groceryList[10] = "HELLO"
// console.log(groceryList)

// Reassigning elements to an Array

groceryList[0] = "Pasta"

console.log(groceryList)

// groceryList = [1, 2, 3]

// Looping over an Array with for - of and forEach

for (let index = 0; index < groceryList.length / 2; index += 2) {
	const element = groceryList[index]
	console.log(element)
}

// for (const food of [1, 5, 8, 2344, 257, "parrot"].reverse()) {
// 	console.log("In my fridge I have: ", food)
// }

for (let element of groceryList) {
	console.log(element)
}

groceryList.forEach((whatever, i, myArray) => {
	console.log(whatever, i, myArray)
})

groceryList.forEach((food) => {
	console.log("Simple forEach loop: ", food)
})

groceryList.forEach(function (food) {
	console.log("Simple forEach loop with function declaration: ", food)
})

Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

groceryList.myForEach((food, i, array) => {
	console.log("My for each: ", food, i, array)
})

// Shallow copy of an Array

// Deep copy of an array
