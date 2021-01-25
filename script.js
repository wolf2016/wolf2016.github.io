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
		output = document.getElementById("flat"); //get div where user entered flattened arrays will appear
	clear();
	//created the try/catch block to catch JSON.parse() errors
	try {
		//make array string input an array object. Does nothing to non array strings.
		obj = JSON.parse(obj);
		//if the obj
		if (!Array.isArray(obj)) { //check if the object is an array
			notAnArray(JSON.stringify(obj)); //if not, call the notAnArray function
		}
		else {
			//if it is an array, add the before status and after status when it goes through the flattener to the div.
			var flat = document.createTextNode(JSON.stringify(obj) + " -> " + JSON.stringify(flattener(obj)));
			output.appendChild(flat);
		}
		//catches non array objects and returns that it's not an array.
	}
	catch (e) {
		notAnArray(JSON.stringify(obj));
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
