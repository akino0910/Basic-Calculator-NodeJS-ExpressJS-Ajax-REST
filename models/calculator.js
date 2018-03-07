'use strict';

function calculator(num1, num2, operator) {
	this.num1 = num1;
	this.num2 = num2;
	this.operator = operator;

	this.calculate = () => {
		var result = 0;
		switch (this.operator) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				result = num1 / num2;
				break;
		}
		if (isNaN(result)) {
			result = 0;
		}
		return result;
	}
};

module.exports = calculator;