/*
* Conditionals, Functions, Scope, and Loops.
*/
/*...*/

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

function compareStorePrices (storeA,storeB) {
	let storeAIsLower = storeA <storeB;
}if (storeAIsLower) {
	console.log ("Store A has a lower price.")
} else if (storeB < storeA) {
	console.log("Store B has a lower price.")
} else {
	console.log("Their prices are equal.")
}

//compareStorePrices(10, 5);
//compareStorePrices(7,10);

function squareNum(number) {
	let squarded = number * number;
	let subed = number - 19;
}

let squareNumber = squareNum(10);
console.log(squareNumber);
