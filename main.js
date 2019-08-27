// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function firstFactorial(num) {
	if (num === 0 || num == 1) {
		return 1;
	} else {
		return num * firstFactorial(num - 1);
	}
}
// console.log(firstFactorial(1));

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) {
	const makeArr = str.split("");
	makeArr.reverse();
	return makeArr.join("");
}

// console.log(firstReverse("hello"));

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

// function SimpleAdding(num) {
// 	if (num === 1) {
// 		return 1;
// 	} else {
// 		return num + SimpleAdding(num - 1);
// 	}
// }

const simpleAdding = num => {
	myArr = [];

	for (let i = 0; i <= num; i++) {
		myArr.push(i);
	}

	const finArr = myArr.reduce((acc, current) => acc + current);
	return finArr;
};

// console.log(simpleAdding(140));

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

const LetterCapitalize = str => {
	const wordArr = str.split(" ");

	for (let i = 0, n = wordArr.length; i < n; i++) {
		wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
	}
	str = wordArr.join(" ");

	return str;
};

console.log(LetterCapitalize("hello there"));
