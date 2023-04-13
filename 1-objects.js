// What is an Object

const cheese = {
	name: "Cheese",
	quantity: 5,
	price: 2,
}
// Adding new keys to an object

cheese.type = "blue"
cheese["size"] = "Big"
// Reassigning values
console.log(cheese)
const aKey = "quantity"

console.log(cheese.aKey)
console.log(cheese[aKey])

// Remove keys

delete cheese.name
console.log(cheese)

// Dot notation vs Bracket notation

const student = {
	name: "Fred",
	age: 27,
	address: {
		city: "Paris",
		postalCode: 75,
	},
	phoneNumber: "06495720745",
	pets: ["dog", "cats", "bird", "Chameleon"],
}

console.log(student.address.postalCode)
console.log(student.pets[1])

// for (const pet of student.pets) {
// 	if (pet !== "cats") {
// 		console.log("found the non cat!", pet)
// 	}
// }

// Looping over and Object
// console.log("LOOPING OVER OBJECT")
// for (const key in student) {
// 	console.log(key, student[key])
// }

// Getting all of the keys of an Object
const existingKeys = Object.keys(student)
console.log(existingKeys)

// Getting all the values of an object
const allValues = Object.values(student)
console.log(allValues[2])

// Getting the key-value pairs (entries) of an Object
const allKeyValuePairs = Object.entries(student)

console.log(allKeyValuePairs)
console.table(allKeyValuePairs)
