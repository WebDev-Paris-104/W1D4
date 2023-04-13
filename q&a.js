const str = "Et Lorem et, ipsum et something."

const regEx = new RegExp(/\bet\b/, "gi")
// const matches = str.match(/\bet\b/gi)

const matches = str.match(regEx)
console.log(matches)
// console.log(splittedString)
// let counter = 0
// for (let i = 0; i < str.length; i++) {
// 	if (str[i - 1] === " " && str[i] === "e" && str[i + 1] === "t") {
// 		counter++
// 	}
// }
// console.log(counter)

const palindrome = "Amor, ro!!    ma"

let cleanedString = ""
for (let i = 0; i < palindrome.length; i++) {
	const letter = palindrome[i]
	if (letter.toLowerCase() !== letter.toUpperCase()) {
		cleanedString += letter.toUpperCase()
		console.log(cleanedString)
	}
}
