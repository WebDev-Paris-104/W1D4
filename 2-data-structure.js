const groceryList = [
	{
		name: "cheese",
		qty: 5,
	},
	{
		name: "milk",
		qty: 3,
	},
	{
		name: "tomatoes",
		qty: 10,
	},
]

let sum = 0

for (const food of groceryList) {
	console.log(food)
	sum += food.qty
}
console.log(sum)
