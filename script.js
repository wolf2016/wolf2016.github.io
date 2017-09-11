var notArray = "The object given is not an array: ";
var array0; //variable that stores the flattened arrays.
var output;

/**
 * @method flattener - flattens arrays
 * @param {object} array - the array that should be flattened.
 * @return {object} array0 - the array after it's flattened.
 */
flattener = array => {
	//iterate through array
	for (var i = 0, length = array.length; i < length; i++) {
		//if the array item is not an array, add it to the answer array
		//if the array item is an array, call flattener again.
		!Array.isArray(array[i]) ? array0.push(array[i]) : flattener(array[i]);
	}
	return array0;
}

/**
 * @method verify - checks if the object the user input is an array
 * @param {object} obj - the object the user input
 */
verify = obj => {
	clear();
	//created the try/catch block to catch JSON.parse() errors
	try {
		//make array string input an array object. Does nothing to non array strings.
		obj = JSON.parse(obj);
		//if the obj
		if (!Array.isArray(obj)) { //check if the object is an array
			notAnArray(obj); //if not, call the notAnArray function
		}
		else {
			//if it is an array, add the before status and after status when it goes through the flattener to the div.
			var flat = document.createTextNode(JSON.stringify(obj) + " -> " + JSON.stringify(flattener(obj)));
			output.appendChild(flat);
		}
		//catches non array objects and returns that it's not an array.
	}
	catch (e) {
		notAnArray(obj);
	}
}

/**
* @method flattenerTests - function which tests flattener function on page load
and shows the results on the page.
*/
flattenerTests = () => {
	output = document.getElementById("flat"); //get div where user entered flattened arrays will appear
	//create an array of objects to test in the flattener
	var array1 = [];
	array1.push([
		[1, 2, [3]], 4
	]);
	array1.push([
		[0, [1, 2, 3], 4, ], 5, 6, 7, [8, [9, 10, [11, 12]]]
	]);
	array1.push([1, 2, 3, 4]);
	array1.push([0]);
	array1.push("here");
	array1.push('s');
	array1.push(1);
	array1.push([]);
	//iterate through the test objects
	for (var i = 0, length = array1.length; i < length; i++) {
		clear(); //call clear to remove any values in array0
		var obj = array1[i]; //grab a test object 
		var pDiv = document.getElementById("tests"); //grab the test result div
		var cDiv = document.createElement("div"); //creates a div for the test object's results
		if (!Array.isArray(obj)) { //check if the object is an array
			//if it's not an array, return notArray with the object
			var t = document.createTextNode(notArray + obj);
			cDiv.appendChild(t);
		}
		else {
			//if it is an array, add the before status and after status when it goes through the flattener to the div.
			var t = document.createTextNode(JSON.stringify(obj) + " -> " + JSON.stringify(flattener(obj)));
			cDiv.appendChild(t);
		}
		//add the object result to the div that is in the html
		pDiv.appendChild(cDiv);
	}
}

/**
@method clear - cleans out array0 and output div.
*/
clear = () => {
	array0 = [];
	output.innerHTML = "";
}

/**
@method notAnArray - Informs user that the object is not an array.
@param {Object} userInput - input user gave to be flattened but is not an array
*/
notAnArray = (userInput) => {
	output.innerHTML = notArray + userInput;
}