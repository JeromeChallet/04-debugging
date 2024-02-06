//convert temps
/*
const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",

		//C) fix the bug
		//convert the string to an int
		//value: prompt("Degrees celsius:"), //old one
		value: Number(prompt("Degrees celsius:")),
	};

	//2) 1 returns a correct value so lets have a deeper look
	//in the console we that "value" is a string (because prompt by default returns a string)
	console.log(measurement);
	console.table(measurement); //displays the obj in a nive looking table

	//B) find the bug
	//1) start by inspecting the measurement value to see if there is something wrong
	console.log(measurement.value); //10
	console.warn(measurement.value); //10 generates warning look
	console.error(measurement.value); //10 generates error look

	const kelvin = measurement.value + 273;
	return kelvin;
};
//A) identify the bug
console.log(measureKelvin());

//to add a debugger in google chrome
//inspect -> sources -> select script.js -> place a break point on the line you want
//now when we reload the page, the execution will stop at this point
//at that point, we can see the values in the console log to make sure they are what they are supposed to be at that point
//you can execute the rest of the funciton by hitting the "step" (F9)
//this way youc an compare with the previous value you have just read

//calculate amplitude
const calcTempAmplitudeNew = function (t1, t2) {
	const temp = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];
	// this a js statement calls the debugger in the browser
	//it will automtically open up the debugger tool
	//kinda like a break point
	debugger;
	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== "number") continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
	for (let i = 0; i < arr.length; i++)
		console.log(`${arr[i]}C in ${arr.indexOf(arr[i]) + 1} days...`);
}

printForecast(testData1);
printForecast(testData2);
