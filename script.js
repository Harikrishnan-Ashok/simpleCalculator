let textbox_data = ""
let operand_1 = 0;
let operand_2 = 0;
let operater = ""
let length_1 = 0;
let flag = false;
function handleClick() {
	alert("equall button clicked")
}

function updateTextbox() {
	var inp = document.getElementById("textbox")
	inp.value = textbox_data;
}

function handleNumbers(num) {
	flag && handleClear();
	textbox_data = textbox_data + num
	updateTextbox()
}

document.getElementById('mult').addEventListener('click', function() {
	handleNumbers('*');
})

document.getElementById('div').addEventListener('click', function() {
	handleNumbers('/');
})

document.getElementById('sub').addEventListener('click', function() {
	handleNumbers('-');
})

document.getElementById('add').addEventListener('click', function() {
	handleNumbers('+');
})

document.getElementById('mod').addEventListener('click', function() {
	handleNumbers('%');
})

document.getElementById('eql').addEventListener('click', function() {
	handleOperands();
})

document.getElementById('AC').addEventListener('click', function() {
	handleClear();
})

document.getElementById('deci').addEventListener('click', function() {
	handleNumbers('.');
})

function handleClear() {
	flag = false;
	textbox_data = "";
	updateTextbox();
}

function handleOperands() {
	var test = textbox_data.slice(length_1 + 1)
	operand_2 = parseFloat(test)
	handleCalculation();
}

function handleCalculation() {
	flag = true
	textbox_data = eval(textbox_data);
	updateTextbox()
}
