const express = require('express');
const router = express.Router();
const Calculator = require('../../models/calculator');

router.get('/', function (req, res, next) {
	const num1 = req.query.x;
	const num2 = req.query.y;
	const operator = req.query.operator;

	console.log(num1 + '\t' + num2 + '\t' + operator);

	var calculator = new Calculator(Number(num1), Number(num2), operator);

	var kq = calculator.calculate();

	var rs = {};

	rs.result = kq;

	res.status(200).send(rs);

});

module.exports = router;