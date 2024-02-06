//convert temps
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
