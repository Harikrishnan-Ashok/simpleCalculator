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
	console.log(num);
	textbox_data = textbox_data + num
	console.log(textbox_data)
	updateTextbox()
}

document.getElementById('mult').addEventListener('click', function() {
	handleOperator('*');
})

document.getElementById('div').addEventListener('click', function() {
	handleOperator('/');
})

document.getElementById('sub').addEventListener('click', function() {
	handleOperator('-');
})

document.getElementById('add').addEventListener('click', function() {
	handleOperator('+');
})

document.getElementById('mod').addEventListener('click', function() {
	handleOperator('%');
})

document.getElementById('eql').addEventListener('click', function() {
	handleOperands();
})

document.getElementById('AC').addEventListener('click', function() {
	handleClear();
})

document.getElementById('deci').addEventListener('click', function() {
	handleFloat('.');
})

function handleClear() {
	flag = false;
	textbox_data = "";
	updateTextbox();
}

function handleOperator(chara) {
	console.log(chara)
	length_1 = textbox_data.length
	operand_1 = parseInt(textbox_data);
	operater = chara
	textbox_data = textbox_data + chara;
	updateTextbox();
}

function handleFloat() { }

function handleOperands() {
	console.log(length_1)
	var test = textbox_data.slice(length_1 + 1)
	operand_2 = parseInt(test)
	console.log(test)
	handleCalculation();
}

function handleCalculation() {
	flag = true
	switch (operater) {
		case '/': textbox_data = (operand_1 / operand_2)
			break;

		case '*': textbox_data = (operand_1 * operand_2)
			break;

		case '+': textbox_data = (operand_1 + operand_2)
			break;

		case '-': textbox_data = (operand_1 - operand_2)
			break;

		case '%': textbox_data = (operand_1 % operand_2)
			break;
	}
	updateTextbox()
}
