// const maxNumber = Math.max(...myArray)
// console.log(maxNumber)
// const animals = ["Giraffe", "Lion"]
// const otherArray = [...myArray, ...animals]
// console.log(otherArray)

// myArray[0] = "something"
// console.log(myArray, otherArray)

const myArray = []
myArray.push(-20, -5, 5, 10, 12, 21, 67)
let max = -Infinity
let something = ""
// Loop over the array
for (const number of myArray) {
	// Check if the number is bigger than my known max
	if (typeof number === "string") {
		something += number
		continue
	}
	if (number > max) {
		// It mean that i found a bigger max
		max = number
	}
}
let newMax

for (let i = 0; i < myArray.length; i++) {
	const num = myArray[i]
	if (num > newMax) {
		newMax = num
	}
}
for (const num of myArray) {
	if (num > newMax) {
		newMax = num
	}
}
console.log(newMax)

// Make a loop over the array

let sum = 0

myArray.forEach((element) => {
	if (element % 3 === 0) {
		sum += element
	}
})

console.log(sum)
