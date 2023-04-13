// 4 types of functions
const students = require("./data.json")
// "Classic one": function declaration++
// function expression
// Arrow functions++
// generator functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

/**
 * Function syntax
 */

function functionName() {
	/**
	 * What ever needs to be done
	 */
}

function getRandomNumber(maxValue) {
	try {
		if (typeof maxValue !== "number") {
			throw Error(
				`We expect a number as argument for this function, you provided : ${maxValue}`
			)
		}
		const randomNumber = Math.floor(Math.random() * maxValue)
		return randomNumber
	} catch (error) {
		console.log(error.message)
	}
}

const firstRandomNumber = getRandomNumber(10)
const secondRandomNumber = getRandomNumber(500)
const thirdRandomNumber = getRandomNumber("hey there")
const fourthRandomNumber = getRandomNumber(secondRandomNumber)

console.log(
	firstRandomNumber,
	secondRandomNumber,
	thirdRandomNumber,
	fourthRandomNumber
)

/**
 * Let's now create some fun.. fun.. functions
 */

function oldestStudent(arrayOfStudents) {
	let max = -Infinity
	let studentName = ""
	for (const student of arrayOfStudents) {
		if (student.age > max) {
			max = student.age
			studentName = student.firstName
		}
	}
	return { name: studentName, age: max }
}

const theOldestStudentInTheRoom = oldestStudent(students)
console.log(theOldestStudentInTheRoom)
