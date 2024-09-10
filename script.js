let textbox_data = "";		//for display the result and get input

//for the history
let operand_1 = 0;
let operand_2 = 0;
let operater = "";

let length_1 = 0;				// store the length of 1st operand to extract the 2nd
let calculationHistory = [];    // New array to store calculation history

//to check if a calculation is done?
let flag = false;

function updateTextbox() {
	var inp = document.getElementById("textbox");
	inp.value = textbox_data;
}

function handleNumbers(num) {
	flag && handleClear();
	textbox_data = textbox_data + num;
	updateTextbox();
}

//using the eventlistener to add the operators and decimal point 
document.getElementById('mult').addEventListener('click', function() {
	handleNumbers('*');
});

document.getElementById('div').addEventListener('click', function() {
	handleNumbers('/');
});

document.getElementById('sub').addEventListener('click', function() {
	handleNumbers('-');
});

document.getElementById('add').addEventListener('click', function() {
	handleNumbers('+');
});

document.getElementById('mod').addEventListener('click', function() {
	handleNumbers('%');
});

document.getElementById('eql').addEventListener('click', function() {
	handleOperands();
});

document.getElementById('AC').addEventListener('click', function() {
	handleClear();
});

document.getElementById('deci').addEventListener('click', function() {
	handleNumbers('.');
});

function handleClear() {
	flag = false;
	textbox_data = "";
	updateTextbox();
}

function handleOperands() {
	var test = textbox_data.slice(length_1 + 1);
	operand_2 = parseFloat(test);
	handleCalculation();
}

function handleCalculation() {
	flag = true;
	let operation = textbox_data; // Store the operation before evaluation
	let result = eval(textbox_data);
	textbox_data = result.toString();
	updateTextbox();

	// Add calculation to history
	calculationHistory.push({
		operation: operation,
		result: result
	});

	// Render the updated history
	renderHistory();
}

// New function to render history
function renderHistory() {
	const historyList = document.getElementById('historyList');
	historyList.innerHTML = ''; // Clear existing history

	// creating the list of elements in history
	calculationHistory.forEach(item => {
		const historyItem = document.createElement('div');
		historyItem.className = 'history-item';
		historyItem.innerHTML = `
            <div>Operation: ${item.operation}</div>
            <div>Result: ${item.result}</div>
        `;
		historyList.appendChild(historyItem);
	});
}

// toggle function
function toggleHistory() {
	const historyPanel = document.getElementById('historyPanel');
	historyPanel.classList.toggle('hidden');
}

// Initial render of the history
renderHistory();
