var express = require('express');
var router = express.Router();
const Calculator = require('./../models/calculator');
const catchError = require('./../models/catchError');
var Handlebars = require('hbs');
Handlebars.registerHelper("setRadio", function (value, curValue) {
	if (value == curValue) {
		return "checked";
	} else {
		return "";
	}
});
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Bé tập tính'});
});

router.post('/', function (req, res, next) {
	const soThuNhat = req.body.soThuNhat;
	const soThuHai = req.body.soThuHai;
	const toanTu = req.body.toanTu;

	var calculator = new Calculator(soThuNhat, soThuHai, toanTu);
	var kq = calculator.tinhKetQua();

	var msgError = catchError.kiemTraLoi(soThuNhat, soThuHai, toanTu);

	res.render('index', {
		title: 'Bé tập tính',
		soThuNhat: soThuNhat,
		soThuHai: soThuHai,
		toanTu: toanTu,
		ketQua: kq,
		msgError: msgError
	});
});

module.exports = router;